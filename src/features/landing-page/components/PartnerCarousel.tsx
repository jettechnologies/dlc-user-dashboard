"use client"

import { EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import React, { useEffect, useState } from "react"

type PropType = {
	children: React.ReactNode
	isAutoPlay?: boolean
	autoPlayInterval?: number
	isCoverflow?: boolean
	options?: EmblaOptionsType
	className?: string
}

type SlideTransform = {
	translateX: number
	translateY: number
	scale: number
	opacity: number
}

export const PartnerCarousel: React.FC<PropType> = ({
	children,
	isAutoPlay = false,
	autoPlayInterval = 3000,
	isCoverflow = false,
	options,
	className = ""
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			...options,
			loop: true,
			align: "center",
			skipSnaps: true,
			dragFree: true,
			containScroll: false
		},
		[
			Autoplay({
				playOnInit: isAutoPlay,
				delay: autoPlayInterval,
				stopOnInteraction: false
				// defaultLocation: "start",
			})
		]
	)

	const [slideTransforms, setSlideTransforms] = useState<SlideTransform[]>([])
	const [prevScrollSnap, setPrevScrollSnap] = useState(0)

	useEffect(() => {
		if (!emblaApi || !isCoverflow) return

		const updateCoverflowEffect = () => {
			// const scrollProgress = emblaApi.scrollProgress()
			const slides = emblaApi.slideNodes()
			const selectedIndex = emblaApi.selectedScrollSnap()
			const slidesPerView = 3

			// Track scroll direction
			const isScrollingForward =
				selectedIndex > prevScrollSnap ||
				(prevScrollSnap === slides.length - 1 && selectedIndex === 0)
			setPrevScrollSnap(selectedIndex)

			const transforms = slides.map((_, index) => {
				// Calculate relative position considering continuous flow
				let relativePosition = index - selectedIndex

				// Adjust for loop transition
				if (isScrollingForward && relativePosition < -1) {
					relativePosition += slides.length
				} else if (!isScrollingForward && relativePosition > 1) {
					relativePosition -= slides.length
				}

				// Normalize the offset for transform calculations
				const normalizedOffset = relativePosition / slidesPerView

				// Calculate parabolic motion
				const spread = 300
				const amplitude = 80
				const translateX = relativePosition * spread
				const translateY = Math.pow(normalizedOffset * 2, 2) * amplitude

				// Scale calculation with smoother transition
				let scale = 0.65
				if (Math.abs(relativePosition) < 0.5) {
					scale = 1.05
				} else if (Math.abs(relativePosition) < 1) {
					scale = 0.65 + (1.05 - 0.65) * (1 - Math.abs(relativePosition))
				}

				// Smooth opacity transition
				const opacity = Math.max(0, 1 - Math.abs(normalizedOffset))

				return {
					translateX,
					translateY,
					scale,
					opacity: opacity * opacity // Squared for smoother fade
				}
			})

			setSlideTransforms(transforms)
		}

		const handleScroll = () => {
			requestAnimationFrame(updateCoverflowEffect)
		}

		emblaApi.on("scroll", handleScroll)
		emblaApi.on("reInit", updateCoverflowEffect)
		emblaApi.on("select", updateCoverflowEffect)

		updateCoverflowEffect()

		return () => {
			emblaApi.off("scroll", handleScroll)
			emblaApi.off("reInit", updateCoverflowEffect)
			emblaApi.off("select", updateCoverflowEffect)
		}
	}, [emblaApi, isCoverflow, prevScrollSnap])

	return (
		<div className="embla w-full overflow-hidden">
			<div
				className="embla__viewport relative mx-auto max-w-[1200px]"
				ref={emblaRef}
			>
				<div className="embla__container relative flex h-[390px] items-center justify-center">
					{React.Children.map(children, (child, index) => {
						const transform = slideTransforms[index] || {
							translateX: 0,
							translateY: 0,
							scale: 1,
							opacity: 1
						}

						return (
							<div
								className={`embla__slide relative h-80 flex-[0_0_33.333%] ${className}`}
								style={{
									transform: `
                    translateX(${transform.translateX}px)
                    translateY(${transform.translateY}px)
                    scale(${transform.scale})
                  `,
									opacity: transform.opacity,
									transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
									position: "absolute",
									left: "50%",
									marginLeft: "-150px",
									width: "300px",
									zIndex: transform.scale === 1.05 ? 2 : 1,
									willChange: "transform, opacity"
								}}
							>
								{child}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

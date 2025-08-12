"use client"

import clsx from "clsx"
import { EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useEffect, useCallback } from "react"

type PropType = {
	children: React.ReactNode
	isAutoPlay?: boolean
	autoPlayInterval?: number
	options?: EmblaOptionsType
	className?: string
	hasNavigationButtons?: boolean
}

export const Carousel: React.FC<PropType> = ({
	children,
	isAutoPlay = false,
	autoPlayInterval = 3000,
	options,
	hasNavigationButtons = false,
	className
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({
			playOnInit: isAutoPlay,
			delay: autoPlayInterval,
			stopOnInteraction: false
		})
	])

	useEffect(() => {
		if (emblaApi) emblaApi.reInit()
	}, [children, emblaApi])

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	const childArray = React.Children.toArray(children)

	return (
		<div className={clsx("w-full max-w-full relative", className)}>
			{/* Carousel */}
			<div ref={emblaRef} className="overflow-hidden w-full">
				<div className="flex gap-4 md:gap-6">
					{childArray.map((child, index) => (
						<div
							key={index}
							className={clsx(
								"flex-shrink-0",
								index === 0 && "ml-4 md:ml-6",
								index === childArray.length - 1 && "mr-4 md:mr-6"
							)}
						>
							{child}
						</div>
					))}
				</div>
			</div>

			{/* Buttons for larger screens */}
			{!hasNavigationButtons ? null : (
				<>
					<div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2">
						<button
							onClick={scrollPrev}
							className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>
					</div>

					<div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2">
						<button
							onClick={scrollNext}
							className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</>
			)}

			{/* Buttons below for small screens */}
			{!hasNavigationButtons ? null : (
				<div className="flex md:hidden justify-center gap-24 mt-2">
					<button
						onClick={scrollPrev}
						className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={scrollNext}
						className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
			)}
		</div>
	)
}

// "use client"

// import { EmblaOptionsType } from "embla-carousel"
// import Autoplay from "embla-carousel-autoplay"
// import useEmblaCarousel from "embla-carousel-react"
// import React, { useEffect } from "react"

// type PropType = {
// 	children: React.ReactNode
// 	isAutoPlay?: boolean
// 	autoPlayInterval?: number
// 	options?: EmblaOptionsType
// 	className?: string
// }

// export const Carousel: React.FC<PropType> = ({
// 	children,
// 	isAutoPlay = false,
// 	autoPlayInterval = 3000,
// 	options,
// 	className
// }) => {
// 	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
// 		Autoplay({
// 			playOnInit: isAutoPlay,
// 			delay: autoPlayInterval,
// 			stopOnInteraction: false
// 		})
// 	])

// 	useEffect(() => {
// 		if (emblaApi) emblaApi.reInit()
// 	}, [children, emblaApi])

// 	const childArray = React.Children.toArray(children)

// 	return (
// 		<div className={`w-full max-w-full ${className || ""}`}>
// 			<div ref={emblaRef} className="overflow-hidden w-full">
// 				<div className="flex gap-4 md:gap-6">
// 					{childArray.map((child, index) => (
// 						<div
// 							key={index}
// 							className={`flex-shrink-0
//                 ${index === 0 ? "ml-4 md:ml-6" : ""}
//                 ${index === childArray.length - 1 ? "mr-4 md:mr-6" : ""}
//               `}
// 						>
// 							{child}
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

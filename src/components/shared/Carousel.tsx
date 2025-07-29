"use client"

import { EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import React, { useEffect } from "react"

type PropType = {
	children: React.ReactNode
	isAutoPlay?: boolean
	autoPlayInterval?: number
	options?: EmblaOptionsType
	className?: string
}

export const Carousel: React.FC<PropType> = ({
	children,
	isAutoPlay = false,
	autoPlayInterval = 3000,
	options,
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

	const childArray = React.Children.toArray(children)

	return (
		<div className={`w-full max-w-full ${className || ""}`}>
			<div ref={emblaRef} className="overflow-hidden w-full">
				<div className="flex gap-4 md:gap-6">
					{childArray.map((child, index) => (
						<div
							key={index}
							className={`flex-shrink-0
                ${index === 0 ? "ml-4 md:ml-6" : ""}
                ${index === childArray.length - 1 ? "mr-4 md:mr-6" : ""}
              `}
						>
							{child}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

// import { Box, Flex } from "@chakra-ui/react"
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
// 	options
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

// 	return (
// 		<Box w="full" maxW="100%">
// 			<Box ref={emblaRef} overflow="hidden" w="full">
// 				<Flex
// 					gap={{ base: "16px", md: "24px", xl: "40px" }}
// 					_last={{
// 						px: { base: "16px", md: "24px", xl: "40px" }
// 					}}
// 				>
// 					{React.Children.map(children, (child, index) => (
// 						<Box key={index} flex="0 0 auto">
// 							{child}
// 						</Box>
// 					))}
// 				</Flex>
// 			</Box>
// 		</Box>
// 	)
// }

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

// 	return (
// 		<section className="embla m-auto w-full">
// 			<div className="embla__viewport overflow-hidden" ref={emblaRef}>
// 				<div className="embla__container flex">
// 					{React.Children.map(children, (child) => (
// 						<div className={`embla__slide ${className} flex-shrink-0`}>
// 							{child}
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

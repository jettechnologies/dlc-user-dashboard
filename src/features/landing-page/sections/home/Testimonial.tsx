"use client"

import { TestimonialCard } from "../../components"
import { testimonials } from "../../data"
import { Carousel } from "@/components/shared"

export const Testimonial = () => {
	return (
		<section
			className="min-h-screen w-full lg:bg-center bg-cover"
			style={{
				backgroundImage: "url('/images/testimonial-banner.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "85% 100%"
			}}
		>
			<div className="w-[80dvw] h-screen flex justify-center items-center flex-col">
				<h3 className="font-semibold text-[20px] lg:text-[40px] text-black text-center font-poppins mb-[120px]">
					WHAT OUR USERS ARE SAYING
				</h3>
				<div className="w-full lg:w-[80%]">
					<Carousel
						isAutoPlay={true}
						autoPlayInterval={4000}
						className="pl-4 pr-4"
					>
						{testimonials.map((testimonial, idx) => (
							<TestimonialCard key={idx} {...testimonial} />
						))}
					</Carousel>
				</div>
			</div>
		</section>
	)
}

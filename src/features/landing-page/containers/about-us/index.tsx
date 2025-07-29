import {
	Features,
	SupportClassSection,
	WhoWeAreSection
} from "../../sections/about-us"
import React from "react"

export const About = () => {
	return (
		<section className="min-h-screen w-full font-poppins">
			<WhoWeAreSection />
			<Features />
			<SupportClassSection />
		</section>
	)
}

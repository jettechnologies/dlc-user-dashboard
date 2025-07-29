import {
	HeroSection,
	PastQuestion,
	Features,
	Exams,
	Payments,
	Testimonial,
	PartnersSection
} from "../../sections/home"

export const Home = () => {
	return (
		<div>
			<HeroSection />
			<PastQuestion />
			<Exams />
			<Features />
			<Payments />
			<Testimonial />
			<PartnersSection />
		</div>
	)
}

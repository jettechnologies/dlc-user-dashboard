import { AboutFeaturesCard } from "../../components"
// import { aboutFeatures } from "../../data"
import { aboutFeatures } from "../../data"

export const Features = () => {
	return (
		<section className="min-h-screen w-full">
			<div className="grid h-[40dvh] w-full place-items-center  bg-[url('/images/about-features-banner.png')] bg-cover bg-center bg-no-repeat">
				<h3 className="text-center text-3xl font-bold uppercase text-white xl:text-5xl">
					WHAT WE DO
				</h3>
			</div>
			<div className="flex w-full flex-col flex-wrap justify-between gap-8 px-8 py-6  md:justify-center md:py-12 md:flex-row lg:px-28">
				{aboutFeatures.map((feature, index) => (
					<div key={index} className="w-fit px-2">
						<AboutFeaturesCard {...feature} />
					</div>
				))}
			</div>
		</section>
	)
}

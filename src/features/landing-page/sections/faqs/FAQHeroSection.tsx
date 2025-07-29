export const FAQHeroSection = () => {
	return (
		<section className="relative min-h-[100dvh] w-full bg-[image:var(--faq-hero-img-sm)] bg-cover bg-center bg-no-repeat lg:bg-[image:var(--faq-hero-img)] border-2 border-white">
			<div className="absolute inset-0 z-10 h-full w-full bg-black opacity-20" />
			<div className="relative z-30 mx-auto flex min-h-[calc(100dvh-83px)] w-full flex-col items-center px-8 max-sm:pb-12 lg:flex-row lg:px-[3.5rem]">
				<div className="mt-3 w-fit">
					<h2 className="text-2xl font-normal capitalize text-black lg:text-5xl">
						Frequently <br /> Asked{" "}
						<span className="font-bold text-[#0B67B0]"> questions</span>
					</h2>
					<p className="mt-6 max-w-[475px] text-xs font-normal text-black md:text-sm lg:text-base">
						We empower students with 21st century skill: Join our E-lerrning
						community and unlock your potential. Screenclass Is a management
						stystem (LMS) Developed to meet and suit the learning process.
					</p>
				</div>
			</div>
		</section>
	)
}

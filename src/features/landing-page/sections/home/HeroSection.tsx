"use client"

import { useIsMobile } from "@/config"
import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
	const isMobile = useIsMobile()
	return (
		<section
			className="font-poppins min-h-[90vh] w-full  bg-light-yellow bg-cover bg-center flex relative bg-[url('/images/hero-section-bg.png')] overflow-clip"
			style={
				isMobile
					? {
							background: "var(--light-yellow)"
						}
					: {
							backgroundImage: "url('/images/hero-section-bg.png')",
							backgroundRepeat: "no-repeat"
						}
			}
		>
			<div className="w-full lg:w-[50dvw] grid place-content-center min-h-full">
				<div className="w-[390px] md:h-[385px] flex flex-col gap-y-10 max-sm:items-center">
					<div>
						<h2 className="font-semibold text-[31px] lg:text-[49px] text-black">
							Learning is Fun!
						</h2>
						<div className="flex gap-x-4 items-center mt-4">
							<p className="font-medium text-[16px] lg:text-[24px] text-black">
								Learn
							</p>
							<hr className="w-[2px] bg-black h-[20px]" />
							<p className="font-medium text-[16px] lg:text-[24px] text-black">
								Discover
							</p>
							<hr className="w-[2px] bg-black h-[20px]" />
							<p className="font-medium text-[16px] lg:text-[24px] text-black">
								Excel
							</p>
						</div>
					</div>
					<Link
						href="/signup"
						className="shadow-sm bg-light-blue rounded-[6px] border-none outline-none py-2 px-4 w-[150px] text-white uppercase lg:w-[229px] h-[56px] flex items-center justify-center"
					>
						get started
					</Link>
					{/* Download Buttons */}
					<div className="z-20 flex w-fit gap-x-4 max-[768px]:mx-auto max-sm:hidden">
						{[
							{
								src: "/images/google-play-icon.png",
								label: "Google Play"
							},
							{
								src: "/images/apple-play-icon.png",
								label: "App Store"
							}
						].map((item, index) => (
							<button
								key={index}
								className="flex h-[32px] w-[105px] items-center gap-x-2 rounded-xl bg-[#0E0E0E] px-3 py-2 md:h-[56px] md:w-[170px]"
							>
								<Image
									src={item.src}
									alt={item.label}
									width={14}
									height={14}
									className="object-contain md:h-[24px] md:w-[24px]"
								/>
								<div className="flex-1 text-white">
									<p className="text-[6px] font-light md:text-xs">
										Available on the
									</p>
									<p className="text-[9px] font-semibold md:text-base">
										{item.label}
									</p>
								</div>
							</button>
						))}
					</div>
				</div>
				<div
					className="md:hidden w-full h-[445px] bg-cover flex items-end mt-4"
					style={{
						backgroundImage: "url('/images/hero-section-bg.png')",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "80% 100%"
					}}
				>
					<div className="z-20 flex w-fit gap-x-4 max-[768px]:mx-auto">
						{[
							{
								src: "/images/google-play-icon.png",
								label: "Google Play"
							},
							{
								src: "/images/apple-play-icon.png",
								label: "App Store"
							}
						].map((item, index) => (
							<button
								key={index}
								className="flex h-[32px] w-[105px] items-center gap-x-2 rounded-xl bg-[#0E0E0E] px-3 py-2 md:h-[56px] md:w-[170px]"
							>
								<Image
									src={item.src}
									alt={item.label}
									width={14}
									height={14}
									className="object-contain md:h-[24px] md:w-[24px]"
								/>
								<div className="flex-1 text-white">
									<p className="text-[6px] font-light md:text-xs">
										Available on the
									</p>
									<p className="text-[9px] font-semibold md:text-base">
										{item.label}
									</p>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

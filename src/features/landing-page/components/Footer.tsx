import { GoogleMapsLink } from "./GoogleMap"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Footer = () => {
	return (
		<div className="w-full pt-5 bg-black-200 ">
			<div className="w-full min-h-[250px] container grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] justify-between gap-x-[20px] gap-y-[48px] ">
				<div className="flex w-fit gap-x-[24px] gap-y-[12px] h-full flex-col lg:flex-row ">
					<Link href="/" className="w-fit">
						<Image
							src="/images/dlc-white-logo.svg"
							alt="dlc logo"
							width={180}
							height={120}
							className="object-cover"
						/>
					</Link>
					<div className="max-w-[277px]">
						<p className="text-xs font-normal text-white md:text-base lg:text-base mb-[12px] lg:mb-[36px]">
							A product of{" "}
							<span className="font-semibold">
								Martad Education & Skills Development LTD.
							</span>
						</p>
						<GoogleMapsLink
							address="3B, Alegbe Close, Mende Maryland, Lagos, Nigeria."
							className="text-xs font-medium text-white md:text-base lg:text-base"
						>
							<p className="text-xs font-medium text-white md:text-base lg:text-base">
								3B, Alegbe Close, Mende Maryland, Lagos, Nigeria.
							</p>
						</GoogleMapsLink>
					</div>
				</div>
				<div className="flex w-fit flex-col gap-y-4">
					<h5 className="text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
						Explore
					</h5>
					<ul className="flex flex-col gap-y-4 font-medium text-gray-500">
						<li>
							<Link
								href="/about-us"
								className="text-xs font-medium text-white sm:text-sm"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/contact-us"
								className="text-xs font-medium text-white sm:text-sm"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href="/faq"
								className="text-xs font-medium text-white sm:text-sm"
							>
								FAQs
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex w-fit flex-col gap-y-4">
					<h5 className="text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
						More
					</h5>
					<ul className="flex flex-col gap-y-4 font-medium text-gray-500">
						<li>
							<Link
								href="/policy"
								className="text-xs font-medium text-white sm:text-sm"
							>
								Policy
							</Link>
						</li>
						<li>
							<Link
								href="/#"
								className="text-xs font-medium text-white sm:text-sm"
							>
								Instruction
							</Link>
						</li>
						<li>
							<Link
								href="/terms"
								className="text-xs font-medium text-white sm:text-sm"
							>
								Terms and Conditions
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex w-fit flex-col gap-y-4">
					<h5 className="text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
						Contact Us
					</h5>
					<ul className="flex flex-col gap-y-4 font-medium text-gray-500">
						<li>
							<Link
								href={"tel:+234704330300"}
								className="text-xs font-medium text-white sm:text-sm"
							>
								+234 704 330 3000
							</Link>
						</li>
						<li>
							<Link
								href={"tel:+2348092933330"}
								className="text-xs font-medium text-white sm:text-sm"
							>
								+234 809 293 3330
							</Link>
						</li>
						{/* <li>
							<Link
								href={"mailto:info@screenclass.com"}
								className="text-xs font-medium text-white sm:text-sm"
							>
								info@screenclass.com
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
			<hr className="my-2 h-[1px] w-full bg-white" />
			<div className="max-screen-xl mx-auto mt-4 w-full px-8 xl:px-0">
				<p className="text-center text-[10px] text-white sm:text-xs">
					© 2025{" "}
					<Link href="/" className="hover:underline">
						Digital Learning Circle
					</Link>
					. All Rights Reserved.
				</p>
			</div>
		</div>
	)
}

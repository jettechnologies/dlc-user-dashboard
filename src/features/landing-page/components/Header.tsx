"use client"

import { MobileNavLink } from "./MobileNavbar"
import { Navbar } from "./Navbar"
import { useAuthState } from "@/stores"

const getNavLinks = (userRole: string | null, authToken: string | null) => {
	const baseLinks = [
		{ link: "/", label: "Home" },

		{
			label: "Exams",
			icon: "/icons/class-icon.png",
			link: [
				{ label: "BECE", link: "#" },
				{ label: "WAEC", link: "#" },
				{ label: "NECO", link: "#" },
				{ label: "JAMB", link: "#" }
			]
		},
		{ link: "/pricing", label: "Pricing" },
		{ link: "/contact-us", label: "Contact Us" },
		{
			label: "More",
			link: [
				{ link: "/about-us", label: "About Us" },
				{ label: "FAQs", link: "/faq" },
				{ label: "Policy", link: "/policy" },
				{ label: "Terms & Conditions", link: "/terms" }
			]
		}
	]

	// Add dashboard link only if userRole exists
	if (userRole && authToken) {
		return [
			{ link: "/", label: "Home" },
			{ link: `/${userRole.toLowerCase()}`, label: "Dashboard" },
			...baseLinks.slice(1)
		]
	}

	return baseLinks
}

// const navLinks = [
// 	{ link: "/", label: "Home" },

// 	{
// 		label: "Exams",
// 		icon: "/icons/class-icon.png",
// 		link: [
// 			{ label: "BECE", link: "#" },
// 			{ label: "WAEC", link: "#" },
// 			{ label: "NECO", link: "#" },
// 			{ label: "JAMB", link: "#" }
// 		]
// 	},
// 	{ link: "/pricing", label: "Pricing" },
// 	{ link: "/contact-us", label: "Contact Us" },
// 	{
// 		label: "More",
// 		link: [
// 			{ link: "/about-us", label: "About Us" },
// 			{ label: "FAQs", link: "/faq" },
// 			{ label: "Policy", link: "/policy" },
// 			{ label: "Terms & Conditions", link: "/terms" }
// 		]
// 	}
// ]
const mobileNavLinks: MobileNavLink[] = [
	{ link: "/", label: "Home", icon: "/icons/home-icon.svg" },
	{
		label: "Exams",
		icon: "/icons/class-icon.png",
		link: [
			{ label: "BECE", link: "#" },
			{ label: "WAEC", link: "#" },
			{ label: "NECO", link: "#" },
			{ label: "JAMB", link: "#" }
		]
	},
	{
		link: "/contact-us",
		label: "Contact Us",
		icon: "/icons/contact-us-icon.svg"
	},
	{ link: "/pricing", label: "Pricing", icon: "/icons/pricing-icon.svg" },
	{ link: "/about-us", label: "About Us", icon: "/icons/about-us-icon.svg" },
	{ link: "/faq", label: "FAQs", icon: "/icons/faq-icon.svg" },
	{
		label: "More",
		icon: "/icons/more-icon.png",
		link: [
			{ label: "Policy", link: "/policy" },
			{ label: "Terms", link: "/terms" }
		]
	}
]

export function Header() {
	const { accessToken, role: userRole } = useAuthState()

	const navLinks = getNavLinks(userRole, accessToken)

	console.log(userRole, "userRole")

	return (
		<header id="header" className="w-full bg-[#F8F8FD]">
			<Navbar
				links={navLinks}
				logoSrc="/images/dlc-logo.svg"
				mobileLinks={mobileNavLinks}
			/>
		</header>
	)
}

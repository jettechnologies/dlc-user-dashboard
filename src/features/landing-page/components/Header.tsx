"use client"

import { MobileNavLink } from "./MobileNavbar"
import { Navbar } from "./Navbar"
import { useAuthState } from "@/stores"

const getNavLinks = (userRole: string | null, authToken: string | null) => {
	const baseLinks = [
		{ link: "/", label: "Home" },

		// {
		// 	label: "Exams",
		// 	icon: "/icons/class-icon.png",
		// 	link: [
		// 		{ label: "BECE", link: "#" },
		// 		{ label: "WAEC", link: "#" },
		// 		{ label: "NECO", link: "#" },
		// 		{ label: "JAMB", link: "#" }
		// 	]
		// },
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

	if (userRole && authToken) {
		return [
			{ link: "/", label: "Home" },
			{ link: `/${userRole.toLowerCase()}`, label: "Dashboard" },
			...baseLinks.slice(1)
		]
	}

	return baseLinks
}

const getMobileNavLinks = (
	userRole: string | null,
	authToken: string | null
): MobileNavLink[] => {
	const baseMobileLinks: MobileNavLink[] = [
		{ link: "/", label: "Home", icon: "/icons/home-icon.svg" },
		{ link: "/pricing", label: "Pricing", icon: "/icons/pricing-icon.svg" },
		{
			link: "/contact-us",
			label: "Contact Us",
			icon: "/icons/contact-us-icon.svg"
		},
		{
			label: "More",
			icon: "/icons/more-icon.png",
			link: [
				{ label: "About Us", link: "/about-us" },
				{ label: "FAQs", link: "/faq" },
				{ label: "Policy", link: "/policy" },
				{ label: "Terms & Conditions", link: "/terms" }
			]
		}
	]

	const authLinks: MobileNavLink[] =
		userRole && authToken
			? [
					{
						link: `/${userRole.toLowerCase()}`,
						label: "Dashboard",
						icon: "/icons/dashboard-icon.png"
					}
				]
			: [
					{
						link: "/signin",
						label: "Login",
						icon: "/icons/login-icon.svg"
					},
					{
						link: "/signup",
						label: "Sign up",
						icon: "/icons/sign-up-icon.svg"
					}
				]

	return [...baseMobileLinks, ...authLinks]
}
export function Header() {
	const { accessToken, role: userRole } = useAuthState()

	const navLinks = getNavLinks(userRole, accessToken)
	const mobileNavLinks = getMobileNavLinks(userRole, accessToken)

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

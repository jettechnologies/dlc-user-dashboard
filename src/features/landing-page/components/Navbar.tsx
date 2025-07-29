"use client"

import { MobileNavBar, MobileNavLink } from "./MobileNavbar"
import { Button } from "@/components/ui"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"
// import { SquareMenu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavLink {
	label: string
	link: string | NavLink[]
}

interface NavbarProps {
	logoSrc: string
	brandName?: string
	links: NavLink[]
	mobileLinks: MobileNavLink[]
}

// const loginNavLinks = [
// 	{ label: "student", link: "/signin/student" },
// 	{ label: "guardian", link: "/signin/guardian" }
// ]

export function Navbar({
	logoSrc,
	brandName,
	links,
	mobileLinks
}: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const pathname = usePathname()

	const toggleDropdown = (label: string) => {
		setOpenDropdown(openDropdown === label ? null : label)
	}

	const isActive = (link: string) => pathname === link

	return (
		<>
			<nav className="z-20 w-full shadow-md">
				<div className="mx-auto flex w-full flex-wrap items-center justify-between p-4 px-8 lg:px-14">
					<Link
						href="/"
						className="relative flex h-[19px] w-[92px] items-center space-x-3 lg:h-[41px] lg:w-[200px]"
					>
						<Image
							src={logoSrc}
							fill
							priority
							sizes="(max-width: 1444px): 100vw, (max-width: 428px): 40vw"
							className="h-8 object-contain"
							alt="Logo"
						/>
						{brandName && (
							<span className="self-center whitespace-nowrap text-2xl font-semibold">
								{brandName}
							</span>
						)}
					</Link>

					<div className="flex space-x-3 md:order-2 md:space-x-0">
						<Link
							href="/signup"
							className={`mr-6 hidden items-center rounded-[100px] bg-light-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-1 focus:ring-SC-Light-orange lg:block`}
						>
							Sign Up
						</Link>
						<Link
							href="/signin"
							className={`mr-6 hidden items-center rounded-[100px] bg-transparent border-2 border-light-blue px-5 py-2.5 text-center text-sm font-medium text-light-blue focus:ring-1 focus:ring-SC-Light-orange lg:block`}
						>
							Sign in
						</Link>
						{/* <LoginDropdown title="Login" links={loginNavLinks} /> */}
						<Button
							aria-controls="navbar-sticky"
							aria-expanded="false"
							onClick={() => setIsOpen(true)}
							className="bg-light-yellow w-[24px] h-[24px] lg:hidden"
						>
							<span className="sr-only">Open main menu</span>
							<Menu size={20} color="#ffffff" />
						</Button>
					</div>

					<div className="hidden w-full items-center justify-between md:order-1 md:w-auto lg:flex">
						<ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0">
							{links.map((link) => {
								const isDropdown = Array.isArray(link.link)

								return (
									<li key={link.label} className="group relative">
										{!isDropdown ? (
											<Link
												href={link.link as string}
												className={`${
													isActive(link.link as string)
														? "text-SC-Orange"
														: "text-gray-800 hover:text-SC-Orange"
												} block rounded-sm px-3 py-2 text-sm md:p-0 md:hover:bg-transparent lg:text-base`}
											>
												{link.label}
											</Link>
										) : (
											<>
												<button
													onClick={() => toggleDropdown(link.label)}
													className={`${
														(link.link as NavLink[]).some((sublink) =>
															isActive(sublink.link as string)
														)
															? "text-SC-Orange"
															: "text-gray-800 hover:text-SC-Orange"
													} flex items-center gap-1 rounded-sm px-3 py-2 text-sm md:p-0 md:hover:bg-transparent lg:text-base`}
												>
													{link.label}
													{openDropdown === link.label ? (
														<ChevronUp size={16} />
													) : (
														<ChevronDown size={16} />
													)}
												</button>

												{openDropdown === link.label && (
													<ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md bg-white shadow-lg">
														{(link.link as NavLink[]).map((sublink) => (
															<li key={sublink.label}>
																<Link
																	href={sublink.link as string}
																	onClick={() => setOpenDropdown(null)}
																	className={`${
																		isActive(sublink.link as string)
																			? "bg-SC-Light-orange text-SC-Orange"
																			: "text-gray-800 hover:bg-gray-100"
																	} block px-4 py-2 text-sm capitalize`}
																>
																	{sublink.label}
																</Link>
															</li>
														))}
													</ul>
												)}
											</>
										)}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>

			<MobileNavBar
				navLinks={mobileLinks}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	)
}

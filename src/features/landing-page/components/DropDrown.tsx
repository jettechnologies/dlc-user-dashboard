"use client"

import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface DropdownProps {
	title: string
	description: string
}

export const Dropdown: React.FC<DropdownProps> = ({ title, description }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	return (
		<div className="h-full w-full" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between gap-2 rounded-[10px] border-2 border-[#00393A] bg-white px-2.5 py-4 text-sm font-medium text-[#00393A]"
			>
				{title} <ChevronDown className="h-4 w-4" />
			</button>

			<div
				className={`w-full rounded-e-lg bg-white px-2.5 py-4 shadow-lg transition-all duration-300 ${
					isOpen
						? "block max-h-[500px] opacity-100"
						: "hidden max-h-0 opacity-0"
				}`}
				style={{ overflow: "hidden" }}
			>
				{isOpen && (
					<p className="text-[8px] font-medium text-[#00393A] lg:text-xs">
						{description}
					</p>
				)}
			</div>
		</div>
	)
}

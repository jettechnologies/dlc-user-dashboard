import { cn } from "@/utils/lib/utils"
import { getInitials } from "@/utils/misc"

type SizeProps = "sm" | "md" | "lg"

interface AvatarProps {
	name?: string
	size: SizeProps
	bgColor?: string
	textColor?: string
	icon?: React.ReactElement
	iconColor?: string
	className?: string
}

const sizes = {
	sm: {
		container: "h-[25px] w-[25px]",
		text: "text-xs",
		svg: "h-[20px] w-[20px] left-[3px]"
	},
	md: {
		container: "h-[40px] w-[40px]",
		text: "text-sm",
		svg: "h-[30px] w-[30px] left-[6px]"
	},
	lg: {
		container: "h-[56px] w-[56px]",
		text: "text-[24px]",
		svg: "h-[45px] w-[45px] left-[9px]"
	}
}

export const CustomAvatar = ({
	name,
	size,
	bgColor,
	textColor,
	icon,
	iconColor,
	className
}: AvatarProps) => {
	const initials = name ? getInitials(name) : undefined
	const currentSize = sizes[size]

	return (
		<div
			className={cn(
				"relative flex items-center justify-center overflow-hidden rounded-full",
				currentSize.container,
				bgColor || "bg-gray-100",
				className
			)}
		>
			{initials ? (
				<span
					className={cn(
						"font-medium",
						currentSize.text,
						textColor || "text-gray-600"
					)}
				>
					{initials}
				</span>
			) : icon ? (
				icon
			) : (
				<svg
					className={cn(
						"absolute",
						currentSize.svg,
						iconColor || "text-gray-400"
					)}
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd"
					/>
				</svg>
			)}
		</div>
	)
}

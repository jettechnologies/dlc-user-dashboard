import {
	differenceInDays,
	differenceInWeeks,
	differenceInMonths,
	parseISO
} from "date-fns"

export interface SubscriptionPlan {
	_id: string
	name: string
	price: string
	validity: number
}

export const getInitials = (fullName: string): string | null => {
	if (!fullName.trim()) return null
	const words = fullName.split(" ")
	const initials = words
		.map((word) => word[0]?.toUpperCase())
		.slice(0, 2)
		.join("")
	return initials || null
}

export const transformPlans = (originalPlans: SubscriptionPlan[]) => {
	// Map validity days to duration labels
	const getDuration = (validityDays: number) => {
		if (validityDays <= 1) return "daily"
		if (validityDays <= 7) return "weekly"
		if (validityDays <= 30) return "monthly"
		return "yearly"
	}

	// Default benefits for all plans
	const defaultBenefits = [
		"24/7 Online Support",
		"Multiple Platforms",
		"Exclusive Content",
		"Priority Assistance"
	]

	// Gradient options
	const gradients = {
		basic: "linear-gradient(135deg, #252F88 31%, #6472EB 100%)",
		advanced: "linear-gradient(45deg, #F1C60F 0%, #FFF897 100%)"
	}

	return originalPlans.map((plan) => {
		const isAdvancedPlan = plan.name.toLowerCase().includes("advanced")

		return {
			id: plan._id,
			plan: {
				name: plan.name.toLowerCase(),
				price: parseInt(plan.price),
				duration: getDuration(plan.validity)
			},
			benefits: defaultBenefits,
			// buttonGradient: isAdvancedPlan ? gradients.advanced : gradients.basic,
			buttonGradient: gradients.basic,
			// ...(isAdvancedPlan && {
			// 	bgColor: "linear-gradient(to right, #002847 0%, #0B67B0 100%)"
			// })
			bgColor: isAdvancedPlan ? gradients.advanced : gradients.basic
		}
	})
}

export function getDateDifferenceLabel(
	startDate: string | Date,
	endDate: string | Date
): { value: number; label: "day(s)" | "week(s)" | "month(s)" } {
	const start = typeof startDate === "string" ? parseISO(startDate) : startDate
	const end = typeof endDate === "string" ? parseISO(endDate) : endDate

	const months = differenceInMonths(end, start)
	const weeks = differenceInWeeks(end, start)
	const days = differenceInDays(end, start)

	if (months >= 1) {
		return { value: months, label: "month(s)" }
	} else if (weeks >= 1) {
		return { value: weeks, label: "week(s)" }
	} else {
		return { value: days, label: "day(s)" }
	}
}

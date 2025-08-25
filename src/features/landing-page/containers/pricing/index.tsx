import {
	// PricingHeroSection,
	PricingSection
	// PricingGrowth
} from "../../sections/pricing"
import { SubscriptionPlanResponse } from "@/types/response-type"

interface PricingProps {
	pricingData: SubscriptionPlanResponse[]
}

export const Pricing = ({ pricingData }: PricingProps) => {
	const transformPlans = (plans: SubscriptionPlanResponse[]) => {
		return plans.map((plan) => ({
			_id: plan._id,
			name: plan.name,
			price: String(plan.price),
			validity: plan.validity
		}))
	}

	return (
		<section className="min-h-screen w-full font-poppins">
			<PricingSection pricingData={transformPlans(pricingData)} />
		</section>
	)
}

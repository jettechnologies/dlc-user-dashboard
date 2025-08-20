import { SubscriptionCard } from "../../components"
import { transformPlans } from "@/utils/misc"

const data = [
	{
		_id: "dlc1234",
		name: "Starter",
		price: "1000",
		validity: 1
	},
	{
		_id: "dlc5678",
		name: "Advanced",
		price: "2000",
		validity: 7
	},
	{
		_id: "dlc9109829",
		name: "Premium",
		price: "3000",
		validity: 30
	},
	{
		_id: "dlc9109829",
		name: "Premium",
		price: "3000",
		validity: 30
	}
]
export const PricingSection = () => {
	const transformedPlans = transformPlans(data)

	return (
		<section
			className="min-h-fit w-full font-poppins bg-light-yellow-200"
			// style={{
			// 	background: "var(--light-yellow-gradient)",
			// 	backdropFilter: "blur(80px)",
			// 	WebkitBackdropFilter: "blur(80px)"
			// }}
		>
			<div className="mx-auto flex h-full w-full max-w-screen-xl flex-col items-center px-8 pt-14 lg:px-[3.5rem] ">
				<div className="w-fit">
					<div className="mb-6 w-fit mx-auto">
						<h3 className="text-center text-3xl font-normal text-black lg:text-5xl">
							Our
							<span className="ml-2 font-bold uppercase text-light-blue">
								pricing
							</span>
						</h3>
						<p className="mt-2 text-center text-sm font-normal text-black lg:text-base">
							Affordable Pricing Plans for our products, You can check it out!
						</p>
					</div>
					<div className="mx-auto mt-4 flex min-h-[580px] w-full flex-wrap justify-center gap-6 pb-10 lg:justify-between">
						{transformedPlans.map((subscriptionPlan) => (
							<div key={subscriptionPlan.id}>
								<SubscriptionCard
									plan={subscriptionPlan.plan}
									benefits={subscriptionPlan.benefits}
									bgColor={subscriptionPlan.bgColor}
									buttonGradient={subscriptionPlan.buttonGradient}
									width="280px"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

import RetryOnError from "@/components/retry-on-error"
import { Pricing } from "@/features/landing-page/containers/pricing"
import { fetchAllSubscriptionsPlain } from "@/services/queries/subscription"

const Page = async () => {
	try {
		const subscriptions = await fetchAllSubscriptionsPlain()

		if (!subscriptions.success) {
			throw new Error(subscriptions.message)
		}

		return (
			<div>
				<Pricing pricingData={subscriptions.data} />
			</div>
		)
	} catch (error) {
		console.error("Error fetching subscriptions:", error)
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return <RetryOnError message={errorMessage} />
	}
}

export default Page

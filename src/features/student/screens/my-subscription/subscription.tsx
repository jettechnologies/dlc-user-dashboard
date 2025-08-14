"use client"

import PageHeaderText from "../../components/PageHeader"
import { SubscriptionCard } from "../../components/subscription-card"
import { PaymentModeModal } from "@/layout/modal"
import { useInitializePayment } from "@/services/mutation/useQuery-mutation"
import {
	subcriptionPlanQueryOptions,
	fetchSubscriptionHistoryQueryOpts
} from "@/services/query"
import type { SubscriptionPlan } from "@/types/index"
import { SubscriptionPlanResponse } from "@/types/response-type"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useState, useCallback, useMemo } from "react"
import { toast } from "sonner"

export const Subscription = () => {
	const [paymentState, setPaymentState] = useState({
		id: "",
		isOpen: false
	})

	const { data } = useSuspenseQuery(fetchSubscriptionHistoryQueryOpts())

	const activeSubscription = data?.find(
		(subscription) => subscription.status === "active"
	)

	const { mutateAsync: initializePayment, isPending } = useInitializePayment()

	const transformToSubscriptionPlan = (
		raw: SubscriptionPlanResponse
	): SubscriptionPlan => {
		const features = Array(4).fill(
			"Lorem ipsum dolor sit amet, consectetur adipiscing"
		)

		return {
			// id: `${raw.name.toLowerCase()}-${raw._id.slice(-4)}`,
			id: raw._id,
			name: raw.name.toUpperCase(),
			type: "Subscription",
			price: `N${raw.price}`,
			currency: "USSD",
			isCurrentPlan: false,
			features,
			buttonText: "Subscribe",
			onSubscribe: () => setPaymentState({ id: raw._id, isOpen: true })
		}
	}

	const { data: subscriptionPlans, isError } = useSuspenseQuery({
		...subcriptionPlanQueryOptions(),
		select: (data) => data.data.map((plan) => transformToSubscriptionPlan(plan))
	})

	const availablePlans = useMemo(() => {
		return subscriptionPlans?.filter(
			(plan) => plan.id !== activeSubscription?.plan._id
		)
	}, [subscriptionPlans, activeSubscription])

	const handleCardPayments = useCallback(
		async (amount: number) => {
			try {
				const response = await initializePayment(amount)
				if (!response.data?.authorization_url) {
					toast.error("No authorization URL received from payment provider")
					return
				}
				window.location.href = response.data.authorization_url
			} catch (error) {
				console.log(error)
				toast.error("Failed to initialize payment")
			}
		},
		[initializePayment]
	)

	const handleMultiplePayments = useCallback(
		(method: "airtime" | "card" | "momo") => {
			const currentPlan = subscriptionPlans.find((plan) =>
				plan.id.includes(paymentState.id.slice(-4))
			)

			if (!currentPlan) {
				toast.error("Unable to find the selected subscription plan")
				return
			}

			switch (method) {
				case "airtime":
					toast.info("Airtime payment coming soon")
					break
				case "card":
					handleCardPayments(parseInt(currentPlan.price.replace("N", ""), 10))
					break
				case "momo":
					toast.info("MoMo payment coming soon")
					break
				default:
					toast.error("Invalid payment method selected")
			}
		},
		[subscriptionPlans, paymentState.id, handleCardPayments]
	)

	if (isError) {
		return (
			<section className="flex h-screen items-center justify-center">
				<p>Something went wrong while fetching subscription plans.</p>
			</section>
		)
	}

	return (
		<>
			<div className="pb-6 lg:p-6">
				<PageHeaderText>Subscription Plan</PageHeaderText>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{availablePlans.map((plan) => (
						<SubscriptionCard key={plan.id} plan={plan} />
					))}
				</div>
			</div>

			<PaymentModeModal
				isOpen={paymentState.isOpen}
				setIsOpen={() =>
					setPaymentState({ ...paymentState, isOpen: !paymentState.isOpen })
				}
				handleMultiplePayments={handleMultiplePayments}
				isLoading={isPending}
			/>
		</>
	)
}

// "use client"

// import PageHeaderText from "../../components/PageHeader"
// import { SubscriptionCard } from "../../components/subscription-card"
// import { PaymentModeModal } from "@/layout/modal"
// import { useInitializePayment } from "@/services/mutation/useQuery-mutation"
// import { subcriptionPlanQueryOptions } from "@/services/query"
// import type { SubscriptionPlan } from "@/types/index"
// import { SubscriptionPlanResponse } from "@/types/response-type"
// import { useSuspenseQuery } from "@tanstack/react-query"
// import { useState, useCallback, useMemo } from "react"

// const subscriptionPlans: SubscriptionPlan[] = [
// 	{
// 		id: "daily-ussd",
// 		name: "DAILY",
// 		type: "Subscription",
// 		price: "N100",
// 		currency: "USSD",
// 		isCurrentPlan: true,
// 		features: [
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing"
// 		],
// 		buttonText: "Subscribe"
// 	}
// ]

// export const Subscription = () => {
// 	const [paymentState, setPaymentState] = useState({
// 		id: "",
// 		isOpen: false
// 	})

// 	const { mutateAsync: initializePayment, isPending } = useInitializePayment()

// 	const transformToSubscriptionPlan = (
// 		raw: SubscriptionPlanResponse
// 	): SubscriptionPlan => {
// 		const features = Array(4).fill(
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing"
// 		)

// 		return {
// 			id: `${raw.name.toLowerCase()}-${raw._id.slice(-4)}`,
// 			name: raw.name.toUpperCase(),
// 			type: "Subscription",
// 			price: `N${raw.price}`,
// 			currency: "USSD",
// 			isCurrentPlan: false,
// 			features,
// 			buttonText: "Subscribe",
// 			onSubscribe: () => setPaymentState({ id: raw._id, isOpen: true })
// 		}
// 	}

// 	const { data: subscriptionPlans, isError } = useSuspenseQuery({
// 		...subcriptionPlanQueryOptions(),
// 		select: (data) => data.data.map((plan) => transformToSubscriptionPlan(plan))
// 	})

// 	const currentPlans = useMemo(() => {
// 		if (!payment) return transformedPlans.find((plan) => plan.id === loadingId)
// 		return transformedPlans.find(
// 			(plan) => plan.plan.name.toLocaleLowerCase() === payment
// 		)
// 	}, [loadingId, transformedPlans, payment])

// 	const handleCardPayments = useCallback(async (amount: number) => {
// 		if (!response.data?.authorization_url) {
// 			throw new Error("No authorization URL received from payment provider")
// 		}
// 	}, [])

// 	const handleMultiplePayments = useCallback(
// 		(method: "airtime" | "card" | "momo") => {
// 			if (!currentPlans) return

// 			switch (method) {
// 				case "airtime":
// 					console.log("not happing yet")
// 					break
// 				case "card":
// 					if (
// 						!excludedCardPayments.includes(
// 							currentPlans?.plan.name.toLowerCase()
// 						)
// 					) {
// 						handleCardPayments(currentPlans?.plan.price)
// 					} else {
// 						toast.error("This plan is not available for card payments")
// 					}
// 					break
// 				case "momo":
// 					console.log("not happening yet")
// 					break
// 				default:
// 					console.log("not happening yet")
// 					break
// 			}
// 		},
// 		[currentPlans, handleCardPayments]
// 	)

// 	if (!subscriptionPlans && isError)
// 		return (
// 			<section className="flex h-screen items-center justify-center">
// 				<p>Something went wrong</p>
// 			</section>
// 		)

// 	console.log(subscriptionPlans, "subscriptionPlans")

// 	return (
// 		<>
// 			<div className="p-6">
// 				<PageHeaderText>Subscription Plan</PageHeaderText>
// 				<div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
// 					{subscriptionPlans.map((plan) => (
// 						<SubscriptionCard key={plan.id} plan={plan} />
// 					))}
// 				</div>
// 			</div>
// 			<PaymentModeModal
// 				isOpen={paymentState.isOpen}
// setIsOpen={() =>
// 	setPaymentState({ ...paymentState, isOpen: !paymentState.isOpen })
// }
// 				handleMultiplePayments={handleMultiplePayments}
// 				isLoading={isPending}
// 			/>
// 		</>
// 	)
// }

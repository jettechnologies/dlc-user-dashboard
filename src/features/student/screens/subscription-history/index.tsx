"use client"

import { SubscriptionHistoryTable } from "../../components/subscription-history"
import { fetchSubscriptionHistoryQueryOpts } from "@/services/query"
import { getDateDifferenceLabel } from "@/utils/misc"
import { useSuspenseQuery } from "@tanstack/react-query"
import { format, parseISO } from "date-fns"
import Link from "next/link"

const InnerContent = () => {
	const { data } = useSuspenseQuery(fetchSubscriptionHistoryQueryOpts())

	const activeSubscription = data?.find(
		(subscription) => subscription.status === "active"
	)

	return (
		<section className="min-h-full w-full bg-white px-14 pb-16 pt-10">
			<div className="h-full w-full">
				{!activeSubscription ? null : (
					<>
						<h4 className="text-[24px] font-medium text-black">Subscription</h4>

						<div className="mt-4 flex w-full flex-col justify-between gap-x-16 gap-y-6 lg:flex-row">
							<div className="flex h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#0B67B0] p-2">
								<div className="flex w-full items-center justify-between">
									{/* Plan duration */}
									<div className="flex min-h-[26px] min-w-[134px] flex-col items-center gap-1 rounded-[4px] border border-SC-Brand-Blue px-[3px] lg:flex-row">
										<p className="text-[10px] font-normal text-black">
											Current Plan Duration:
										</p>
										<div className="flex-1 rounded-[4px] bg-[#93CAF6] px-[6px] py-[2px] text-black">
											<div className="flex w-fit gap-1 text-[12px] font-normal">
												<p>
													{
														getDateDifferenceLabel(
															activeSubscription.createdAt,
															activeSubscription.expiryDate
														).value
													}
												</p>
												<p>
													{
														getDateDifferenceLabel(
															activeSubscription.createdAt,
															activeSubscription.expiryDate
														).label
													}
												</p>
											</div>
										</div>
									</div>

									<p className="text-[24px] font-semibold text-black">
										NGN {activeSubscription.plan.price}
									</p>
								</div>

								<div className="flex w-full justify-end">
									<Link
										href="/student/my-subscription"
										className="h-[2rem] w-[122px] rounded-[6px] bg-SC-Orange px-[8px] py-[4px] font-poppins text-[12px] capitalize text-white"
									>
										upgrade plan
									</Link>
								</div>
							</div>

							<div className="flex max-h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#B3B3B3] p-2">
								<p className="text-[12px] font-light text-black">
									Next Payment
								</p>
								<p className="text-[14px] font-medium text-black">
									{format(
										parseISO(activeSubscription.expiryDate),
										"EEEE, do MMMM yyyy"
									)}
								</p>

								<Link
									href="/student/my-subscription"
									className="h-[2rem] w-[122px] rounded-[6px] bg-[#0B67B0] px-[8px] py-[4px] font-poppins text-[12px] capitalize text-white"
								>
									upgrade plan
								</Link>
							</div>
						</div>
					</>
				)}

				{data && data.length > 0 && (
					<div className="mt-[50px] h-full w-full">
						<div className="w-full">
							<h4 className="mt-4 text-[24px] font-medium text-black">
								Payment History
							</h4>

							<SubscriptionHistoryTable subscriptionHistory={data} />
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export const SubscriptionHistory = () => {
	return <InnerContent />
}

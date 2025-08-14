import { ModalLayout } from "./ModalLayout"
import { Spinner } from "@/components/shared"
import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { useIsMobile } from "@/config"
import { useAddOnDemand } from "@/services/mutation/useQuery-mutation"
import { VoucherSchema } from "@/utils/schemas"
import { toast } from "sonner"

interface VoucherModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	examId: string | null
	planId: string | null
}

export const VoucherModal = ({
	isOpen,
	setIsOpen,
	examId,
	planId
}: VoucherModalProps) => {
	const isMobile = useIsMobile()

	const { mutateAsync: addOnDemand, isPending } = useAddOnDemand()

	const handlePaystackPayment = async () => {
		try {
			if (!examId || !planId) throw new Error("No Exam Id isn't provided")
			const response = await addOnDemand({ examId: examId, planId })

			if (!response.data?.authorization_url) {
				toast.error("No authorization URL received from payment provider")
				return
			}
			window.location.href = response.data.authorization_url
			setIsOpen(false)
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "An unexpected error occurred."
			toast.error(errorMessage)
		}
	}

	return (
		<ModalLayout
			open={isOpen}
			onOpenChange={setIsOpen}
			title="Select payment mode"
			size={isMobile ? "md" : "lg"}
			titleClassName="font-bold"
		>
			<div className="space-y-6">
				{/* Payment options */}
				<div className="space-y-3">
					<button
						onClick={handlePaystackPayment}
						className="flex items-center justify-between w-full border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition"
					>
						<div className="flex items-center gap-3">
							<img
								src="/icons/paystack-logo.svg"
								alt="Paystack"
								className="w-8 h-8"
							/>
							<span className="font-medium text-black text-xs md:text-sm">
								PAY WITH PAYSTACK
							</span>
						</div>
						{isPending ? (
							<div className="w-5 h-5">
								<Spinner />
							</div>
						) : (
							<div className="w-5 h-5 rounded-full border border-black" />
						)}
						{/* <input type="radio" name="payment" className="w-5 h-5" /> */}
					</button>

					<button className="flex items-center justify-between w-full rounded-lg p-4 bg-yellow-400 hover:bg-yellow-500 transition">
						<div className="flex items-center gap-3">
							<img src="/icons/mtn-logo.svg" alt="MTN" className="w-8 h-8" />
							<span className="font-medium text-black text-xs md:text-sm">
								PAY WITH AIRTIME (FOR MTN USERS ONLY)
							</span>
						</div>
						{/* <input
							type="radio"
							name="payment"
							className="w-5 h-5"
							defaultChecked
						/> */}
						<div className="w-5 h-5 rounded-full border border-black" />
					</button>
				</div>

				{/* Divider */}
				<div className="flex items-center gap-4">
					<span className="flex-1 h-px bg-gray-300"></span>
					<span className="text-gray-500 text-sm">OR</span>
					<span className="flex-1 h-px bg-gray-300"></span>
				</div>

				{/* Voucher code */}
				<div className="space-y-2">
					<EnhancedForm.Root
						schema={VoucherSchema}
						onSubmit={(data) => console.log(data)}
						defaultValues={{ voucher_code: "" }}
					>
						{(methods) => {
							return (
								<div className="">
									<EnhancedForm.Field
										name="voucher_code"
										control={methods.control}
										label="Have a voucher code?"
										labelClassName="text-sm font-semibold text-black"
									>
										<div className="grid grid-cols-[1fr_auto]  border border-gray-300 rounded-lg py-1 focus-within:border focus-within:border-dlc-blue">
											<EnhancedForm.Input
												name="voucher_code"
												type="text"
												placeholder="Enter code here"
												className="h-[40px] border-none focus:border-none focus:outline-none flex-2 min-w-0 bg-transparent"
											/>
											<EnhancedForm.Submit
												loading={methods.formState.isSubmitting}
												content="Apply"
												className={`h-[40px] px-4 md:px-0 md:w-[125px] bg-transparent !rounded-none text-sm font-normal hover:bg-transparent text-black border-l-2 border-gray-400 flex-shrink-0 ${methods.getValues("voucher_code")?.length === 8 || methods.formState.isValid ? "text-dlc-blue" : ""}`}
											/>
										</div>
									</EnhancedForm.Field>
								</div>
							)
						}}
					</EnhancedForm.Root>
				</div>

				{/* Instructions */}
				<div>
					<h4 className="font-medium text-gray-800 mb-1">Instructions:</h4>
					<ul className="list-disc pl-5 text-sm text-black font-poppins font-normal space-y-1">
						<li>Enter the token code sent to you via SMS</li>
						<li>Click apply to get your on-demand</li>
					</ul>
				</div>
			</div>
		</ModalLayout>
	)
}

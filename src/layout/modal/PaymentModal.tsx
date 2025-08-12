"use client"

import { ModalLayout } from "./ModalLayout"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"

const paymentOptions = [
	{
		method: "airtime",
		title: "PAY WITH AIRTIME (MTN USERS ONLY)",
		icon: () => (
			<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[#fde047]">
				<span className="text-sm font-bold text-black">MTN</span>
			</div>
		),
		bg: "#fde047",
		text: "black"
	},
	{
		method: "card",
		title: "PAY WITH CREDIT/DEBIT CARD",
		icon: () => (
			<div className="flex h-8 w-12 items-center justify-center rounded-md bg-gray-700">
				<div className="h-4 w-6 rounded-sm bg-yellow-500"></div>
			</div>
		),
		bg: "#e5e7eb",
		text: "black"
	},
	{
		method: "momo",
		title: "PAY WITH MTN MOMO (MTN USERS ONLY)",
		icon: () => (
			<div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-900">
				<span className="text-xs font-bold text-yellow-400">MoMo</span>
			</div>
		),
		bg: "#fde047",
		text: "black"
	}
]

type PaymentModes = "airtime" | "card" | "momo"

interface PaymentModeProps {
	isOpen: boolean
	handleMultiplePayments: (methods: PaymentModes) => void
	setIsOpen: (isOpen: boolean) => void
	isLoading: boolean
}

export function PaymentModeModal({
	isOpen,
	handleMultiplePayments,
	setIsOpen,
	isLoading
}: PaymentModeProps) {
	const [selectedPayment, setSelectedPayment] = useState<PaymentModes | null>(
		null
	)

	const handlePaymentSelection = (paymentMethod: PaymentModes) => {
		setSelectedPayment(paymentMethod)
	}

	const handleBack = () => {
		setIsOpen(false)
		setSelectedPayment(null)
	}

	return (
		<ModalLayout
			open={isOpen}
			onOpenChange={setIsOpen}
			size="lg"
			className="
        bg-[#27347a]
        px-4 sm:px-6
        py-4
        max-h-[90vh]
        overflow-y-auto
        text-white
        rounded-xl
      "
			showCloseButton={false}
			footer={
				<Button
					className="w-full rounded-full py-4 sm:py-6 text-white font-semibold transition disabled:opacity-50 hover:text-white"
					style={{
						background: "linear-gradient(135deg, #039be5, #00bcd4)",
						boxShadow: "0 0 10px rgba(3, 155, 229, 0.5)"
					}}
					disabled={!selectedPayment || isLoading}
					onClick={() => {
						if (selectedPayment) {
							handleMultiplePayments(selectedPayment)
						}
					}}
				>
					{isLoading ? "Processing..." : "Proceed"}
				</Button>
			}
		>
			<div className="flex justify-end">
				<Button
					variant="ghost"
					className="rounded-full text-white font-semibold px-4 sm:px-6 py-2 text-sm sm:text-base"
					style={{
						background: "linear-gradient(135deg, #039be5, #00bcd4)",
						boxShadow: "0 0 10px rgba(3, 155, 229, 0.5)"
					}}
					onClick={handleBack}
				>
					Back
				</Button>
			</div>

			<div className="w-full flex justify-center items-center mt-2 mb-6">
				<h4 className="text-xl sm:text-2xl font-semibold">Payment Mode</h4>
			</div>

			<div className="space-y-4">
				{paymentOptions.map((option) => (
					<div
						key={option.method}
						onClick={() =>
							handlePaymentSelection(option.method as PaymentModes)
						}
						className={`flex items-center justify-center cursor-pointer min-h-[60px] sm:h-[67px] border-none rounded-lg transition duration-200 ${
							selectedPayment === option.method ? "ring-4 ring-blue-500" : ""
						}`}
						style={{
							backgroundColor: option.bg
						}}
					>
						<div className="flex items-center space-x-4 w-full px-4 sm:w-[390px]">
							{<option.icon />}
							<span
								className={`text-xs sm:text-sm md:text-base font-semibold text-${option.text}`}
							>
								{option.title}
							</span>
						</div>
					</div>
				))}
			</div>
		</ModalLayout>
	)
}

// "use client"

// import { ModalLayout } from "./ModalLayout"
// import { Button } from "@/components/ui/button"
// import React, { useState } from "react"

// const paymentOptions = [
// 	{
// 		method: "airtime",
// 		title: "PAY WITH AIRTIME (MTN USERS ONLY)",
// 		icon: () => (
// 			<div className="flex h-12 w-12 items-center justify-center rounded-full border-2  bg-[#fde047]">
// 				<span className="text-sm font-bold text-black">MTN</span>
// 			</div>
// 		),
// 		bg: "#fde047",
// 		text: "black"
// 	},
// 	{
// 		method: "card",
// 		title: "PAY WITH CREDIT/DEBIT CARD",
// 		icon: () => (
// 			<div className="flex h-8 w-12 items-center justify-center rounded-md bg-gray-700">
// 				<div className="h-4 w-6 rounded-sm bg-yellow-500"></div>
// 			</div>
// 		),
// 		bg: "#e5e7eb",
// 		text: "black"
// 	},
// 	{
// 		method: "momo",
// 		title: "PAY WITH MTN MOMO (MTN USERS ONLY)",
// 		icon: () => (
// 			<div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-900">
// 				<span className="text-xs font-bold text-yellow-400">MoMo</span>
// 			</div>
// 		),
// 		bg: "#fde047",
// 		text: "black"
// 	}
// ]

// type PaymentModes = "airtime" | "card" | "momo"

// interface PaymentModeProps {
// 	isOpen: boolean
// 	handleMultiplePayments: (methods: PaymentModes) => void
// 	setIsOpen: (isOpen: boolean) => void
// 	isLoading: boolean
// }

// export function PaymentModeModal({
// 	isOpen,
// 	handleMultiplePayments,
// 	setIsOpen,
// 	isLoading
// }: PaymentModeProps) {
// 	const [selectedPayment, setSelectedPayment] = useState<PaymentModes | null>(
// 		null
// 	)

// 	const handlePaymentSelection = (paymentMethod: PaymentModes) => {
// 		setSelectedPayment(paymentMethod)
// 	}

// 	const handleBack = () => {
// 		setIsOpen(false)
// 		setSelectedPayment(null)
// 	}

// 	return (
// 		<ModalLayout
// 			open={isOpen}
// 			onOpenChange={setIsOpen}
// 			size="lg"
// 			className="bg-[#27347a] px-6 h-[469px] text-white rounded-xl"
// 			showCloseButton={false}
// 			footer={
// 				<Button
// 					className="w-full rounded-full py-6 text-white font-semibold transition disabled:opacity-50 hover:text-white"
// 					style={{
// 						background: "linear-gradient(135deg, #039be5, #00bcd4)",
// 						boxShadow: "0 0 10px rgba(3, 155, 229, 0.5)"
// 					}}
// 					disabled={!selectedPayment || isLoading}
// 					onClick={() => {
// 						if (selectedPayment) {
// 							handleMultiplePayments(selectedPayment)
// 						}
// 					}}
// 				>
// 					{isLoading ? "Processing..." : "Proceed"}
// 				</Button>
// 			}
// 		>
// 			<div className="flex justify-end items-center font-poppins text-white">
// 				<Button
// 					variant="ghost"
// 					className="rounded-full text-white font-semibold px-6 py-2"
// 					style={{
// 						background: "linear-gradient(135deg, #039be5, #00bcd4)",
// 						boxShadow: "0 0 10px rgba(3, 155, 229, 0.5)"
// 					}}
// 					onClick={handleBack}
// 				>
// 					Back
// 				</Button>
// 			</div>

// 			<div className="w-full flex justify-center items-center">
// 				<h4 className="text-2xl font-semibold">Payment Mode</h4>
// 			</div>

// 			<div className="space-y-4">
// 				{paymentOptions.map((option) => (
// 					<div
// 						key={option.method}
// 						onClick={() =>
// 							handlePaymentSelection(option.method as PaymentModes)
// 						}
// 						className={`flex items-center justify-center cursor-pointer h-[67px] border-none rounded-lg transition duration-200 ${
// 							selectedPayment === option.method ? "ring-4 ring-blue-500" : ""
// 						}`}
// 						style={{
// 							backgroundColor: option.bg
// 						}}
// 					>
// 						<div className="flex items-center space-x-4 w-[390px]">
// 							{<option.icon />}
// 							<span
// 								className={`text-sm md:text-base font-semibold text-${option.text}`}
// 							>
// 								{option.title}
// 							</span>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</ModalLayout>
// 	)
// }

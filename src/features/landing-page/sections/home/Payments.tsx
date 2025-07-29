import Image from "next/image"

export const Payments = () => {
	return (
		<section
			className="w-full h-[90vh] bg-center bg-cover bg-no-repeat bg-[#0A0B1D]"
			style={{
				backgroundImage: "url('/images/payment-bg.png')"
			}}
		>
			<div className="w-full h-full flex flex-col lg:flex-row justify-center">
				<div className="w-full lg:w-[30dvw] flex justify-center py-6 lg:py-12">
					<h3 className="font-semibold max-w-[230px] text-[40px]  text-light-yellow font-poppins  ">
						PAYMENTS MODE
					</h3>
				</div>
				<div className="w-full lg:w-[60dvw] h-full flex items-center justify-center">
					<div className="relative max-w-[700px] w-[640px] rounded-[20px] bg-dlc-blue-200 p-[2.5rem] overflow-hidden">
						<div className="absolute -left-[10rem] top-0 h-full w-[20rem] pointer-events-none z-0">
							<div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent backdrop-blur-sm rounded-full" />
						</div>

						<div className="relative z-10 space-y-6">
							<div className="flex items-center gap-4 bg-yellow-400 rounded-[10px] px-4 py-3 shadow w-[550px] mx-auto h-[67px] cursor-pointer">
								<Image
									src="/images/mtn-logo.png"
									alt="MTN Logo"
									// className="w-10 h-10"
									width={40}
									height={40}
								/>
								<span className="font-semibold text-black">
									PAY WITH AIRTIME (MTN USERS ONLY)
								</span>
							</div>

							<div className="flex items-center gap-4 bg-gray-200 rounded-[10px] px-4 py-3 shadow w-[550px] mx-auto h-[67px] cursor-pointer">
								<Image
									src="/images/card-icon.png"
									alt="Card Icon"
									// className="w-10 h-10"
									width={40}
									height={40}
								/>
								<span className="font-semibold text-black">
									PAY WITH CREDIT/DEBIT CARD
								</span>
							</div>

							<div className="flex items-center gap-4 bg-yellow-400 rounded-[10px] px-4 py-3 shadow w-[550px] mx-auto h-[67px] cursor-pointer">
								<Image
									src="/images/momo-icon.png"
									alt="MoMo Logo"
									// className="w-10 h-10"
									width={40}
									height={40}
								/>
								<span className="font-semibold text-black">
									PAY WITH MTN MOMO (MTN USERS ONLY)
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

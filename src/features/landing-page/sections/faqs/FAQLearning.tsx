// import { Dropdown } from "../../components/DropDrown"
// import { faqs } from "../../data"
// export const FAQLearning = () => {
// 	return (
// 		<section className="min-h-screen w-full bg-[image:var(--faq-section-two-img-sm)] bg-cover bg-center bg-no-repeat lg:bg-[image:var(--faq-section-two-img)]">
// 			<div className="grid h-screen w-full border-2 border-white px-8 pt-6 lg:items-center lg:px-[3.5rem] lg:pt-[2.5rem]">
// 				<div className="w-full lg:w-1/2">
// 					<div className="w-full md:w-fit">
// 						<h3 className="text-center text-2xl font-normal text-black md:text-left lg:text-5xl">
// 							Frequently Asked
// 							<span className="ml-3 font-bold text-[#0B67B0]">Questions</span>
// 						</h3>
// 						<div className="mt-12 flex w-full flex-col gap-y-5 md:w-[250px] lg:w-[320px]">
// 							{faqs.map((faq, index) => (
// 								<div className="min-h-[56px] w-full" key={index}>
// 									<Dropdown {...faq} />
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
import { Dropdown } from "../../components/DropDrown"
import { faqs } from "../../data"
import Image from "next/image"

export const FAQLearning = () => {
	return (
		<section className="min-h-screen w-full bg-light-yellow-200">
			<div className="grid justify-center h-screen w-full px-8 pt-6 lg:items-center lg:px-[3.5rem] lg:pt-[2.5rem]">
				<div className="w-full max-w-5xl ">
					<div className="w-full lg:w-[850px]">
						<div className="w-full flex justify-between">
							<h3 className="text-center text-2xl font-semibold text-light-blue md:text-left lg:text-5xl">
								Frequently Asked Questions
							</h3>
							<Image
								src="/icons/faq-new-icon.svg"
								width={100}
								height={100}
								alt="faq"
							/>
						</div>
						<div className="mt-12 flex w-full flex-col gap-y-5">
							{faqs.map((faq, index) => (
								<div className="min-h-[56px] w-full" key={index}>
									<Dropdown {...faq} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

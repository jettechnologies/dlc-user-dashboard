import { Dropdown } from "../../components/DropDrown"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"

const faqs: { title: string; description: string | React.ReactNode }[] = [
	{
		title: "What is Digital Learning Circle?",
		description:
			"The Digital Learning Circle (DLC) offers engaging live classes that feature real-time whiteboard teaching and active student involvement, ensuring a comprehensive virtual learning experience."
	},
	{
		title: "What are the features of Digital Learning Circle?",
		description:
			"On Digital Learning Circle, students can join live classes, add them to their in-app E-calendar, and choose their academic category for tailored exams. With a subscription, they can access one exam, explore on-demand plans that allow users to have access to more than one exam at a time."
	},
	{
		title:
			"What is the difference between an Academic Teacher and a Training Teacher?",
		description:
			"An Academic Teacher focuses on school subjects, while a Training Tutor delivers skill-based training."
	},
	{
		title: "Do I need to download any app to use Digital Learning Circle?",
		description:
			"No, Digital Learning Circle is web-based, you login via your web browser and join classes directly."
	},
	{
		title: "How do I subscribe to Digital Learning Circle?",
		description:
			"Subscriptions are processed securely through Paystack, while MTN users can also subscribe by sending DLD to 3545. For exams other than your registered one, use an on-demand subscription."
	},
	{
		title: "What keywords can I use to subscribe to Digital Learning Circle?",
		description: (
			<div className="text-[8px] font-medium text-[#00393A] lg:text-xs space-y-1">
				<p>
					You can subscribe by sending the following keywords to 3545 (MTN users
					only):
				</p>
				<ul className="list-disc list-inside">
					<li>
						<strong>DLD</strong> → Daily plan
					</li>
					<li>
						<strong>DLW</strong> → Weekly plan
					</li>
					<li>
						<strong>DLM</strong> → Monthly plan
					</li>
				</ul>
			</div>
		)
	},
	{
		title: "How do I create an account?",
		description:
			"For new users, click ‘Sign Up,’ choose your role, and enter your details. Follow the steps to verify your account and get started."
	},
	{
		title: "How do I schedule a class as a teacher?",
		description:
			"As a teacher, you can schedule a class by clicking on the Schedule Class button from your dashboard and filling out the form."
	},
	{
		title: "How do I start a live class as a teacher?",
		description:
			"From My Classes, click “Begin Class” on the scheduled session."
	},
	{
		title: "How do I join a class?",
		description: "Check the Upcoming Classes section on your dashboard."
	},
	{
		title: "What happens if my internet disconnects during a class?",
		description:
			"You can rejoin the session from your dashboard as long as the class is still live."
	},
	{
		title: "Can I join a class late?",
		description: "Yes, but you’ll only be able to join while the class is live."
	},
	{
		title: "Who do I contact for help?",
		description: (
			<p className="text-[8px] font-medium text-[#00393A] lg:text-xs space-y-1">
				You can reach our support team via the{" "}
				<Link href="/contact-us">
					<span className="font-bold">Contact Us page</span>
				</Link>{" "}
				or through the email provided on the{" "}
				<Link href="/contact-us">
					<span className="font-bold">Contact Us page</span>
				</Link>
				.
			</p>
		)
	},
	{
		title: "What do I need for the best class experience?",
		description:
			"Use a reliable device with internet access in a quiet environment. This platform works on smartphones, tablets, and computers."
	},
	{
		title: "Do I get a data discount for using this service?",
		description: "Yes, an educational bundle is available for this service."
	}
]

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
						<ScrollArea className="w-full max-h-[450px] overflow-y-auto mt-12 pb-6 ">
							<div className="w-full flex flex-col space-y-5 pr-3">
								{faqs.map((faq, index) => (
									<div className="min-h-[56px] w-full" key={index}>
										<Dropdown {...faq} />
									</div>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		</section>
	)
}

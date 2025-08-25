"use client"

import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { useContactUs } from "@/services/mutation/useQuery-mutation"
import { contactFormSchema } from "@/utils/schemas"
import { Map, APIProvider } from "@vis.gl/react-google-maps"
import { Phone } from "lucide-react"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

const location = { lat: 6.569680110827858, lng: 3.371306080013683 }

export const ContactForm = () => {
	const { mutateAsync: contactUs, isPending } = useContactUs()

	return (
		<>
			<section className="grid min-h-screen w-full place-items-center bg-light-yellow-200 max-sm:pb-18 pt-18">
				<div className="flex min-h-screen w-full flex-col-reverse gap-8 md:flex-row ">
					<div className="w-full px-8 pb-12 max-sm:order-2 md:w-1/2 lg:px-16 xl:px-24 ">
						<div className="w-full space-y-1.5 mb-8">
							<h3 className="text-light-blue font-poppins font-semibold text-2xl lg:text-3xl">
								Contact Us
							</h3>
							<p className="font-poppins font-normal text-sm lg:text-base text-black">
								Contact us directly or fill out the form and we will get back to
								you promptly
							</p>
						</div>
						<EnhancedForm.Root
							schema={contactFormSchema}
							onSubmit={async (values, options) => {
								const data = {
									name: values.name,
									email: values.email,
									phone: values.contact,
									reason: values.subject,
									message: values.message
								}

								const response = await contactUs(data)
								if (response.success) {
									toast.success(response.message)
									options?.resetForm()
								} else {
									toast.error(response.message)
								}
							}}
							className="flex lg:min-h-screen w-full flex-col justify-center gap-y-4 py-0"
						>
							<div className="flex w-full flex-col gap-y-4">
								<div className="flex flex-1 flex-col gap-y-6">
									<EnhancedForm.Input
										name="name"
										placeholder="Enter your name"
										inputSize="lg"
										radius="6px"
										className="border border-black shadow-md text-sm"
									/>
									<EnhancedForm.Input
										name="email"
										placeholder="Enter your email address"
										inputSize="lg"
										radius="6px"
										className="border border-black shadow-md text-sm"
									/>
									<EnhancedForm.Input
										name="contact"
										placeholder="Enter your phone number"
										inputSize="lg"
										radius="6px"
										className="border border-black shadow-md text-sm"
									/>
									<EnhancedForm.Input
										name="subject"
										placeholder="Enter your reason for contacting us"
										inputSize="lg"
										radius="6px"
										className="border border-black shadow-md text-sm"
									/>
								</div>
								<div className="flex-1">
									<EnhancedForm.TextArea
										name="message"
										className="h-[256px] rounded-lg border border-black shadow-md max-sm:h-[119px] w-full text-sm"
										placeholder="Enter your message here"
									/>
								</div>
							</div>
							<div className="mt-6 w-full">
								<EnhancedForm.Submit
									content="Send Message"
									loading={isPending}
									loadingText="Sending..."
									className="font-normal lg:text-sm bg-light-blue text-white py-3 w-full rounded-lg h-[60px]"
								/>
							</div>
						</EnhancedForm.Root>
					</div>
					<div className="max-sm:order-1 md:w-1/2 md:pr-4 max-sm:px-6">
						<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
							<div
								className="relative h-[300px] max-h-[500px] min-h-[250px] w-full rounded-md  shadow-md lg:h-[430px]"
								aria-label="Location map"
							>
								<Map
									center={location}
									zoom={13}
									gestureHandling="greedy"
									disableDefaultUI={false}
									zoomControl={true}
									aria-label="Interactive map"
								/>

								{/* Fallback image in case map fails to load */}
								<div
									className="absolute bottom-0 left-0 h-[100px] w-[120px] lg:h-[150px] lg:w-[250px]"
									role="img"
									aria-label="Map location preview"
								>
									<Image
										src="/images/contact-location.png"
										alt="Location preview image"
										fill
										className="object-cover"
										priority={false}
										quality={80}
										loading="lazy"
									/>
								</div>
							</div>
						</APIProvider>
						<div className="w-full space-y-4 mt-12">
							<div className="w-full flex gap-4 flex-col lg:flex-row">
								<div className="flex space-x-3 py-[12px] px-[30px] w-fit rounded-xl border-2 border-light-blue">
									<Phone size={24} className="text-light-blue font-semibold" />
									<Link
										href={"tel:+234704330300"}
										className="text-xs font-medium text-light-blue sm:text-sm"
									>
										+234 704 330 3000
									</Link>
								</div>
								<div className="flex space-x-3 py-[12px] px-[30px] w-fit rounded-xl border-2 border-light-blue">
									<Phone size={24} className="text-light-blue font-semibold" />
									<Link
										href={"tel:+2348092933330"}
										className="text-xs font-medium text-light-blue sm:text-sm"
									>
										+234 809 293 3330
									</Link>
								</div>
							</div>
							<div className="flex space-x-3 py-[12px] px-[30px] w-fit rounded-xl border-2 border-light-blue">
								<Mail size={24} className="text-light-blue font-semibold" />
								<Link
									href={"mailto:support@digitallearningcircle.com"}
									className="text-xs font-medium text-light-blue sm:text-sm"
								>
									support@digitallearningcircle.com
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

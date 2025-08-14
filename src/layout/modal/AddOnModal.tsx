import { ModalLayout } from "./ModalLayout"
import { Carousel, Spinner } from "@/components/shared"
import { Button } from "@/components/ui"
import { ClassCard } from "@/features/student/components/class-card"
import { OnDemandCard } from "@/features/student/components/ondemand-card"
import {
	fetchUpcomingLecturesByExamIdQueryOpts,
	fetchAllOnDemandsQueryOpts
} from "@/services/query"
import { studentTransformClassesToCardData } from "@/utils/constants"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { EmblaOptionsType } from "embla-carousel"
import { X } from "lucide-react"

interface AddOnModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	examId: string | null
	handlePayment?: (planId: string) => void
}

const carouselSettings: EmblaOptionsType = {
	loop: true,
	align: "center",
	dragFree: false,
	startIndex: 0
}

export const AddOnModal = ({
	isOpen,
	setIsOpen,
	examId,
	handlePayment
}: AddOnModalProps) => {
	const { data: upcomingLectures, isLoading: isLoadingUpcomingLectures } =
		useQuery({
			...fetchUpcomingLecturesByExamIdQueryOpts(examId ?? ""),
			enabled: !!examId,
			select: (data) => {
				if (!data.data) throw new Error(data.message || "Exams data not found")
				return data.data.data.map((lecture) =>
					studentTransformClassesToCardData(lecture)
				)
			}
		})

	const { data: onDemandPlans } = useSuspenseQuery({
		...fetchAllOnDemandsQueryOpts(),
		select: (data) => {
			if (!data.data) throw new Error(data.message || "Exams data not found")
			return data.data.map((plan, index) => {
				const indexModus = index % 2
				return {
					id: plan._id,
					price: plan.price,
					description: plan.description,
					duration: `${plan.durationInHours} hours`,
					variant: indexModus === 0 ? "yellow" : ("dark" as "yellow" | "dark")
				}
			})
		}
	})

	return (
		<ModalLayout
			open={isOpen}
			onOpenChange={setIsOpen}
			size="5xl"
			showCloseButton={false}
			className="bg-white px-6 min-h-[469px] text-white rounded-xl"
		>
			<div className="w-full flex justify-between ">
				<div className="flex flex-col gap-y-3 font-poppins">
					<h3 className="font-semibold text-black text-[24px]">
						Available Classes
					</h3>
					<p className="font-normal text-black text-[14px]">
						Available Lectures for you to attend
					</p>
				</div>
				<Button variant="ghost" onClick={() => setIsOpen(false)}>
					<X className="font-bold text-black w-[36px] h-[36px]" />
				</Button>
			</div>

			<div>
				{isLoadingUpcomingLectures ? (
					<div className="h-[192px] w-full grid place-content-center">
						<Spinner />
						<p className="font-poppins font-[500] text-[14px] text-black">
							Loading upcoming lectures...
						</p>
					</div>
				) : (
					<div className="relative overflow-hidden w-full min-h-[192px] h-fit max-w-[1024px]  py-4 ">
						{upcomingLectures && upcomingLectures.length > 0 ? (
							<Carousel
								isAutoPlay
								autoPlayInterval={3000}
								options={carouselSettings}
							>
								{upcomingLectures.map((classItem) => (
									<ClassCard
										key={classItem.id}
										{...classItem}
										showJoinButton={false}
										isLoading={isLoadingUpcomingLectures}
									/>
								))}
							</Carousel>
						) : (
							<div className="h-[192px] w-full grid place-content-center">
								<p className="font-poppins font-[500] text-[14px] text-black">
									No Upcoming Lectures
								</p>
							</div>
						)}
					</div>
				)}
			</div>

			<div className="flex w-full items-center flex-col ">
				<p className=" font-poppins font-[500] text-[14px] text-black mt-4">
					Select a plan
				</p>
				<div className="flex mt-4 gap-4 w-full flex-wrap max-h-[220px] overflow-y-auto p-4">
					{onDemandPlans?.map((plan, index) => (
						<OnDemandCard
							key={index}
							{...plan}
							onSubscribe={() => handlePayment?.(plan.id)}
						/>
					))}
				</div>
			</div>
		</ModalLayout>
	)
}

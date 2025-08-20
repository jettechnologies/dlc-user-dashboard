"use client"

import { PageWrapper } from "../components/shared"
import { ExamCard } from "@/components/shared"
import { Button } from "@/components/ui"
import {
	getAllExamsQueryOptions,
	getTeacherExamsQueryOptions
} from "@/services/query"
import { IExam, ResponseSingleType } from "@/types/response-type"
import { cn } from "@/utils/lib/utils"
import { useSuspenseQueries } from "@tanstack/react-query"

// import { Info } from "lucide-react"

interface TitleContainerProps {
	title: string
	btnText?: string
	btnAction?: () => void
	btnClassName?: string
}

export const TitleContainer = ({
	title,
	btnText,
	btnAction,
	btnClassName
}: TitleContainerProps) => {
	return (
		<div className="w-full flex justify-between items-center">
			<h3 className="font-poppins font-semibold text-2xl text-black capitalize">
				{title}
			</h3>
			{btnText ? (
				<Button
					className={cn(
						"bg-dlc-blue hover:bg-dlc-blue text-white text-center rounded-[8px] font-medium py-3 w-[144px] h-[44px] text-base capitalize",
						btnClassName
					)}
					onClick={btnAction}
				>
					{btnText}
				</Button>
			) : null}
		</div>
	)
}

const transform = (
	data: ResponseSingleType<IExam[]> | ResponseSingleType<null>
) =>
	data.data?.map((exam, index) => ({
		examName: exam.name,
		examImage: exam.examImage,
		numberOfStudents: (index + 1) * 1000
	})) ?? null

export const MyExams = () => {
	const [allExams, teacherExams] = useSuspenseQueries({
		queries: [getAllExamsQueryOptions(), getTeacherExamsQueryOptions()]
	})

	const allExamsStats = transform(allExams.data)
	const teacherExamsStats = transform(teacherExams.data)

	if (!allExamsStats || !teacherExamsStats) {
		throw new Error("No Teacher exams found")
	}

	return (
		<PageWrapper>
			<div className="w-full min-h-[300px]">
				{/* <TitleContainer title="your exam" /> */}
				<div className="mt-[20px]">
					<h4 className="font-poppins font-semibold text-2xl text-black uppercase">
						Teacher Exams
					</h4>
					<div className="mt-3 w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center md:justify-start gap-4">
						{teacherExamsStats.map((examStat, index) => (
							<ExamCard
								key={index}
								examName={examStat.examName}
								studentCount={examStat.numberOfStudents}
								examImage={`/teacher/exam-img-${(index % 5) + 1}.png`}
							/>
						))}
					</div>
				</div>
			</div>
			{/* <div className="w-full min-h-[300px] mt-[20px]">
				<TitleContainer title="ALL EXAMS" btnText="Add" />
				<div className="mt-[20px]">
					<div className="w-fit flex gap-x-1 items-center">
						<Info size={20} className="color-dlc-gray/40" />
						<p className="font-poppins font-normal text-xs text-black">
							You will forfeit all your upcoming classes if you switch
						</p>
					</div>

					<div className="mt-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center md:justify-start gap-4">
						{allExamsStats.map((examStat, index) => (
							<ExamCard
								key={index}
								examName={examStat.examName}
								rating={{ value: examStat.rating }}
								studentCount={examStat.numberOfStudents}
								examImage={`/teacher/exam-img-${(index % 5) + 1}.png`}
							/>
						))}
					</div>
				</div>
			</div> */}
		</PageWrapper>
	)
}

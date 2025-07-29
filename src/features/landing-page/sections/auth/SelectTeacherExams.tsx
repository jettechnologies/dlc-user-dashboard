"use client"

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { TeacherSignupProps } from "../../containers/auth"
import { ExamCard } from "@/components/shared"
import { Button } from "@/components/ui"
import { TitleContainer } from "@/features/teacher/container"
import { examStats } from "@/features/teacher/data/exam-data"
import {
	useTeacherSignupActions,
	useTeacherSignupState
} from "@/stores/teacher-signup-flow"
import { useUiComponentStore } from "@/utils/lib/query-store"

export const SelectTeacherExams = ({ levelData }: TeacherSignupProps) => {
	const { updateUiStore } = useUiComponentStore()
	const { setLevel, removeLevel } = useTeacherSignupActions()
	const { level } = useTeacherSignupState()

	return (
		<section className="w-[80%] space-y-6">
			<div className="space-y-2 font-poppins text-black">
				<h2 className="text-2xl font-semibold">Select your Exam</h2>
				<p className="text-sm font-normal">Select the Exam you want to teach</p>
			</div>

			<section className="w-full py-8 px-4 bg-white mx-auto">
				<div className="w-full py-8 px-4 bg-white mx-auto">
					<div className="max-w-5xl w-full lg:w-[85%] space-y-8 mx-auto">
						{levelData.map((data) => (
							<div key={data._id} className="w-full space-y-5">
								<TitleContainer
									title={data.name}
									btnText={level?.includes(data.name) ? "Remove" : "Add"}
									btnAction={() => {
										level?.includes(data.name)
											? removeLevel()
											: setLevel(data.name)
									}}
									btnClassName={
										level?.includes(data.name)
											? "bg-red-500 hover:bg-red-500"
											: ""
									}
								/>
								<h4 className="font-poppins font-semibold text-2xl text-black uppercase">
									{data.name}
								</h4>
								<div className="grid grid-cols-[225px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
									{data.exams.map((exam, index) => {
										// Find matching exam stats or use default values
										const examStat = examStats.find(
											(stat) =>
												stat.examName
													.toLowerCase()
													.includes(exam.name.toLowerCase()) ||
												exam.name
													.toLowerCase()
													.includes(stat.examName.toLowerCase())
										) || {
											examName: exam.name,
											numberOfStudents: 0,
											rating: 0
										}

										return (
											<ExamCard
												key={`${data.code}-${exam._id}`}
												examName={examStat.examName}
												rating={{ value: examStat.rating }}
												studentCount={examStat.numberOfStudents}
												examImage={`/teacher/exam-img-${index + 1}.png`}
											/>
										)
									})}
								</div>
							</div>
						))}
					</div>
				</div>
				{/* </div> */}

				{/* Next Button */}
				<div className="w-full flex justify-center pt-6">
					<Button
						className="h-[52px] w-[400px] bg-light-blue text-[16px] font-semibold hover:bg-light-blue/80 lg:text-[20px]"
						disabled={level?.length === 0}
						onClick={() => updateUiStore("teacher-credentials")}
					>
						Next
					</Button>
				</div>
				{/* </div> */}
			</section>
		</section>
	)
}

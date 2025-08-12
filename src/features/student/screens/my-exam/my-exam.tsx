"use client"

import PageHeaderText from "../../components/PageHeader"
import ExamCard from "../../components/exam-card"
import { AddOnModal } from "@/layout/modal"
import {
	getAllExamsQueryOpts,
	fetchAllOnDemandExamsQueryOpts
} from "@/services/query"
import { useAuthState } from "@/stores"
import { StudentProfile } from "@/types/response-type"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Info } from "lucide-react"
import { useCallback, useState } from "react"
import { toast } from "sonner"

export const MyExam = () => {
	const [examId, setExamId] = useState<string | null>(null)
	const { data: exams } = useSuspenseQuery({
		...getAllExamsQueryOpts()
	})

	const { data: onDemandExams } = useSuspenseQuery({
		...fetchAllOnDemandExamsQueryOpts()
	})

	// const totalExams = [...exams, ...onDemandExams]

	const { userProfile } = useAuthState()

	const getStudentProfile = useCallback((): StudentProfile => {
		if (userProfile && "exam" in userProfile) {
			return userProfile as StudentProfile
		}
		throw new Error("User is not a student or not logged in.")
	}, [userProfile])

	const studentProfile = getStudentProfile()

	return (
		<>
			<div className="lg:p-6 pb-6">
				{/* Header */}
				<PageHeaderText>Your Exam</PageHeaderText>

				{/* O-Level Section */}
				<div className="mb-8">
					<div className="flex items-center gap-3 mb-6">
						{/* <h2 className="text-xl md:text-2xl font-bold text-gray-900">
							O - LEVEL
						</h2> */}
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<Info className="w-4 h-4" />
							<span>
								You can only switch while your subscription is still active
							</span>
						</div>
					</div>

					{/* Featured Exam Card */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{studentProfile.exam && (
							<ExamCard
								name={studentProfile.exam.name}
								numberOfClasses={studentProfile.exam.lectureCount}
							/>
						)}
						{onDemandExams.map((exam) => (
							<ExamCard
								key={exam._id}
								name={exam.examId.name}
								numberOfClasses={exam.lectureCount}
							/>
						))}
					</div>
				</div>

				{/* Other Exams Section */}
				<div>
					<div className="flex items-center gap-3 mb-6">
						<h2 className="text-xl md:text-2xl font-bold text-gray-900">
							Other Exams
						</h2>
					</div>

					<div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
						<Info className="w-4 h-4" />
						<span>
							You can only add other exams while your subscription is still
							active
						</span>
					</div>

					{/* Exam Cards Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{exams.map((exam) => (
							<ExamCard
								key={exam._id}
								name={exam.name}
								numberOfClasses={exam.lectures.length}
								type="other"
								onAddExams={() => {
									if (studentProfile.subscriptionStatus) {
										setExamId(exam._id)
									} else {
										toast.warning(
											"You need to be subscribed to add an On-Demand Exam"
										)
									}
								}}
							/>
						))}
					</div>
				</div>
			</div>
			<AddOnModal
				examId={examId}
				isOpen={!!examId}
				setIsOpen={() => setExamId(null)}
			/>
		</>
	)
}

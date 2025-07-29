"use client"

import { SelectTeacherExams, CredentialForm } from "../../sections/auth"
import { IEducationLevel } from "@/types/response-type"
import { useUiComponentStore } from "@/utils/lib/query-store"

export interface TeacherSignupProps {
	levelData: IEducationLevel[]
}

export const TeacherSignup = ({ levelData }: TeacherSignupProps) => {
	const { store } = useUiComponentStore()

	return (
		<div className="w-full min-h-screen bg-light-yellow-200 grid place-items-center py-5">
			{store === "teacher-exams" ? (
				<SelectTeacherExams levelData={levelData} />
			) : (
				store === "teacher-credentials" && <CredentialForm />
			)}
		</div>
	)
}

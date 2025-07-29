import { TeacherSignupFlow, TeacherSignupInfo } from "@/utils/schemas"

// export interface TeacherSignupState extends Partial<TeacherSignupFlow> {}
export type TeacherSignupState = Partial<TeacherSignupFlow>

export interface TeacherSignupActions {
	setTeacherInfo: (info: TeacherSignupInfo) => void
	updateTeacherInfo: (info: Partial<TeacherSignupInfo>) => void
	setLevel: (level: string) => void
	// removeExam: (exam: string) => void
	removeLevel: () => void
	resetSignupState: () => void
}

export type TeacherSignupSlice = TeacherSignupState & {
	actions: TeacherSignupActions
}

import { TeacherSignupSlice } from "./types"
import { TeacherSignupInfo } from "@/utils/schemas"
import { StateCreator } from "zustand"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { useShallow } from "zustand/react/shallow"

export const createTeacherSignupSlice: StateCreator<
	TeacherSignupSlice,
	[["zustand/immer", never]],
	[],
	TeacherSignupSlice
> = (set) => ({
	teacherInfo: undefined,
	level: "",
	actions: {
		setTeacherInfo: (info) => {
			set((state) => {
				state.teacherInfo = info
			})
		},
		updateTeacherInfo: (info) => {
			set((state) => {
				state.teacherInfo = state.teacherInfo
					? { ...state.teacherInfo, ...info }
					: ({ ...info } as TeacherSignupInfo)
			})
		},
		setLevel: (level) => {
			set((state) => {
				state.level = level
			})
		},
		// removeExam: (exam) => {
		// 	set((state) => {
		// 		state.exams = state.exams?.filter((e) => e !== exam)
		// 	})
		// },
		removeLevel: () => {
			set((state) => {
				state.level = ""
			})
		},
		resetSignupState: () => {
			set((state) => {
				state.teacherInfo = undefined
				state.level = ""
			})
		}
	}
})

export const useTeacherSignupStore = create<TeacherSignupSlice>()(
	devtools(
		immer((...args) => ({
			...createTeacherSignupSlice(...args)
		})),
		{ name: "TeacherSignupStore" }
	)
)

// Full state
export const useTeacherSignupState = () =>
	useTeacherSignupStore(useShallow((state) => state))

// Actions
export const useTeacherSignupActions = () =>
	useTeacherSignupStore((state) => state.actions)

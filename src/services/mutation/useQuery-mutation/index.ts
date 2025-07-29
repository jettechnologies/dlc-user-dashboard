import { addOnDemand, addOnDemandParams } from "../ondemand"
import { studentAddClassToTimetable, studentAttendClass } from "../student"
import { initializePayment } from "../subscription"
import {
	CreateLectureParams,
	createLecture,
	deleteLecture,
	startLecture
} from "../teacher"
import { queryKeys } from "@/services/query"
import { useMutation } from "@tanstack/react-query"

export const useCreateLecture = () =>
	useMutation({
		mutationFn: (params: CreateLectureParams) => createLecture(params),
		meta: {
			invalidatesQuery: queryKeys.lecture.all(),
			successMessage: "Lecture Created",
			errorMessage: "Error while creating lecture"
		}
	})

export const useStartLecture = () =>
	useMutation({
		mutationFn: (classId: string) => startLecture(classId),
		meta: {
			invalidatesQuery: queryKeys.lecture.all(),
			successMessage: "Lecture Started",
			errorMessage: "Error while starting lecture"
		}
	})

export const useJoinLecture = () =>
	useMutation({
		mutationFn: (classId: string) => studentAttendClass(classId),
		meta: {
			invalidatesQuery: queryKeys.lecture.all(),
			successMessage: "Student Joined Lecture Successfully",
			errorMessage: "Error while joining lecture"
		}
	})

export const useAddToTimetable = () =>
	useMutation({
		mutationFn: (lectureId: string) => studentAddClassToTimetable(lectureId),
		meta: {
			invalidatesQuery: queryKeys.lecture.all(),
			successMessage: "Student added lecture to timetable successfully",
			errorMessage: "Error while adding lecture to timetable"
		}
	})

export const useDeleteLecture = () =>
	useMutation({
		mutationFn: (classId: string) => deleteLecture(classId),
		meta: {
			invalidatesQuery: queryKeys.lecture.all(),
			successMessage: "Class Deleted Successfully",
			errorMessage: "Error while deleting class"
		}
	})

export const useInitializePayment = () =>
	useMutation({
		mutationFn: (amount: number) => initializePayment(amount),
		meta: {
			invalidatesQuery: queryKeys.userProfile.all()
		}
	})

export const useAddOnDemand = () =>
	useMutation({
		mutationFn: (params: addOnDemandParams) => addOnDemand(params),
		meta: {
			invalidatesQuery: queryKeys.ondemand.all(),
			errorMessage: "Error while adding on-demand exam"
		}
	})

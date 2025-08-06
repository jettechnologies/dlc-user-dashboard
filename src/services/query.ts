import {
	fetchUserProfile,
	fetchTeacherExams,
	fetchAllLectures,
	fetchTeacherDashboard,
	fetchAllExams
} from "./queries"
import {
	fetchAllOndemandExams,
	fetchAllOndemandPlans
} from "./queries/ondemand"
import {
	fetchLectureTimetable,
	fetchUpcomingLectures,
	fetchStudentDashboard,
	fetchUpcomingLecturesByExamId
} from "./queries/student"
import {
	fetchAllSubscriptions,
	fetchSubscriptionHistory
} from "./queries/subscription"
import { LectureStatus } from "@/types/response-type"
import { UserRoles } from "@/utils/constants"
import { queryOptions } from "@tanstack/react-query"

export const queryKeys = {
	userProfile: {
		all: () => ["userProfile"]
	},
	lecture: {
		all: () => ["lecture"],
		getLectures: (status: LectureStatus) => [
			...queryKeys.lecture.all(),
			status
		],
		getStudentUpcomingLectures: () => [...queryKeys.lecture.all(), "upcoming"],
		timetableLectures: () => [...queryKeys.lecture.all(), "timetableLectures"],
		lectureHistory: () => [...queryKeys.lecture.all(), "history"],
		getUpcomingLecturesByExamId: (id: string) => [
			...queryKeys.lecture.all(),
			"upcomingByExam",
			id
		]
	},
	dashboard: {
		teacher: () => ["dashboard", "teacher"],
		student: () => ["dashboard", "student"],
		getAllExams: () => ["dashboard", "exams"]
	},
	teacher: {
		all: () => ["teacher"],
		getAllExams: () => [...queryKeys.teacher.all(), "exams"]
	},
	subscriptions: {
		all: () => ["subscriptions"],
		subscriptionHistory: () => [...queryKeys.subscriptions.all(), "history"]
	},
	ondemand: {
		all: () => ["ondemand"],
		getAllOndemandPlans: () => [...queryKeys.ondemand.all(), "plans"],
		getAllOndemandExams: () => [...queryKeys.ondemand.all(), "exams"]
	},
	student: {
		all: () => ["student"]
	}
}

export const getUserProfileQueryOptions = (userRole: UserRoles) => {
	return queryOptions({
		queryKey: queryKeys.userProfile.all(),
		queryFn: () => fetchUserProfile(userRole)
	})
}

export const getTeacherExamsQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.teacher.getAllExams(),
		queryFn: () => fetchTeacherExams()
	})
}

export const getLecturesQueryOptions = (status: LectureStatus) => {
	return queryOptions({
		queryKey: queryKeys.lecture.getLectures(status),
		queryFn: () => fetchAllLectures(status)
	})
}

export const getAllExamsQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.dashboard.getAllExams(),
		queryFn: () => fetchAllExams()
	})
}
export const getAllExamsQueryOpts = () => {
	return queryOptions({
		queryKey: queryKeys.dashboard.getAllExams(),
		queryFn: () => fetchAllExams(),
		select: (data) => {
			if (!data.data) throw new Error(data.message || "Exams data not found")
			return data.data
		}
	})
}

export const studentUpcomingLecturesQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.lecture.getStudentUpcomingLectures(),
		queryFn: () => fetchUpcomingLectures()
	})
}

export const studentTimetableLecturesQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.lecture.timetableLectures(),
		queryFn: () => fetchLectureTimetable()
	})
}

export const subcriptionPlanQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.subscriptions.all(),
		queryFn: () => fetchAllSubscriptions()
	})
}

export const fetchTeacherDashboardQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.dashboard.teacher(),
		queryFn: () => fetchTeacherDashboard()
	})
}

export const fetchStudentDashboardQueryOptions = () => {
	return queryOptions({
		queryKey: queryKeys.dashboard.student(),
		queryFn: () => fetchStudentDashboard()
	})
}

export const fetchUpcomingLecturesByExamIdQueryOpts = (examId: string) => {
	return queryOptions({
		queryKey: queryKeys.lecture.getUpcomingLecturesByExamId(examId),
		queryFn: () => fetchUpcomingLecturesByExamId(examId)
	})
}
export const fetchAllOnDemandsQueryOpts = () => {
	return queryOptions({
		queryKey: queryKeys.ondemand.getAllOndemandPlans(),
		queryFn: () => fetchAllOndemandPlans()
	})
}

export const fetchAllOnDemandExamsQueryOpts = () => {
	return queryOptions({
		queryKey: queryKeys.ondemand.getAllOndemandExams(),
		queryFn: () => fetchAllOndemandExams(),
		select: (data) => {
			if (!data.data) throw new Error(data.message || "Ondemand data not found")
			return data.data
		}
	})
}

export const fetchSubscriptionHistoryQueryOpts = () => {
	return queryOptions({
		queryKey: queryKeys.subscriptions.subscriptionHistory(),
		queryFn: () => fetchSubscriptionHistory(),
		select: (data) => {
			if (!data.data)
				throw new Error(data.message || "Subscription History data not found")
			return data.data
		}
	})
}
// const getTeacherAllExamsQueryOptions = () => ({
//   queryKey: ["allExams"],
//   queryFn: fetchAllExams, // your fetcher function,
//   select: (data: YourExamResponseType) => {
//     return data.data?.map((exam, index) => ({
//       examName: exam.name,
//       numberOfStudents: (index + 1) * 1000,
//       rating: (index + 1) * 1.5,
//     })) ?? null;
//   },
// });

// const getTeacherExamsQueryOptions = () => ({
//   queryKey: ["teacherExams"],
//   queryFn: fetchTeacherExams, // your fetcher function
//   select: (data: YourExamResponseType) => {
//     return data.data?.map((exam, index) => ({
//       examName: exam.name,
//       numberOfStudents: (index + 1) * 1000,
//       rating: (index + 1) * 1.5,
//     })) ?? null;
//   },
// });

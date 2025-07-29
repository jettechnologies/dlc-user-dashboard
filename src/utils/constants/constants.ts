import { getAuthCookie } from "./cookies"
import type { Option } from "@/components/shared/form"
import {
	ClassCardData,
	ClassStatus
} from "@/features/student/components/class-card"
import { ClassCardProps } from "@/features/teacher/components/home"
import { ClassData } from "@/features/teacher/components/my-class"
import { ClassEvent } from "@/types/index"
import {
	IExam,
	LectureResponse,
	LectureTimetableResponse,
	StudentLectureResponse
} from "@/types/response-type"
import { Lecture, RecentTimetableEntry } from "@/types/response-type"
import type { OptionsType } from "cookies-next"
import {
	differenceInCalendarDays,
	isToday,
	isTomorrow,
	format,
	parse,
	addMinutes,
	isWithinInterval
} from "date-fns"

export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "/"
export const JSON_PLACEHOLDER_URL = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL

export const API_TIMEOUT = 10000

export const CONTENT_TYPES = {
	json: "application/json",
	formUrlEncoded: "application/x-www-form-urlencoded",
	formData: "multipart/form-data",
	text: "text/plain",
	html: "text/html",
	xml: "application/xml"
} as const

export const NAME_REGEX = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/
export const PHONE_REGEX = /^0\(5\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/

export const TOKEN_KEY = "DLC_auth_token"
export const USER_ROLE_KEY = "user_role"
export const COOKIES_CONFIG = {
	path: "/",
	maxAge: 7 * 24 * 60 * 60,
	secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
	sameSite: "strict"
} as Partial<OptionsType>

export const MAX_IMAGE_SIZE = 20 * 1024 * 1024
export const MAX_DOCUMENT_SIZE = 200 * 1024 * 1024
export const SUPPORTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp",
	"image/svg",
	"image/jpg"
]

export const SUPPORTED_DOCUMENT_TYPES = [
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"application/pdf"
]

const colorPalette: { color: string; backgroundColor: string }[] = [
	{ color: "#be185d", backgroundColor: "#fce7f3" },
	{ color: "#0891b2", backgroundColor: "#cffafe" },
	{ color: "#7c3aed", backgroundColor: "#e9d5ff" },
	{ color: "#16a34a", backgroundColor: "#dcfce7" },
	{ color: "#059669", backgroundColor: "#d1fae5" },
	{ color: "#dc2626", backgroundColor: "#fee2e2" },
	{ color: "#2563eb", backgroundColor: "#dbeafe" },
	{ color: "#22c55e", backgroundColor: "#bbf7d0" },
	{ color: "#ea580c", backgroundColor: "#fed7aa" },
	{ color: "#6b7280", backgroundColor: "#e5e7eb" }
]

const getRandomColorPair = () => {
	return colorPalette[Math.floor(Math.random() * colorPalette.length)]
}

export const createExamOptions = (exams: IExam[]): Option[] => {
	return exams
		.flatMap((exam) => exam.name)
		.map((name) => ({ value: name, label: name }))
}

export const createExamIdOptions = (exams: IExam[]): Option[] => {
	return exams.map((exam) => ({
		value: exam._id,
		label: exam.name
	}))
}

export const userRoles = ["student", "teacher"]
export type UserRoles = (typeof userRoles)[number]

interface AuthFetchParams {
	url: string
	options?: RequestInit
	token?: string
}

export async function authFetch<T>(params: AuthFetchParams): Promise<T> {
	const { url, options = {}, token } = params
	const authToken = token || getAuthCookie()?.accessToken
	const isClient = typeof window !== "undefined"

	if (!authToken && isClient) {
		throw new Error("Authorization token is required")
	}

	const headers = new Headers({
		...options.headers,
		"Content-Type": "application/json",
		Authorization: `Bearer ${authToken}`
	})

	const response = await fetch(url, {
		...options,
		headers
	})

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error?.message || "Request failed")
	}

	return response.json() as Promise<T>
}

// export async function authMutation<T>(params: AuthFetchParams): Promise<T> {
// 	const { url, options = {}, token } = params
// 	const authToken = token || getAuthCookie()?.accessToken

// 	if (!authToken) {
// 		throw new Error("Authorization token is required")
// 	}

// 	const headers = new Headers({
// 		...options.headers,
// 		"Content-Type": "application/json",
// 		Authorization: `Bearer ${authToken}`
// 	})

// 	const response = await fetch(url, {
// 		...options,
// 		headers
// 	})

// 	if (!response.ok) {
// 		const error = await response.json().catch(() => ({}))
// 		throw new Error(error?.message || "Request failed")
// 	}

// 	return response.json() as Promise<T>
// }

export const transformToClassData = (raw: LectureResponse): ClassData => {
	// Correctly parse raw.time (e.g. "07:00 AM") and raw.date
	const startDateTime = parse(
		`${(raw.date as string).split("T")[0]} ${raw.time}`,
		"yyyy-MM-dd hh:mm a",
		new Date()
	)

	if (isNaN(startDateTime.getTime())) {
		throw new Error(`Invalid date/time input: ${raw.date} ${raw.time}`)
	}

	const endDateTime = new Date(
		startDateTime.getTime() + raw.duration * 60 * 1000
	)

	const startTime = format(startDateTime, "hh:mm a")
	const endTime = format(endDateTime, "hh:mm a")

	const today = new Date()
	const classDate = new Date(raw.date)
	const daysDiff = differenceInCalendarDays(classDate, today)

	let status: ClassData["status"] = "today"
	let daysAgo: number | undefined

	if (isToday(classDate)) {
		status = "today"
	} else if (isTomorrow(classDate)) {
		status = "tomorrow"
	} else if (daysDiff > 1) {
		status = "in-days"
		daysAgo = daysDiff
	} else if (daysDiff < 0) {
		status = "30-days-ago"
	}

	return {
		id: raw._id,
		name: raw.examId.name,
		subject: raw.subject,
		time: `${startTime} - ${endTime}`,
		students: raw.maxStudents,
		files: raw.resources.length,
		status,
		...(daysAgo ? { daysAgo } : {})
	}
}

export const studentTransformClassesToCardData = (
	lecture: StudentLectureResponse
): ClassCardData => {
	const startDateTime = parse(
		`${(lecture.date as string).split("T")[0]} ${lecture.time}`,
		"yyyy-MM-dd hh:mm a",
		new Date()
	)

	const endDateTime = addMinutes(startDateTime, lecture.duration)

	// Format time range
	const time = `${format(startDateTime, "h:mma").toLowerCase()} - ${format(endDateTime, "h:mma").toLowerCase()}`

	// Determine status
	let status: ClassStatus = "Not_started"
	const now = new Date()

	// if (lecture.completed || isBefore(endDateTime, now)) {
	// 	status = "Completed"
	// }
	if (isWithinInterval(now, { start: startDateTime, end: endDateTime })) {
		status = "Ongoing"
	}

	return {
		id: lecture._id,
		title: lecture.topic,
		instructor: lecture.userId.fullName,
		rating: 4.0,
		time,
		status,
		badge: lecture.examId.name,
		students: ["icons/profile-icon.svg", "icons/profile-icon.svg"] // placeholder
	}
}

export interface TransformedLecture {
	exam: string
	topic: string
	name: string
	status: "upcoming" | "ongoing"
}

export const transformLectureToSimpleData = (
	lecture: RecentTimetableEntry
): TransformedLecture => {
	const startDateTime = parse(
		`${(lecture.lectureId.date as string).split("T")[0]} ${lecture.lectureId.time}`,
		"yyyy-MM-dd hh:mm a",
		new Date()
	)

	const endDateTime = addMinutes(startDateTime, lecture.lectureId.duration)

	let status: "upcoming" | "ongoing" = "upcoming"
	const now = new Date()

	if (isWithinInterval(now, { start: startDateTime, end: endDateTime })) {
		status = "ongoing"
	}

	return {
		exam: lecture.lectureId.examId.name,
		topic: lecture.lectureId.topic,
		name: lecture.lectureId.userId.fullName,
		status
	}
}

export const transformTimetableLecturesToClassEvents = (
	data: LectureTimetableResponse
): ClassEvent => {
	const lecture = data.lecture

	// Parse start datetime
	const startDateTime = parse(
		`${(lecture.date as string).split("T")[0]} ${lecture.time}`,
		"yyyy-MM-dd hh:mm a",
		new Date()
	)

	const endDateTime = addMinutes(startDateTime, lecture.duration)

	const startTime = format(startDateTime, "h:mma").toLowerCase()
	const endTime = format(endDateTime, "h:mma").toLowerCase()
	const day = format(startDateTime, "EEEE")

	const colors = getRandomColorPair()

	return {
		id: lecture._id,
		subject: lecture.subject.toUpperCase(),
		startTime,
		endTime,
		day,
		color: colors.color,
		backgroundColor: colors.backgroundColor,
		location: "Room 101",
		instructor: lecture.teacher,
		description: lecture.topic
	}
}

export const mapLectureToClassCard = (lecture: Lecture): ClassCardProps => {
	let type = "Upcoming"
	if (lecture.completed) type = "Completed"
	else if (lecture.missed) type = "Missed"

	return {
		subject: lecture.subject,
		type,
		date: lecture.date,
		duration: lecture.duration,
		noOfStudents: lecture.maxStudents.toString()
	}
}

export type Roles = "TEACHER" | "STUDENT"
export type LectureStatus = "upcoming" | "missed" | "completed" | "drafts"

export type ResponseSingleType<T> = {
	success: boolean
	message: string
	data: T
}

export type ResponseMultipleType<T> = {
	success: boolean
	message: string
	data: {
		limit: number
		page: number
		total: number
		totalPages: number
		data: T
	}
}

export type MultipleType<T> = {
	total: number
	page: number
	limit: number
	totalPages: number
	data: T
}

export type LectureResponse = {
	_id: string
	examId: {
		_id: string
		name: string
	}
	userId: string
	topic: string
	subject: string
	meetingId: string
	description: string
	date: string | Date
	time: string
	duration: number
	completed: boolean
	missed: boolean
	maxStudents: number
	resources: string[]
	createdAt: string | Date
	updatedAt: string | Date
	__v?: number
}

type StudentDetails = {
	_id: string
	fullName: string
	email: string
	phoneNumber: string
	exam: string
	role: Roles
	status: "active" | "inactive"
	isEmailVerified: boolean
	otpVerifiedForReset: boolean
	createdAt: string
	updatedAt: string
	__v: number
}

type TeacherDoc = {
	name: string
	file_url: string
	_id: string
}

type TeacherDetails = {
	_id: string
	fullName: string
	email: string
	otp: string
	isEmailVerified: boolean
	isApproved: boolean
	role: "TEACHER" | string
	status: "active" | "inactive" | "pending" | string
	docs: TeacherDoc[]
	__v: number
	level: string
	phoneNumber: string
	type: "TRAINING" | string
}

export type StudentAuthResponse = {
	studentDetails: StudentDetails
	token: string
}

export type TeacherAuthResponse = {
	teacherDetails: TeacherDetails
	token: string
}

export type IExam = {
	examImage: string | null
	_id: string
	name: string
	status: "active" | "inactive" | "archived"
	level: string
	createdAt: string | Date
	updatedAt: string | Date
	lectures: Lecture[]
	__v: number
}

type Exam = {
	_id: string
	name: string
	status: string
}

export type IEducationLevel = {
	_id: string
	name: string
	status: string
	code: string
	exams: Exam[]
	levelImage: string
	createdAt: Date
	updatedAt: Date
	__v: number
}

type BaseProfile = {
	_id: string
	fullName: string
	email: string
	phoneNumber: string
	role: "TEACHER" | "STUDENT"
	status: string
	__v: number
	isEmailVerified: boolean
}

export interface TeacherProfile extends BaseProfile {
	otp: string
	isApproved: boolean
	docs: Array<{
		name: string
		file_url: string
		_id: string
	}>
	level: string
	type: string
	role: "TEACHER"
}

type StudentExam = Omit<IExam, "lectures"> & {
	lectureCount: number
}

export interface StudentProfile extends BaseProfile {
	exam: StudentExam
	otpVerifiedForReset: boolean
	createdAt: string
	updatedAt: string
	subscriptionStatus: boolean
	role: "STUDENT"
}

export type StudentLectureResponse = {
	_id: string
	examId: {
		_id: string
		name: string
	}
	topic: string
	subject: string
	meetingId: string
	description: string
	date: string | Date
	time: string
	duration: number
	completed: boolean
	missed: boolean
	maxStudents: number
	resources: string[]
	createdAt: string | Date
	updatedAt: string | Date
	__v?: number
	userId: {
		_id: string
		fullName: string
		email: string
	}
}

export type LectureTimetableResponse = {
	_id: string
	lecture: {
		_id: string
		topic: string
		subject: string
		date: string | Date
		time: string
		duration: number
		teacher: string
	}
}

export type SubscriptionPlanResponse = {
	_id: string
	name: string
	validity: number
	price: string | number
	status: "active" | "inactive" | string
	createdAt: string | Date
	updatedAt: string | Date
	__v?: number
}

export type SubscriptionResponse = {
	authorization_url: string
	access_code: string
	reference: string
}

interface PlanType {
	_id: string
	name: string
	validity: number
	price: string
}

interface SubscriptionHistory {
	_id: string
	student: string
	plan: PlanType
	startDate: string
	expiryDate: string
	status: "active" | "expired" | string
	createdAt: string
	updatedAt: string
	__v: number
}

export type SubscriptionHistoryResponse = SubscriptionHistory[]

export type Lecture = {
	_id: string
	examId: string
	userId: string
	topic: string
	subject: string
	meetingId: string
	description: string
	date: string
	time: string
	duration: number
	completed: boolean
	missed: boolean
	maxStudents: number
	resources: string[]
	createdAt: string
	updatedAt: string
	__v: number
}

export type TeacherDashboardResponse = {
	totalLectures: number
	completedLectures: number
	upcomingLectures: number
	missedLectures: number
	todayLectures: number
	nextLectures: Lecture[]
}

export type RecentTimetableEntry = {
	_id: string
	studentId: string
	lectureId: {
		_id: string
		examId: {
			_id: string
			name: string
		}
		userId: {
			_id: string
			fullName: string
		}
		topic: string
		subject: string
		meetingId: string
		description: string
		date: string
		time: string
		duration: number
		completed: boolean
		missed: boolean
		maxStudents: number
		resources: unknown[]
		createdAt: string
		updatedAt: string
		__v: number
	}
	createdAt: string
	updatedAt: string
	__v: number
}

export type StudentDashboardResponse = {
	totalAvailableClasses: number
	totalAttended: number
	totalTimetable: number
	upcomingLectures: StudentLectureResponse[]
	recentTimetableEntries: RecentTimetableEntry[]
}

export type OnDemandPlans = {
	_id: string
	name: string
	price: number
	durationInHours: number
	description: string
	createdAt: string
	updatedAt: string
	__v: number
}

type ExamType = {
	_id: string
	name: string
}

type Plan = {
	_id: string
	name: string
	price: number
	durationInHours: number
}

export type OnDemandExams = {
	_id: string
	userId: string
	examId: ExamType
	planId: Plan
	status: string
	startDate: string | Date
	endDate: string | Date
	createdAt: string | Date
	updatedAt: string | Date
	lectureCount: number
	__v: number
}

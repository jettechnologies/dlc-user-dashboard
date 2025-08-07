const DLC_BASE_URL = `${process.env.NEXT_PUBLIC_DLC_LIVE_URL}/api`

const authEndpoints = {
	studentSignup: `${DLC_BASE_URL}/student/signup`,
	studentLogin: `${DLC_BASE_URL}/student/login`,
	studentRequestOtp: `${DLC_BASE_URL}/student/request-otp`,
	studentVerifyOtp: `${DLC_BASE_URL}/student/verify-otp`,
	getStudentProfile: `${DLC_BASE_URL}/student/me`,
	teacherSignup: `${DLC_BASE_URL}/teacher/register`,
	teacherLogin: `${DLC_BASE_URL}/teacher/login`,
	teacherRequestOtp: `${DLC_BASE_URL}/teacher/request-otp`,
	teacherVerifyOtp: `${DLC_BASE_URL}/teacher/verify-otp`,
	getTeacherProfile: `${DLC_BASE_URL}/teacher/me`
}

const lectureEndpoints = {
	createLecture: `${DLC_BASE_URL}/lecture/create`,
	startLecture: `${DLC_BASE_URL}/lecture/join`,
	deleteLecture: `${DLC_BASE_URL}/lecture/delete`,
	getUpcomingLectures: `${DLC_BASE_URL}/lecture/upcomings`,
	getTimetableLectures: `${DLC_BASE_URL}/timetable/all`,
	lectureHistory: `${DLC_BASE_URL}/lecture/history`,
	getAllLecture: `${DLC_BASE_URL}/lecture/fetch`,
	getAllUpcomingClasses: `${DLC_BASE_URL}/lecture/upcoming-by-exam`
}

const teacherEndpoints = {
	fetchAllExams: `${DLC_BASE_URL}/teacher/exams`,
	getDashboardStats: `${DLC_BASE_URL}/teacher/dashboard`
}

const studentEndpoints = {
	getUpomingLectures: `${DLC_BASE_URL}/lecture/upcomings`,
	addClassToTimetable: `${DLC_BASE_URL}/timetable/add`,
	getAllTimetableLectures: `${DLC_BASE_URL}/timetable/all`,
	attendLecture: `${DLC_BASE_URL}/lecture/attend`,
	getAttendedClassHistory: `${DLC_BASE_URL}/lecture/history`,
	getDashboardStats: `${DLC_BASE_URL}/student/dashboard`
}

const subscriptionEndpoints = {
	getAllSubscriptions: `${DLC_BASE_URL}/subscription/get-all`,
	initializePayment: `${DLC_BASE_URL}/subscription/payment-url`,
	getSubscriptionHistory: `${DLC_BASE_URL}/subscription/history`
}

const onDemandEndpoints = {
	getAllOndemandPlans: `${DLC_BASE_URL}/ondemand/plans`,
	getAllOndemandExams: `${DLC_BASE_URL}/ondemand/all`,
	addOnDemandExam: `${DLC_BASE_URL}/ondemand/add-ondemand`
}

export const ENDPOINTS = {
	auth: authEndpoints,
	getAllUnGuardedRoutes: {
		getAllLevels: `${DLC_BASE_URL}/level/all-levels`,
		getAllExams: `${DLC_BASE_URL}/exam/all-enitire-exams`
	},

	lecture: lectureEndpoints,
	student: studentEndpoints,
	teacher: teacherEndpoints,
	subscription: subscriptionEndpoints,
	onDemand: onDemandEndpoints,
	contactUs: `${DLC_BASE_URL}/student/submit-contact`
}

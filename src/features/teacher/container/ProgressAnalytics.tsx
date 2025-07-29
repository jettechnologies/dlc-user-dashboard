"use client"

import {
	CourseAnalyticsCardProps,
	CourseAnalyticsGrid,
	StudentReviewGrid,
	StudentReview
} from "../components/progress-analysis"
import TeacherPerformanceChart from "../components/progress-analysis/TeacherPerformanceChart"
import { PageWrapper, TabIndicator, StatsGrid } from "../components/shared"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { Star, Clock, Sigma, ThumbsUp } from "lucide-react"
import { useState } from "react"

type AnalyticsTab = "performance" | "course" | "students"

const statsData = [
	{
		icon: Star,
		value: "4.5",
		title: "Average rating",
		subtitle: "Out of 5.0",
		description: "From 100 reviews",
		iconBg: "bg-blue-500"
	},
	{
		icon: Clock,
		value: "40%",
		title: "Punctuality rate",
		subtitle: "On-time class",
		description: "On-time completion",
		iconBg: "bg-yellow-500"
	},
	{
		icon: ThumbsUp,
		value: "93%",
		title: "Student satisfaction",
		subtitle: "Positive feedback",
		description: "Student feedback",
		iconBg: "bg-purple-500"
	},
	{
		icon: Sigma,
		value: "200",
		title: "Total students",
		subtitle: "Active learners",
		description: "Active learners",
		iconBg: "bg-violet-600"
	}
]

const courseStats: CourseAnalyticsCardProps[] = [
	{
		title: "neco",
		noOFStudents: 100,
		courseRating: 4.5
	},
	{
		title: "jamb",
		noOFStudents: 100,
		courseRating: 3.5
	},
	{
		title: "waec",
		noOFStudents: 30,
		courseRating: 2.5
	},
	{
		title: "ijamb",
		noOFStudents: 100,
		courseRating: 1.5
	}
]

const reviews: StudentReview[] = [
	{
		fullName: "Mary Johnson",
		rating: 4.5,
		examName: "Mathematics Final",
		comments: "Great performance with room for improvement."
	},
	{
		fullName: "Ahmed Musa",
		rating: 3.8,
		examName: "English Literature",
		comments: "Good effort, needs better time management."
	},
	{
		fullName: "Chen Wei",
		rating: 5.0,
		examName: "Physics Olympiad",
		comments: "Outstanding comprehension and application."
	},
	{
		fullName: "Amina Yusuf",
		rating: 4.2,
		examName: "Biology Midterm"
	}
]

const ProgressAnalytics = () => {
	const [activeTab, setActiveTab] = useState<AnalyticsTab>("performance")
	return (
		<PageWrapper className="space-y-5">
			<div className="w-full font-poppins">
				<h3 className="font-semibold text-2xl text-black">
					Progress Analytics
				</h3>
			</div>
			<div className="w-full bg-white mx-auto p-6">
				<div className="w-full  pb-3 border-b border-gray-200 flex justify-between">
					<div className="space-y-3">
						<h4 className="font-poppins font-medium text-[18px] text-black">
							Teaching Time
						</h4>
						<p className="font-poppins font-medium text-[14px] text-black">
							Here is an overview of your teaching time
						</p>
					</div>
					<div className="w-[95px]">
						<Select defaultValue="year">
							<SelectTrigger className="w-full bg-white">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="year">Year</SelectItem>
								<SelectItem value="month">Month</SelectItem>
								<SelectItem value="weekly">Weekly</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="mt-6 w-full mb-12">
					<StatsGrid statsData={statsData} />
				</div>
				<TabIndicator
					activeTab={activeTab}
					setActiveTab={(tab) => setActiveTab(tab)}
					tabs={["performance", "course", "students"]}
					tabLabels={{
						performance: "Performance Trend",
						course: "Course analytics",
						students: "Student reviews"
					}}
				/>

				<div className="w-full mt-12">
					{activeTab === "performance" ? (
						<TeacherPerformanceChart />
					) : activeTab === "course" ? (
						<CourseAnalyticsGrid courseAnalytics={courseStats} />
					) : (
						<StudentReviewGrid reviews={reviews} />
					)}
				</div>
			</div>
		</PageWrapper>
	)
}

export default ProgressAnalytics

"use client"

import { SignupProps } from "../../containers/auth"
import { StudentForm } from "./StudentForm"
import { TeacherForm } from "./TeacherForm"
import { VerificationContainer } from "./VerificationContainer"
import { TabIndicator } from "@/features/teacher/components/shared"
import { useUiComponentStore } from "@/utils/lib/query-store"
import { useState } from "react"

type RegisterTab = "student" | "teacher"
const registerRole = ["student", "teacher"] as RegisterTab[]

export const SignupForm = ({ examOptions }: SignupProps) => {
	const [activeTab, setActiveTab] = useState<RegisterTab>("student")
	const { store } = useUiComponentStore()

	return (
		<div className="grid min-h-[300px] w-full max-w-[554px]  place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
			<div className="w-fit px-3">
				<h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
					Register
				</h3>

				<div className="w-full md:min-w-[370px] mt-[45px] ">
					<p className="font-poppins text-center text-sm font-normal text-black">
						Select role
					</p>
					<div className="w-full h-[40px] bg-white mt-4  rounded-[100px] overflow-clip">
						<TabIndicator
							activeTab={activeTab}
							setActiveTab={(tab) => setActiveTab(tab)}
							tabs={registerRole}
							tabLabels={{
								student: "Student",
								teacher: "Teacher"
							}}
							className="w-full bg-transparent p-0 h-full"
							tabButtonClassName="h-full rounded-[100px] w-1/2"
						/>
					</div>
				</div>
				<div className="w-full min-h-[300px] ">
					{activeTab === "student" ? (
						<StudentForm examOptions={examOptions} />
					) : store !== "email-verifed" ? (
						<VerificationContainer />
					) : (
						<TeacherForm />
					)}
				</div>
			</div>
		</div>
	)
}

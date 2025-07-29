import { ScheduleForm } from "../components"
import { PageWrapper } from "../components/shared"

export const ScheduleClass = () => {
	return (
		<PageWrapper>
			<div className="w-full font-poppins">
				<h3 className="font-semibold text-2xl text-black">Schedule a Class</h3>
				<p className="font-normal text-xs text-black ">
					Create a new class session for your students.
				</p>
			</div>
			<div className="w-full bg-white min-h-[600px] py-[20px] px-[30px]">
				<div className="max-w-[925px] w-full h-full">
					<h4 className="text-2xl font-poppins text-black font-semibold">
						Enter Class details
					</h4>
					<div className="w-full mt-10">
						<ScheduleForm />
					</div>
				</div>
			</div>
		</PageWrapper>
	)
}

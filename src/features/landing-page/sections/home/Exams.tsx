import { ExamsContainer } from "../../components"
import { exams } from "../../data"

export const Exams = () => {
	return (
		<section className="w-full min-h-screen main-bg-gradient-two grid place-items-center py-6">
			<div className="bg-dlc-blue max-w-[1280px] w-[90dvw] min-h-[580px] flex flex-wrap justify-between lg:justify-center lg:items-center gap-y-4 lg:gap-[40px] rounded-[10px] py-6 px-2">
				{exams.map((exam, index) => (
					<div className="w-[48%] flex justify-center lg:w-[214px]" key={index}>
						<ExamsContainer exam={exam} />
					</div>
				))}
			</div>
		</section>
	)
}

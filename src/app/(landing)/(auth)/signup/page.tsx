import { Signup } from "@/features/landing-page/containers/auth"
import { fetchAllExams } from "@/services/queries"
import { IExam } from "@/types/response-type"
import { createExamOptions } from "@/utils/constants"

const Page = async () => {
	const exams = await fetchAllExams()
	console.log(exams, "exams")
	if (!exams.success && exams.data === null)
		return <div>Something went wrong</div>

	const examData = exams.data as IExam[]
	const examOptions = createExamOptions(examData)

	return (
		<div>
			<Signup examOptions={examOptions} />
		</div>
	)
}

export default Page

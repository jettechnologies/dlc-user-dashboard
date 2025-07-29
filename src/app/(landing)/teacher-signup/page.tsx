import { TeacherSignup } from "@/features/landing-page/containers/auth"
import { fetchAllLevels } from "@/services/queries"
import { IEducationLevel } from "@/types/response-type"

export default async function Page() {
	const { data, success } = await fetchAllLevels()
	if (!success || data === null) return <div>Something went wrong</div>

	const levelData = data as IEducationLevel[]

	return <TeacherSignup levelData={levelData} />
}

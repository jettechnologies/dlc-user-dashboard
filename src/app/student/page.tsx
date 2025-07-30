import { DashboardScreen } from "@/features/student/screens/dashboard"

export const dynamic = "force-dynamic"

interface DashboardPageProps {
	searchParams: Promise<{
		status?: "error" | "success" | "unpaid"
	}>
}

export default async function page({ searchParams }: DashboardPageProps) {
	const { status } = await searchParams

	return <DashboardScreen paymentStatus={status} />
}

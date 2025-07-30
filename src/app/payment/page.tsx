import { redirect } from "next/navigation"

interface PaymentPageProps {
	searchParams: Promise<{
		trxref?: string
		reference?: string
	}>
}
export default async function page({ searchParams }: PaymentPageProps) {
	const { trxref, reference } = await searchParams

	if (!trxref || !reference) {
		redirect("/student?status=error")
	}
	redirect(`/student?status=success`)
}

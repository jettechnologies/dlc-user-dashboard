import { DocumentCard } from "./DocumentCard"

const recentDocuments = [
	{
		title: "Neco",
		subtitle: "Mathematics - Fraction.pdf",
		time: "2hr ago"
	},
	{
		title: "Neco",
		subtitle: "Mathematics - Fraction.pdf",
		time: "4hr ago"
	},
	{
		title: "Neco",
		subtitle: "Mathematics - Fraction.pdf",
		time: "6hr ago"
	}
]

export function RecentDocuments() {
	return (
		<div className="bg-white rounded-lg p-6 shadow-sm">
			<h2 className="text-lg font-semibold text-gray-900 mb-4">
				Recent Documents
			</h2>

			<div className="space-y-4">
				{recentDocuments.map((doc, index) => (
					<DocumentCard key={index} {...doc} />
				))}
			</div>
		</div>
	)
}

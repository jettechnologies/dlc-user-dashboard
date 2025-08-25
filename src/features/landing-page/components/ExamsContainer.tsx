import Balancer from "react-wrap-balancer"

const playfulColors = [
	"#FFB6C1", // Light Pink
	"#FFD580", // Soft Orange
	"#87CEFA", // Sky Blue
	"#98FB98", // Mint Green
	"#DDA0DD", // Plum Purple
	"#F5DEB3", // Wheat
	"#FF69B4", // Hot Pink
	"#40E0D0", // Turquoise
	"#FFA07A", // Light Salmon
	"#BA55D3" // Medium Orchid
]

export const ExamsContainer = ({
	exam,
	index
}: {
	exam: string
	index: number
}) => {
	const bgColor = playfulColors[index % playfulColors.length]

	return (
		<div
			className="max-w-[240px] w-full h-[150px] bg-[#f6f6f6] rounded-[20px] p-6"
			style={{ backgroundColor: bgColor }}
		>
			<div className="flex flex-col justify-center h-full">
				<p className="font-poppins font-semibold text-base lg:text-2xl text-black capitalize text-center">
					<Balancer>{exam}</Balancer>
				</p>
			</div>
		</div>
	)
}

import Balancer from "react-wrap-balancer"

export const ExamsContainer = ({ exam }: { exam: string }) => {
	return (
		<div className="max-w-[240px] w-full h-[150px] bg-[#f6f6f6] rounded-[20px] p-6">
			<div className="flex flex-col justify-center h-full">
				<p className="font-poppins font-semibold text-base lg:text-2xl text-black capitalize text-center">
					<Balancer>{exam}</Balancer>
				</p>
			</div>
		</div>
	)
}

import Balancer from "react-wrap-balancer"

export const ExamsContainer = ({ exam }: { exam: string }) => {
	return (
		<div className="max-w-[240px] w-full min-h-[258px] h-full bg-[#f6f6f6] rounded-[20px] p-6">
			<div className="flex flex-col justify-between h-full">
				<p className="font-poppins font-semibold text-base lg:text-2xl text-black capitalize text-center">
					<Balancer>{exam}</Balancer>
				</p>
				<div className="w-full flex justify-center">
					<button
						type="button"
						className="w-[145px] h-[48px] rounded-[100px] text-white font-semibold text-sm bg-dlc-blue shadow-md"
					>
						Join
					</button>
				</div>
			</div>
		</div>
	)
}

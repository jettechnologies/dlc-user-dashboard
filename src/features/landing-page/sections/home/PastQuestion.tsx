import Image from "next/image"
import Balancer from "react-wrap-balancer"

export const PastQuestion = () => {
	return (
		<section className="w-full min-h-[80vh] flex flex-col lg:flex-row font-poppins main-bg-gradient">
			<div className="flex-1 min-h-full grid place-items-center px-6 lg:px-0">
				<div className="flex flex-col gap-y-4 max-w-[570px]">
					<h3 className="font-medium lg:font-semibold text-2xl lg:text-4xl text-black ">
						<Balancer>
							Engaging
							<span className="text-light-blue mr-2"> Live </span> Classes
						</Balancer>
					</h3>
					<p className="font-normal text-sm lg:text-base">
						<Balancer>
							Students join interactive live classes anytime, anyday.
						</Balancer>
					</p>
				</div>
			</div>
			<div className="flex-1 max-h-fit lg:min-h-full grid place-items-center">
				<Image
					src="/images/seat-img.png"
					width={500}
					height={500}
					alt="seat image"
				/>
			</div>
		</section>
	)
}

import StarRating from "@/features/student/components/StarRating"

export interface StudentReview {
	fullName: string
	rating: number
	examName: string
	comments?: string
}

const StudentReviewCard = ({
	fullName,
	rating,
	examName,
	comments
}: StudentReview) => {
	const [firstName, lastName] = fullName.split(" ")
	const nameAbbr = `${firstName[0]}.${lastName[0]}`
	return (
		<div className="w-full h-[126px] rounded-[8px] bg-white px-[40px] py-5 drop-shadow-xl">
			<div className="h-full w-full flex flex-col justify-between">
				<div>
					<div className="flex space-x-3">
						<h3 className="font-poppins font-medium text-xl text-black uppercase">
							{nameAbbr || "j.t"}
						</h3>
						<StarRating rating={rating} />
					</div>
					<small className="font-poppins font-normal text-xs text-black">
						{examName}
					</small>
				</div>
				{comments && (
					<p className="font-poppins font-normal text-sm text-black">
						&quot;{comments}&quot;
					</p>
				)}
			</div>
		</div>
	)
}

export const StudentReviewGrid = ({
	reviews
}: {
	reviews: StudentReview[]
}) => {
	return (
		<div className="w-full">
			<div className="w-fit space-y-2">
				<h3 className="font-poppins font-semibold text-[18px] text-black">
					Students Review
				</h3>
				<p className="font-poppins text-sm text-black font-normal">
					Here is an overview of how your students rate you
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 mt-8">
				{reviews.map((review, index) => (
					<StudentReviewCard
						key={index}
						fullName={review.fullName}
						rating={review.rating}
						examName={review.examName}
						comments={review.comments}
					/>
				))}
			</div>
		</div>
	)
}

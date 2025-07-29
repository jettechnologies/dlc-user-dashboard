import { SignupForm } from "../../sections/auth"
import { Option } from "@/components/shared/form"

export interface SignupProps {
	examOptions: Option[]
}

export const Signup = ({ examOptions }: SignupProps) => {
	return (
		<div className="w-full h-full flex justify-end">
			<SignupForm examOptions={examOptions} />
		</div>
	)
}

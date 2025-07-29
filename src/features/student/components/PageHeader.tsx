import React from "react"

export default function PageHeaderText({ children }: React.PropsWithChildren) {
	return (
		<h1 className="font-poppins text-xl md:text-2xl font-semibold text-gray-900 mb-8">
			{children}
		</h1>
	)
}

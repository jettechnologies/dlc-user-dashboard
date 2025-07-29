"use client"

import { ReactSVG } from "react-svg"

export const ReactSvgIcon = ({ name }: { name: string }) => {
	return <ReactSVG src={`/icons/${name}.svg`} />
}

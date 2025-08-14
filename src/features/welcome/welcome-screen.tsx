"use client"

import { ScreenOne, ScreenTwo } from "./component"
import { useUiComponentStore } from "@/utils/lib/query-store"
import { useEffect } from "react"

export const WelcomeScreen = () => {
	const { store, updateUiStore } = useUiComponentStore()

	useEffect(() => {
		updateUiStore("screen-one")
	}, [updateUiStore])

	return (
		<div className="w-full min-h-screen bg-dlc-brand-yellow grid place-items-center py-[2.5rem]">
			{store === "screen-one" ? <ScreenOne /> : <ScreenTwo />}
		</div>
	)
}

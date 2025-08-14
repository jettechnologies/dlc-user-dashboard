import { useQueryStates, createParser } from "nuqs"

export type UiComponents =
	| "teacher-credentials"
	| "teacher-exams"
	| "email-verifed"
	| "screen-one"
	| "screen-two"
	| ""

const uiComponentParser = createParser({
	parse: (value: string) => {
		if (value) return value as UiComponents
		return null
	},
	serialize: (value: UiComponents) => value
})

export const useUiComponentStore = () => {
	const [uiStore, setUiComponent] = useQueryStates(
		{
			ui: uiComponentParser.withDefault("")
		},
		{
			shallow: false
		}
	)

	return {
		store: uiStore.ui,
		updateUiStore: (value: UiComponents) => setUiComponent({ ui: value })
	}
}

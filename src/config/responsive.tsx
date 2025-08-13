import { useSafeMediaQuery } from "@/hooks"

export const useIsMobile = () =>
	useSafeMediaQuery({ settings: { query: "(max-width: 576px)" } })
export const useIsTablet = () =>
	useSafeMediaQuery({
		settings: { query: "(min-width: 577px) and (max-width: 992px)" }
	})
export const useIsTabletOrMobile = () =>
	useSafeMediaQuery({ settings: { query: "(max-width: 992px)" } })
export const useIsDesktop = () =>
	useSafeMediaQuery({ settings: { query: "(min-width: 993px)" } })

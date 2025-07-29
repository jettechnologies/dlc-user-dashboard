import { Footer, Header } from "@/features/landing-page/components"

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-screen min-h-screen font-poppins">
			<Header />
			<main className="w-full min-h-screen">{children}</main>
			<Footer />
		</div>
	)
}

export default Layout

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section
			className="w-full min-h-[1024px] p-[2rem] lg:p-[4rem] bg-light-yellow bg-cover bg-center"
			style={{
				backgroundImage: "var(--auth-bg)",
				backgroundRepeat: "no-repeat"
			}}
		>
			{children}
		</section>
	)
}

export default Layout

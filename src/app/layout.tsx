import "./globals.css"
import { Providers } from "@/providers"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { NuqsAdapter } from "nuqs/adapters/next/app"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Next.js Boilerplate",
	description: "Next.js Boilerplate"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="light" style={{ colorScheme: "light" }}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<NuqsAdapter>
					<Providers>
						<main>{children}</main>
					</Providers>
				</NuqsAdapter>
			</body>
		</html>
	)
}

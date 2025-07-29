import type { NextConfig } from "next"

const nextConfig: NextConfig = {}

export default nextConfig

// turbopack: {
// 	resolveAlias: {
// 		"@/features/containers": path.join(
// 			__dirname,
// 			"src/features/*/containers"
// 		),
// 		"@/features/components": path.join(__dirname, "src/features/*/components")
// 	}
// },
// webpack: (config) => {
// 	config.resolve.alias = {
// 		...config.resolve.alias,
// 		"@/features/containers": path.resolve(
// 			__dirname,
// 			"src/features/*/containers"
// 		),
// 		"@/features/components": path.resolve(
// 			__dirname,
// 			"src/features/*/components"
// 		)
// 	}
// 	return config
// }

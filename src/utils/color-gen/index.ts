const subjectColorMap: Record<string, string> = {}

export function getColorForSubject(subject: string): string {
	if (subjectColorMap[subject]) return subjectColorMap[subject]

	// Basic string hash
	let hash = 0
	for (let i = 0; i < subject.length; i++) {
		hash = subject.charCodeAt(i) + ((hash << 5) - hash)
	}

	const hue = Math.abs(hash % 360)
	const saturation = 65 + (Math.abs(hash) % 10) // 65–74%
	const lightness = 75 + (Math.abs(hash) % 5) // 75–79%

	const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
	subjectColorMap[subject] = color

	return color
}

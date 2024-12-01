export function isComplete(layout: number[][]) {
	const flatLayout = layout.flat();

	for (let i = 0; i < flatLayout.length; i++) {
		if (flatLayout[i] != i) return false;
	}

	return true;
}

export const PUZZLES: {
	[day: number]: {
		image: string;
		layout: number[][];
		caption: string;
	};
} = {
	1: {
		image: 'images/01.jpg',
		layout: [
			[4, 0, 5],
			[2, 7, 6],
			[3, 1, 8]
		],
		caption: 'Miau! Und so beginnt die Adventszeit.'
	},
	2: {
		image: 'images/02.jpg',
		layout: [
			[0, 9, 7, 2],
			[5, 8, 10, 4],
			[3, 6, 1, 11]
		],
		caption: 'Zweimal miau für das zweite Türchen.'
	},
	3: {
		image: 'images/03.jpg',
		layout: [
			[5, 0, 4, 2],
			[1, 6, 3, 7]
		],
		caption: 'Heute etwas einfacher!'
	}
};

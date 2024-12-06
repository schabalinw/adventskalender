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
	},
	4: {
		image: 'images/04.jpg',
		layout: [
			[5, 4, 3],
			[9, 1, 2],
			[10, 0, 7],
			[8, 6, 11]
		],
		caption: 'Super! P.S. Ist das Molly oder Frida?'
	},
	5: {
		image: 'images/05.jpg',
		layout: [
			[5, 3, 6],
			[7, 0, 4],
			[1, 2, 8]
		],
		caption: 'Und rechtzeitig schlafen gehen!'
	},
	6: {
		image: 'images/06.jpg',
		layout: [
			[1, 8, 6, 14],
			[3, 12, 2, 10],
			[0, 4, 11, 5],
			[9, 7, 13, 15]
		],
		caption: 'Kleiner Tipp: Nicht bei Bastet nachmachen!'
	},
	7: {
		image: 'images/07.jpg',
		layout: [
			[5, 4, 3],
			[9, 1, 2],
			[10, 0, 7],
			[8, 6, 11]
		],
		caption: 'Bastet schläft auch mit Augen auf.'
	},
	8: {
		image: 'images/08.jpg',
		layout: [
			[5, 3, 6],
			[7, 0, 4],
			[1, 2, 8]
		],
		caption: 'Einen schönen Zweiten Advent!'
	},
	9: {
		image: 'images/09.jpg',
		layout: [
			[1, 8, 6, 14],
			[3, 12, 2, 10],
			[0, 4, 11, 5],
			[9, 7, 13, 15]
		],
		caption: 'Och nö, Montag...'
	}
};

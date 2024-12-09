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
	// should have been 3x4 dimensions...
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
	},
	10: {
		image: 'images/10.jpg',
		layout: [
			[5, 4, 3],
			[9, 1, 2],
			[10, 0, 7],
			[8, 6, 11]
		],
		caption: 'Krieg ich was zu essen, bitte bitte?'
	},
	11: {
		image: 'images/11.jpg',
		layout: [
			[5, 3, 6],
			[7, 0, 4],
			[1, 2, 8]
		],
		caption: 'Bastet bekommt mal wieder einen Korb in der Küche. Ihre Reaktion:'
	},
	12: {
		image: 'images/12.jpg',
		layout: [
			[9, 1, 8, 5],
			[4, 7, 18, 11],
			[17, 10, 14, 6],
			[12, 3, 15, 2],
			[13, 0, 16, 19]
		],
		caption: 'Zwiebeln schneiden.'
	},
	13: {
		image: 'images/13.jpg',
		layout: [
			[1, 8, 6, 14],
			[3, 12, 2, 10],
			[0, 4, 11, 5],
			[9, 7, 13, 15]
		],
		caption: 'Bastets Dreifaltigkeit des Seins: Fressen, Schlafen und die Sonne.'
	},
	14: {
		image: 'images/14.jpg',
		layout: [
			[0, 9, 7, 2],
			[5, 8, 10, 4],
			[3, 6, 1, 11]
		],
		caption: 'Yippie! Wieder Wochenende!'
	},
	15: {
		image: 'images/15.jpg',
		layout: [
			[0, 9, 7, 2],
			[5, 8, 10, 4],
			[3, 6, 1, 11]
		],
		caption: 'Bastet verschläft wider allen Erwartens den Dritten Advent.'
	},
	16: {
		image: 'images/16.jpg',
		layout: [
			[1, 8, 6, 14],
			[3, 12, 2, 10],
			[0, 4, 11, 5],
			[9, 7, 13, 15]
		],
		caption: 'Letzte Woche vor den Ferien!'
	},
	17: {
		image: 'images/17.jpg',
		layout: [
			[5, 4, 3],
			[9, 1, 2],
			[10, 0, 7],
			[8, 6, 11]
		],
		caption:
			'Spoiler: Dies ist der Höhepunkt der in diesem Kalender ersichtlichen körperlichen Aktivität von Bastet.'
	}
};

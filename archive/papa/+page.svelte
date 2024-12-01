<script>
	import { today } from '$lib';

	const chineseNumbers = [
		{ number: 1, character: '一', pinyin: 'yī' },
		{ number: 2, character: '二', pinyin: 'èr' },
		{ number: 3, character: '三', pinyin: 'sān' },
		{ number: 4, character: '四', pinyin: 'sì' },
		{ number: 5, character: '五', pinyin: 'wǔ' },
		{ number: 6, character: '六', pinyin: 'liù' },
		{ number: 7, character: '七', pinyin: 'qī' },
		{ number: 8, character: '八', pinyin: 'bā' },
		{ number: 9, character: '九', pinyin: 'jiǔ' },
		{ number: 10, character: '十', pinyin: 'shí' },
		{ number: 11, character: '十一', pinyin: 'shí yī' },
		{ number: 12, character: '十二', pinyin: 'shí èr' },
		{ number: 13, character: '十三', pinyin: 'shí sān' },
		{ number: 14, character: '十四', pinyin: 'shí sì' },
		{ number: 15, character: '十五', pinyin: 'shí wǔ' },
		{ number: 16, character: '十六', pinyin: 'shí liù' },
		{ number: 17, character: '十七', pinyin: 'shí qī' },
		{ number: 18, character: '十八', pinyin: 'shí bā' },
		{ number: 19, character: '十九', pinyin: 'shí jiǔ' },
		{ number: 20, character: '二十', pinyin: 'èr shí' },
		{ number: 21, character: '二十一', pinyin: 'èr shí yī' },
		{ number: 22, character: '二十二', pinyin: 'èr shí èr' },
		{ number: 23, character: '二十三', pinyin: 'èr shí sān' },
		{ number: 24, character: '二十四', pinyin: 'èr shí sì' }
	];
</script>

<div class="calendar">
	<h1>帕皮克的日曆</h1>

	<div class="divider"></div>

	<div class="calendar-item-container">
		{#each Array.from({ length: 24 }, (_, i) => i) as day}
			{@const completed = day < 3}

			<button class="calendar-item" class:completed disabled={day + 1 > $today.getDate()}>
				<div class="character">
					{chineseNumbers[day].character}
				</div>

				<div class="pinyin">{chineseNumbers[day].pinyin}</div>

				{#if completed}
					<div
						class="photo"
						style="background-image: url('images/bastet/{String(day + 1).padStart(
							2,
							'0'
						)}.jpg'); rotate: {5 + (day % 5) * 5 * (day % 2 == 0 ? -1 : 1)}deg;"
					></div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.calendar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Noto Serif Hong Kong';
		/* background: url('images/paper.jpg'); */
		background-size: 1000px 1000px;
		height: 100vh;
		overflow: hidden;
		background-color: #ff922c;
		color: #312418;
	}

	h1 {
		font-size: 5em;
		font-weight: bold;
		letter-spacing: -0.05em;
		padding: 100px;
		writing-mode: vertical-lr;
		position: sticky;
		height: fit-content;
		top: 0;
		height: 100%;
		background-color: #312418;
		color: #ff922c;
		/* background: linear-gradient(to top right, rgb(243, 138, 40), transparent); */
	}

	@media screen and (max-width: 800px) {
		h1 {
			padding: 100px 30px;
		}
	}

	.divider {
		border-left: 3px solid #db7a1f;
		border-right: 10px solid #312418;
		height: 100%;
	}

	.calendar-item-container {
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		grid-template-columns: repeat(8, 1fr);
		gap: 10px;
		padding: 50px 0;
		height: 100%;
		overflow-y: scroll;
	}

	.calendar-item {
		width: 200px;
		height: 200px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		align-items: center;
		justify-content: center;
		font-size: 1.3em;
		background-color: rgb(243, 138, 40);
		outline: 2px solid rgb(219, 122, 31);
		cursor: pointer;
		transition-duration: 0.2s;
		transition-property: scale, outline;
		outline-offset: -2px;
		position: relative;
	}

	.calendar-item:hover {
		scale: 0.8;
		outline-width: 15px;
		outline-offset: -5px;
	}

	.character {
		font-weight: bold;
		font-size: 2.5em;
	}

	.calendar-item:disabled {
		outline-style: dashed;
		pointer-events: none;
		background-color: transparent;
		color: rgb(148, 84, 25);
	}

	.calendar-item.completed {
		justify-content: flex-start;
		padding-top: 20px;
	}

	.calendar-item.completed .character,
	.calendar-item.completed .pinyin {
		margin-right: 80px;
	}

	.photo {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 50%;
		height: 50%;
		background-size: cover;
		border: 3px solid rgb(233, 233, 233);
		rotate: 10deg;
		box-shadow: 0 5px 1cqw rgba(0, 0, 0, 0.222);
	}
</style>

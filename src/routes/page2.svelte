<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Snowflake from './Snowflake.svelte';
	import Puzzle from './Puzzle2.svelte';
	import { contentData } from '$lib/data';

	const DAYS = [
		7, 14, 9, 23, 15, 2, 20, 3, 12, 17, 19, 5, 11, 24, 8, 18, 4, 21, 6, 13, 10, 1, 16, 22
	];

	const PUZZLES: {
		[key: number]: { image: string; size: number };
	} = {
		1: {
			image: 'images/bastet.jpg',
			size: 3
		}
	};

	let snowflakeContainerWidth: number = $state(0);

	let today = new Date(2024, 11, 1);

	let shownDay = $state(0);

	let puzzleView = $derived(shownDay != 0);
	let snowflakeCount = $derived(snowflakeContainerWidth > 1000 ? 20 : 10);

	function showPuzzle(day: number) {
		shownDay = day;
	}

	function hidePuzzle() {
		shownDay = 0;
		console.log('fghdslg');
	}
</script>

<div class="calendar" class:puzzle-view={shownDay != 0}>
	{#if !puzzleView}
		<h1 class="calendar-title" in:fly={{ duration: 200, y: 30 }}>
			<span>Kleiner</span><br />
			Adventskalender
		</h1>
	{:else}
		<h1 class="day-title" in:fly={{ duration: 200, y: 30 }}>
			{shownDay}. Türchen
		</h1>
	{/if}

	<div class="calendar-day-container" class:puzzle-view={shownDay != 0}>
		{#each DAYS as day}
			{@const locked = day > today.getDate()}

			{#if shownDay == 0 || shownDay == day}
				<div class="day" class:locked style="animation-delay: {day * 10}ms;">
					<div class="info-bubble" class:locked>
						{#if locked}
							Noch ist es zu früh!
						{:else}
							Zum Öffnen klicken!
						{/if}
					</div>

					{#key puzzleView}
						<div class="hidden-content" in:fly={{ duration: 300, y: 30 }}>
							{#if !locked}
								<button class="puzzle-wrapper" onclick={() => showPuzzle(day)}>
									<Puzzle
										{...PUZZLES[day]}
										tileSize={day == shownDay ? 100 : 30}
										preview={shownDay != day}
									/>
								</button>
							{/if}
						</div>
					{/key}

					<div class="door-wrapper">
						<div class="door type-{(day % 4) + 1}" class:won={$contentData[day]}>{day}</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>

	{#if puzzleView}
		<button onclick={hidePuzzle} class="back-button" in:fly={{ duration: 500, y: 60 }}
			>Zurück zum Kalender</button
		>
	{/if}

	{#if !puzzleView}
		<div
			class="snowflake-container"
			bind:offsetWidth={snowflakeContainerWidth}
			in:fade={{ duration: 200 }}
		>
			{#each [...Array(snowflakeCount).keys()] as i}
				<Snowflake
					lifeTime={5000}
					size={1.0 - 0.2 * (i % 3)}
					speed={1.0}
					x={(100.0 / snowflakeCount) * i}
					fallOffset={(i % 3) * 1500 + i * 200}
					waveOffset={100.0 * i}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	.calendar {
		font-family: 'Staatliches';
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px;
		color: #fff;
		background-color: #0888a5;
		min-height: 100vh;
		transition: background-color 200ms;
	}

	.calendar.puzzle-view {
		background-color: #101726;
	}

	.snowflake-container {
		position: fixed;
		pointer-events: none;
		overflow: hidden;
		inset: 0;
		mix-blend-mode: normal;
	}

	.calendar-title {
		font-size: 50px;
		line-height: 40px;
		margin-bottom: 50px;
		text-align: center;
	}

	.calendar-title > span {
		font-size: 20px;
		color: #bcf4ff;
	}

	@media screen and (max-width: 600px) {
		.calendar-title {
			font-size: 40px;
		}
	}

	.calendar-day-container {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(6, 1fr);
	}

	@media screen and (max-width: 900px) {
		.calendar-day-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media screen and (max-width: 700px) {
		.calendar-day-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (max-width: 500px) {
		.calendar-day-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.day {
		width: 120px;
		height: 120px;
		position: relative;
		/* perspective: 700px; */
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s;
		animation: fly-in 400ms backwards;
	}

	@keyframes fly-in {
		from {
			translate: 0 10px;
			opacity: 0;
			scale: 0.9;
		}
		to {
			opacity: 1;
			translate: 0;
			scale: 1;
		}
	}

	.door-wrapper {
		perspective: 700px;
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.door {
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
		transform-origin: left center;
		transition-property: transform;
		transition-duration: 0.5s;
		padding: 10px 20px;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-weight: 900;
		font-size: 35px;
		backface-visibility: hidden;
	}

	.door.type-1 {
		color: #0a2760;
		background-image: linear-gradient(to top, #0c2f74 7px, #00b1d9 7px);
	}

	.door.type-2 {
		color: #0e347f;
		background-image: linear-gradient(to top, #67e3ff 7px, #3cbcd9 7px);
	}

	.door.type-3 {
		color: #00b1d9;
		background-image: linear-gradient(to top, #0c2f74 7px, #bcf4ff 7px);
	}

	.door.type-4 {
		background-image: linear-gradient(to top, #bcf4ff 7px, #67e3ff 7px);
		color: #0e347f;
	}

	.door.won {
		background-image: linear-gradient(to top, #3cbcd9 7px, #0c2f74 7px);
		color: #3cbcd9;
	}

	.door::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: #1a2849;
		backface-visibility: hidden;
		transform: rotateY(-180deg);
	}

	.day:hover .door {
		transform: rotateY(-140deg);
	}

	.day.locked:hover .door {
		transform: rotateY(-30deg);
	}

	.info-bubble {
		position: absolute;
		bottom: calc(100% - 40px);
		text-align: center;
		scale: 0;
		width: 150%;
		border-radius: 7px;
		background-color: #101726;
		padding: 10px 10px;
		pointer-events: none;
		font-size: 14px;
		transition-property: bottom, scale;
		transition-duration: 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-bubble::before {
		content: '';
		position: absolute;
		bottom: -9px;
		border-top: 10px solid #101726;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	}

	.info-bubble.locked {
		background-color: #e4700a;
	}

	.info-bubble.locked::before {
		border-top: 10px solid #e4700a;
	}

	.day:has(:global(.info-bubble)):hover .info-bubble {
		bottom: calc(100% + 20px);
		scale: 1;
		transition-delay: 150ms;
	}

	.hidden-content {
		width: 100%;
		height: 100%;
		font-size: 20px;
		background-color: #101726;
		padding: 10px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.puzzle-wrapper {
		cursor: pointer;
	}

	/* .calendar-day-container:has(:global(.day:not(.locked):hover)) .day:not(:hover) {
		opacity: 0.5;
	} */

	.calendar-day-container.puzzle-view {
		display: flex;
	}

	.calendar-day-container.puzzle-view .day {
		width: auto;
		height: auto;
		z-index: 30;
	}

	.calendar-day-container.puzzle-view .day {
		width: auto;
		height: auto;
	}

	.calendar-day-container.puzzle-view .hidden-content {
		padding: 0;
	}

	.calendar-day-container.puzzle-view .door-wrapper,
	.calendar-day-container.puzzle-view .info-bubble {
		display: none;
	}

	.day-title {
		margin-top: 50px;
		font-size: 50px;
		margin-bottom: 50px;
	}

	.back-button {
		background-color: #0e347f;
		border-bottom: 5px solid #00b1d9;
		color: #fff;
		padding: 10px 25px;
		margin-top: 50px;
		cursor: pointer;
		font-size: 20px;
	}
</style>

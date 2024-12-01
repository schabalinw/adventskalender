<script lang="ts">
	import '../app.css';
	import { fly, slide } from 'svelte/transition';
	import Puzzle from './Puzzle.svelte';
	import type { PuzzleProps } from './Puzzle.svelte';
	import Snowflake from './Snowflake.svelte';
	import { isComplete } from '$lib';
	import { onMount } from 'svelte';

	const DAYS = [
		7, 14, 9, 23, 15, 2, 20, 3, 12, 17, 19, 5, 11, 24, 8, 18, 4, 21, 6, 13, 10, 1, 16, 22
	];

	const PUZZLES: { [day: number]: PuzzleProps } = {
		1: {
			image: 'images/bastet.jpg',
			layout: [
				[4, 0, 5],
				[2, 7, 6],
				[3, 1, 8]
			]
		}
	};

	const MESSAGES: { [day: number]: string } = {
		1: 'Miau! Und so beginnt die Adventszeit.'
	};

	let puzzleData: { [day: number]: PuzzleProps } = $state(structuredClone(PUZZLES));

	let viewportWidth: number = $state(0);
	let shownDay: number = $state(0);

	let snowflakeCount = $derived(viewportWidth > 1000 ? 20 : 10);
	let puzzleViewWidth = $derived(viewportWidth > 600 ? 400 : 250);
	let puzzleView = $derived(shownDay != 0);

	function showPuzzle(day: number) {
		if (isComplete(puzzleData[day].layout)) {
			puzzleData[day] = structuredClone(PUZZLES[day]);
		}

		shownDay = day;
	}

	function hidePuzzle() {
		shownDay = 0;
	}

	onMount(() => {
		const foundData = localStorage.getItem('puzzle-data');

		if (foundData) {
			puzzleData = JSON.parse(foundData);
		}

		$effect(() => {
			localStorage.setItem('puzzle-data', JSON.stringify(puzzleData));
		});
	});
</script>

<main class:puzzle-view={puzzleView} bind:offsetWidth={viewportWidth}>
	{#if shownDay == 0}
		<h1 in:fly={{ duration: 500, y: 25 }}>
			<span>Ein kleiner</span> <br />
			Adventskalender
		</h1>

		<div class="calendar" in:fly={{ duration: 500, y: 50 }}>
			{#each DAYS as day}
				{@const puzzle = puzzleData[day]}
				{@const locked = day > new Date().getDate()}
				{@const complete = puzzle ? isComplete(puzzle.layout) : false}

				<div class="day" class:locked class:complete style="animation-delay: {day * 10}ms;">
					<div class="hint">
						{#if locked}
							Noch ist es zu früh!
						{:else if complete}
							Zum Neustarten klicken!
						{:else}
							Zum Puzzeln klicken!
						{/if}
					</div>

					{#if puzzle}
						<button class="puzzle-wrapper" onclick={() => showPuzzle(day)}>
							<Puzzle
								image={puzzle.image}
								bind:layout={puzzle.layout}
								preview
								width={100}
								height={100}
							/>
						</button>
					{/if}

					{#if !complete}
						<div class="door type-{(day % 4) + 1}">{day}</div>
					{/if}
				</div>
			{/each}
		</div>
	{:else}
		{@const puzzle = puzzleData[shownDay]}

		<h1 in:fly={{ duration: 500, y: 25 }}>{shownDay}. Türchen</h1>

		<div class="puzzle-container" in:fly={{ duration: 500, y: 50 }}>
			<Puzzle
				image={puzzle.image}
				bind:layout={puzzle.layout}
				width={puzzleViewWidth}
				height={puzzleViewWidth}
			/>
		</div>

		{#if isComplete(puzzle.layout)}
			<div class="message" in:slide={{ duration: 200, delay: 2000, axis: 'y' }}>
				{MESSAGES[shownDay]}
			</div>
		{/if}

		<button class="back-button" onclick={hidePuzzle} in:fly={{ duration: 500, y: 60 }}>
			Zurück zum Kalender
		</button>
	{/if}

	<div class="snowflake-container">
		{#each [...Array(snowflakeCount).keys()] as i}
			{@const isOnSide = i < snowflakeCount / 4 || i > snowflakeCount - snowflakeCount / 4}

			{#if !puzzleView || isOnSide}
				<Snowflake
					color={puzzleView ? 'var(--tone-7)' : 'var(--tone-0)'}
					lifeTime={5000}
					size={1.0 - 0.2 * (i % 3)}
					speed={1.0}
					x={(100.0 / snowflakeCount) * i}
					fallOffset={(i % 3) * 1500 + i * 200}
					waveOffset={100.0 * i}
				/>
			{/if}
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
		background-color: var(--tone-5);
		color: var(--tone-0);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px;
		font-family: 'Staatliches';
		transition: 200ms background-color;
	}

	main.puzzle-view {
		background-color: #101726 !important;
	}

	h1 {
		font-size: 40px;
		margin: 30px 0;
		line-height: 30px;
	}

	h1 > span {
		color: var(--tone-1);
		font-size: 30px;
	}

	.calendar {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(6, 1fr);
	}

	@media screen and (max-width: 900px) {
		.calendar {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media screen and (max-width: 700px) {
		.calendar {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (max-width: 500px) {
		.calendar {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.day {
		position: relative;
		width: 120px;
		height: 120px;
		perspective: 700px;
		display: flex;
		background-color: var(--tone-8);
		align-items: center;
		justify-content: center;
		animation: day-pop-in 400ms backwards;
	}

	@keyframes day-pop-in {
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

	.door {
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
		transform-origin: left center;
		transition-property: transform;
		transition-duration: 0.5s;
		padding: 10px 20px;
		pointer-events: none;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-weight: 900;
		font-size: 35px;
		backface-visibility: hidden;
	}

	.door.type-1 {
		color: var(--tone-6);
		background-image: linear-gradient(to top, var(--tone-6) 7px, var(--tone-4) 7px);
	}

	.door.type-2 {
		color: var(--tone-6);
		background-image: linear-gradient(to top, var(--tone-2) 7px, var(--tone-3) 7px);
	}

	.door.type-3 {
		color: var(--tone-4);
		background-image: linear-gradient(to top, var(--tone-6) 7px, var(--tone-1) 7px);
	}

	.door.type-4 {
		background-image: linear-gradient(to top, var(--tone-1) 7px, var(--tone-2) 7px);
		color: #0e347f;
	}

	.door::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: var(--tone-7);
		backface-visibility: hidden;
		transform: rotateY(-180deg);
	}

	.day:hover .door {
		transform: rotateY(-140deg);
	}

	.day.locked:hover .door {
		transform: rotateY(-30deg);
	}

	.hint {
		--hint-color: var(--tone-8);

		position: absolute;
		bottom: calc(100% - 40px);
		text-align: center;
		scale: 0;
		width: 175%;
		border-radius: 7px;
		background-color: var(--hint-color);
		padding: 10px 10px;
		pointer-events: none;
		font-size: 20px;
		transition-property: bottom, scale;
		transition-duration: 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hint::before {
		content: '';
		position: absolute;
		bottom: -9px;
		border-top: 10px solid var(--hint-color);
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	}

	.day.locked .hint {
		--hint-color: #c7410c;
	}

	.day.complete .hint {
		--hint-color: #22702c;
	}

	.day:has(:global(.hint)):hover .hint {
		bottom: calc(100% + 20px);
		scale: 1;
		transition-delay: 150ms;
	}

	.puzzle-wrapper {
		cursor: pointer;
	}

	.puzzle-container {
		z-index: 10;
	}

	.message {
		font-size: 30px;
		max-width: 1000px;
		text-align: center;
		margin-top: 50px;
		animation: message-zoom-in 300ms 2200ms both;
	}

	@keyframes message-zoom-in {
		from {
			scale: 1.3;
			opacity: 0;
		}
		to {
			scale: 1;
			opacity: 1;
		}
	}

	.back-button {
		background-color: var(--tone-7);
		border-bottom: 5px solid var(--tone-6);
		color: #fff;
		padding: 10px 25px;
		cursor: pointer;
		font-size: 20px;
		margin-top: 50px;
	}

	.snowflake-container {
		position: fixed;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}
</style>

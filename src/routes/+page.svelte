<script lang="ts">
	import '$lib/app.css';
	import { fade, fly, slide } from 'svelte/transition';
	import Puzzle from './Puzzle.svelte';
	import Snowflake from './Snowflake.svelte';
	import { isComplete } from '$lib';
	import { onMount } from 'svelte';
	import { PUZZLES } from '$lib/assets/puzzles';
	import { locale, _ } from 'svelte-i18n';

	const DAYS = [
		7, 14, 9, 23, 15, 2, 20, 3, 12, 17, 19, 5, 11, 24, 8, 18, 4, 21, 6, 13, 10, 1, 16, 22
	];

	let puzzleData: { [day: number]: number[][] } = $state({});

	let grannyMode = $state(false);

	const today = import.meta.env.MODE === 'development' ? new Date(2024, 11, 24) : new Date();

	let viewportWidth: number = $state(0);
	let shownDay: number = $state(0);
	let viewedDay = $state(0);

	let snowflakeCount = $derived(viewportWidth > 1000 ? 20 : 10);
	let puzzleViewWidth = $derived(viewportWidth > 600 ? 400 : 250);
	let puzzleView = $derived(shownDay != 0);

	function showPuzzle(day: number) {
		if (puzzleData[day] && isComplete(puzzleData[day])) {
			puzzleData[day] = structuredClone(PUZZLES[day].layout);
		}

		shownDay = day;
	}

	function hidePuzzle() {
		shownDay = 0;
	}

	function viewImage(day: number) {
		viewedDay = day;
	}

	function hideImage() {
		viewedDay = 0;
	}

	function toggleGrannyMode() {
		grannyMode = !grannyMode;
	}

	function generateSortedLayout(layout: number[][]): number[][] {
		let counter = 0;
		return layout.map((row) => row.map(() => counter++));
	}

	$effect(() => {
		if (grannyMode) {
			$locale = 'ru';
		} else {
			$locale = 'de';
		}
	});

	$effect(() => console.log(shownDay));

	onMount(() => {
		for (let day = 1; day <= 24; day++) {
			if (PUZZLES[day]) puzzleData[day] = PUZZLES[day].layout;
		}

		// migration from old storage structure
		const foundOldData = localStorage.getItem('puzzle-data');
		if (foundOldData) {
			puzzleData[1] = JSON.parse(foundOldData)[1].layout;

			localStorage.removeItem('puzzle-data');
		}

		const foundData = localStorage.getItem('puzzles');
		if (foundData) {
			puzzleData = Object.assign(puzzleData, JSON.parse(foundData));
		}

		// fix day 4 bug
		if (puzzleData[4] && !isComplete(puzzleData[4])) {
			puzzleData[4] = PUZZLES[4].layout;
		}

		$effect(() => {
			localStorage.setItem('puzzles', JSON.stringify(puzzleData));
		});
	});
</script>

<svelte:head>
	<title>{$_('page-title')}</title>
</svelte:head>

<main class:puzzle-view={puzzleView} bind:offsetWidth={viewportWidth}>
	{#if shownDay == 0}
		<h1 in:fly={{ duration: 500, y: 25 }}>
			<span>{$_('title.small')}</span> <br />
			{$_('title.big')}
		</h1>

		<div class="calendar" in:fly={{ duration: 500, y: 50 }}>
			{#each DAYS as day}
				{@const locked = day > today.getDate()}
				{@const complete = grannyMode || (puzzleData[day] ? isComplete(puzzleData[day]) : false)}

				<div class="day" class:locked class:complete style="animation-delay: {day * 10}ms;">
					<div class="hint">
						{#if locked}
							{$_('hint.locked')}
						{:else if complete}
							{$_('hint.complete')}
						{:else}
							{$_('hint.incomplete')}
						{/if}
					</div>

					{#if PUZZLES[day] && puzzleData[day]}
						<button
							class="puzzle-wrapper"
							class:frame={complete}
							disabled={locked}
							onclick={complete ? () => viewImage(day) : () => showPuzzle(day)}
						>
							{#if grannyMode}
								<Puzzle
									image={PUZZLES[day].image}
									layout={generateSortedLayout(puzzleData[day])}
									preview
									size={100}
								/>
							{:else}
								<Puzzle
									image={PUZZLES[day].image}
									bind:layout={puzzleData[day]}
									preview
									size={100}
								/>
							{/if}
						</button>
					{/if}

					{#if !complete}
						<div class="door type-{(day % 4) + 1}">{day}</div>
					{:else}
						<div class="day-number">{day}</div>

						{#if !grannyMode}
							<button
								class="restart-puzzle-button"
								onclick={() => showPuzzle(day)}
								aria-label="restart"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-rotate-ccw"
									><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
										d="M3 3v5h5"
									/></svg
								>
							</button>
						{/if}
					{/if}
				</div>
			{/each}
		</div>

		<button class="granny-mode-button" onclick={toggleGrannyMode}>{$_('granny-mode')}</button>
	{:else}
		<h1 in:fly={{ duration: 500, y: 25 }}>
			{$_('door', {
				values: { number: shownDay }
			})}
		</h1>

		<div class="puzzle-container" in:fly={{ duration: 500, y: 50 }}>
			<Puzzle
				image={PUZZLES[shownDay].image}
				bind:layout={puzzleData[shownDay]}
				size={puzzleViewWidth}
			/>
		</div>

		{#if puzzleData[shownDay] && isComplete(puzzleData[shownDay])}
			<div class="message" in:slide={{ duration: 200, delay: 2000, axis: 'y' }}>
				{$_(`captions.day-${shownDay}`)}
			</div>
		{/if}

		<button class="back-button" onclick={hidePuzzle} in:fly={{ duration: 500, y: 60 }}>
			{$_('calendar-back')}
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

	{#if viewedDay != 0}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->

		<div class="image-view-modal" onclick={hideImage} transition:fade={{ duration: 200 }}>
			<img
				src={PUZZLES[viewedDay].image}
				alt=""
				class="viewed-image"
				transition:fly={{ duration: 400, y: 50 }}
			/>

			<div class="viewed-image-caption" transition:fly={{ duration: 400, y: 75 }}>
				{$_(`captions.day-${viewedDay}`)}
			</div>

			<button class="close-viewed-image-button" transition:fly={{ duration: 400, y: 100 }}
				>{$_('close-view')}</button
			>
		</div>
	{/if}
</main>

<style>
	:global(body) {
		background-color: var(--tone-5);
	}

	:global(body:has(main.puzzle-view)) {
		background-color: #101726 !important;
	}

	main {
		width: 100%;
		color: var(--tone-0);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px;
		font-family: 'Staatliches', 'Oswald';
		transition: 200ms background-color;
	}

	main.puzzle-view > *:not(.snowflake-container) {
		z-index: 10;
	}

	h1 {
		font-size: 40px;
		margin: 20px 0;
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

	.day.complete {
		background-color: var(--tone-6);
		outline: 3px solid var(--tone-7);
		outline-offset: -3px;
	}

	.day-number {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: var(--tone-7);
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
	}

	.restart-puzzle-button {
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--tone-7);
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		cursor: pointer;
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
		color: var(--tone-6);
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

	.day:hover:not(:has(.restart-puzzle-button:hover)) .hint {
		bottom: calc(100% + 20px);
		scale: 1;
		transition-delay: 150ms;
	}

	.granny-mode-button {
		color: var(--tone-0);
		cursor: pointer;
		font-size: 20px;
		margin-top: 20px;
		text-decoration: underline 2px;
	}

	.puzzle-wrapper {
		cursor: pointer;
	}

	.puzzle-wrapper.frame {
		outline: 2px solid var(--tone-0);
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
		color: var(--tone-0);
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

	.image-view-modal {
		z-index: 100;
		position: fixed;
		inset: 0;
		background-color: #000000cb;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 20px;
	}

	.viewed-image {
		max-height: 50vh;
		max-width: 70vw;
		outline: 5px solid #fff;
	}

	.viewed-image-caption {
		font-size: 30px;
	}

	.close-viewed-image-button {
		background-color: var(--tone-2);
		border-bottom: 5px solid var(--tone-1);
		color: var(--tone-6);
		padding: 10px 25px;
		cursor: pointer;
		font-size: 20px;
		margin-top: 50px;
	}
</style>

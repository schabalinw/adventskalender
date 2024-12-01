<script lang="ts">
	import { today } from '$lib';
	import { fade, fly } from 'svelte/transition';

	const CALENDARS = ['Mama', 'Papa', 'Muck', 'Stephan'] as const;

	type Calendar = (typeof CALENDARS)[number];

	let selectedCalendar: Calendar = 'Muck';

	function selectCalendar(calendar: Calendar) {
		selectedCalendar = calendar;
	}
</script>

<div class="calendar {selectedCalendar.toLowerCase()}">
	{#if selectedCalendar === 'Muck'}
		<div class="panorama-wrapper" in:fade={{ duration: 200 }}>
			<div class="panorama"></div>
		</div>
	{/if}

	<header class="calendar-header">
		<div class="calendar-select-container">
			{#each CALENDARS as calendar}
				<button
					on:click={() => selectCalendar(calendar)}
					class="calendar-select-button"
					class:selected={calendar === selectedCalendar}>{calendar}</button
				>
			{/each}
		</div>

		{#key selectedCalendar}
			<h1>
				{selectedCalendar}s Adventskalender

				{#if selectedCalendar === 'Muck'}
					<div class="header-slogan">Noch 24 Tage bis Weihnachten!</div>
				{/if}
			</h1>
		{/key}
	</header>

	<div class="calendar-item-container">
		{#each Array.from({ length: 24 }, (_, i) => i + 1) as day}
			<button
				class="calendar-item"
				class:complete={day < 2}
				disabled={day > $today.getDate()}
				style="animation-delay: {day % 3}s;"
			>
				{day}
			</button>
		{/each}
	</div>
</div>

<style>
	.calendar {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		position: relative;
		overflow: hidden;
		text-align: center;
	}

	.calendar-select-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3px;
		backdrop-filter: blur(3px) brightness(80%);
		border: 1px solid rgba(255, 255, 255, 0.299);
		color: white;
		border-radius: 30px;
		padding: 4px;
		width: fit-content;
		font-family: 'Inter';
		display: none;
	}

	.calendar-select-button {
		padding: 5px 20px;
		border-radius: 30px;
		cursor: pointer;
	}

	.calendar-select-button.selected {
		color: black;
		font-weight: bold;
		background-color: white;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 50px;
		align-items: center;
		position: relative;
		margin: 80px 0;
	}

	h1 {
		font-size: 2em;
	}

	.calendar-item-container {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 10px;
		max-width: 1200px;
		margin-bottom: 100px;
	}

	@media screen and (max-width: 1100px) {
		.calendar-item-container {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	@media screen and (max-width: 900px) {
		.calendar-item-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media screen and (max-width: 600px) {
		.calendar-item-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (max-width: 400px) {
		.calendar-item-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.calendar-item {
		width: 100px;
		height: 100px;
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2em;
		cursor: pointer;
	}

	/* calendar-specific styles */

	.calendar.muck {
		color: white;
		font-family: 'Minecraftia';
	}

	.calendar.muck h1 {
		text-shadow: 4px 4px rgb(63, 63, 63);
		position: relative;
	}

	.header-slogan {
		position: absolute;
		bottom: 0;
		right: -30%;
		font-size: 0.5em;
		text-shadow: 2px 2px rgb(100, 78, 0);
		color: yellow;
		rotate: -15deg;
		transform-origin: bottom center;
		animation: slogan-bounce 0.5s infinite linear;
	}

	@keyframes slogan-bounce {
		0% {
			scale: 1;
		}
		50% {
			scale: 1.1;
		}
		100% {
			scale: 1;
		}
	}

	.calendar.muck .calendar-item {
		width: 120px;
		height: 120px;
		background-image: url('images/minecraft-button/minecraft-button-normal.png');
		font-size: 2em;
		background-size: 100% 100%;
		position: relative;
		image-rendering: pixelated;
		padding: 20px;
		text-shadow: 4px 4px rgb(63, 63, 63);
	}

	.calendar.muck .calendar-item:hover {
		background-image: url('images/minecraft-button/minecraft-button-focus.png');
	}

	.calendar.muck .calendar-item:disabled {
		background-image: url('images/minecraft-button/minecraft-button-disabled.png');
		color: grey;
		cursor: default;
	}

	.calendar.muck .calendar-item.complete {
		align-items: flex-start;
		justify-content: flex-start;
		color: rgb(255, 255, 120);
	}

	.calendar.muck .calendar-item.complete::before {
		position: absolute;
		inset: 0;
		content: '';
		image-rendering: pixelated;
		background-size: 100% 100%;
		pointer-events: none;
		animation: button-complete 1.3s infinite linear both;
		animation-delay: inherit;
	}

	@keyframes button-complete {
		0% {
			background-image: url('images/minecraft-button/minecraft-button-complete1.png');
		}
		25% {
			background-image: url('images/minecraft-button/minecraft-button-complete2.png');
		}
		50% {
			background-image: url('images/minecraft-button/minecraft-button-complete3.png');
		}
		75% {
			background-image: url('images/minecraft-button/minecraft-button-complete4.png');
		}
		100% {
			background-image: url('images/minecraft-button/minecraft-button-complete1.png');
		}
	}

	.panorama-wrapper {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: fixed;
		display: flex;
		align-items: center;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.panorama {
		position: absolute;
		width: 400%;
		height: 100%;
		background-image: url('images/minecraft-panorama-background.png');
		background-size: 50% 100%;
		background-repeat: repeat-x;
		animation: panorama 30s infinite linear;
	}

	.panorama::after {
		content: '';
		position: absolute;
		inset: 0;
		backdrop-filter: blur(3px);
	}

	@keyframes panorama {
		from {
			translate: 0 0;
		}
		to {
			translate: -50% 0;
		}
	}
</style>

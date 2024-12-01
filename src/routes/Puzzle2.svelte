<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	interface Props {
		image: string;
		size?: number;
		tileSize?: number;
		preview?: boolean;
	}

	let { image, size = 3, tileSize = 30, preview = false }: Props = $props();

	function generatePuzzle(size: number) {
		const puzzle = [...Array(size * size).keys(), 0].slice(1);

		for (let i = 0; i < 10; i++) {
			const spaceIndex = puzzle.findIndex((t) => t == 0);
			const adjacent = [];
			const x = spaceIndex % 3;
			const y = Math.floor(spaceIndex / 3);

			if (y > 0) {
				adjacent.push(spaceIndex - 3);
			}

			if (y < 3 - 1) {
				adjacent.push(spaceIndex + 3);
			}

			if (x > 0) {
				adjacent.push(spaceIndex - 1);
			}

			if (x < 3 - 1) {
				adjacent.push(spaceIndex + 1);
			}

			const tileIndex = adjacent[Math.floor(Math.random() * adjacent.length)];
			const tile = puzzle[tileIndex];

			console.log(adjacent, tileIndex, spaceIndex);

			puzzle[tileIndex] = 0;
			puzzle[spaceIndex] = tile;
		}

		return puzzle;
	}

	function swap(tile: number) {
		const tileIndex = puzzle.findIndex((t) => t == tile);
		const spaceIndex = puzzle.findIndex((t) => t == 0);

		const tileX = tileIndex % 3;
		const tileY = Math.floor(tileIndex / 3);

		const spaceX = spaceIndex % 3;
		const spaceY = Math.floor(spaceIndex / 3);

		if (
			(Math.abs(tileX - spaceX) == 1 && tileY == spaceY) ||
			(Math.abs(tileY - spaceY) == 1 && tileX == spaceX)
		) {
			puzzle[tileIndex] = 0;
			puzzle[spaceIndex] = tile;

			puzzle = puzzle;
		}
	}

	function isComplete(puzzle: number[]) {
		if (puzzle[puzzle.length - 1] != 0) return false;

		for (let i = 0; i < puzzle.length - 1; i++) {
			if (puzzle[i] != i + 1) {
				return false;
			}
		}

		return true;
	}

	let puzzle = generatePuzzle(size);

	let complete = $derived(isComplete(puzzle));
</script>

<div class="puzzle-container" style="--tile-size: {tileSize}px" class:preview class:complete>
	{#each puzzle as tile, index (tile)}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			animate:flip={{ duration: 250 * (tile == 0 ? 0 : 1) }}
			class="tile"
			class:space={tile == 0}
			class:complete
			onclick={() => swap(tile)}
			style="--tile-x: {(tile - 1) % 3}; --tile-y: {Math.floor((tile - 1) / 3)}; --x: {index %
				3}; --y: {Math.floor(index / 3)};"
		></button>
	{/each}
</div>

<style>
	.puzzle-container {
		--tile-size: 30px;

		--shadow-width: 5px;
		--shadow-color: #182848;

		width: calc(var(--tile-size) * 3);
		height: calc(var(--tile-size) * 3);
		/* background: linear-gradient(
				to right,
				var(--shadow-color),
				transparent var(--shadow-width),
				transparent calc(var(--tile-size) - var(--shadow-width)),
				var(--shadow-color)
			),
			linear-gradient(
				to bottom,
				var(--shadow-color),
				transparent var(--shadow-width),
				transparent calc(var(--tile-size) - var(--shadow-width)),
				var(--shadow-color)
			),
			#0c2f74; */
		background-color: transparent;
		background-size: var(--tile-size) var(--tile-size);
		position: relative;
		box-sizing: content-box;
		border: 10px solid #fff;
	}

	.puzzle-container.preview {
		border: none;
	}

	.puzzle-container.complete {
		animation: complete-bounce 1s both;
		animation-delay: 500ms;
	}

	@keyframes complete-bounce {
		0% {
			scale: 1;
		}
		40% {
			scale: 0.75;
		}
		60% {
			scale: 1.1;
		}
		75% {
			scale: 0.9;
		}
		100% {
			scale: 1;
		}
	}

	/* .puzzle-container::before {
		content: '';
		position: absolute;
		inset: -5px;
		z-index: 20;
		pointer-events: none;
		box-sizing: content-box;
		border: 5px solid #00b1d9;
	} */

	.tile {
		position: absolute;
		left: calc(var(--x) * var(--tile-size));
		top: calc(var(--y) * var(--tile-size));
		width: var(--tile-size);
		cursor: pointer;
		height: var(--tile-size);
		background-image: url('images/bastet.jpg');
		background-size: calc(var(--tile-size) * 3) calc(var(--tile-size) * 3);
		background-position-x: calc(-1 * var(--tile-x) * var(--tile-size));
		background-position-y: calc(-1 * var(--tile-y) * var(--tile-size));
		/* box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.233); */
	}

	.tile.complete {
		pointer-events: none;
		cursor: default;
	}

	.tile:not(.complete).space {
		background: none;
	}

	.tile.space.complete {
		animation: pop-in 500ms both;
	}

	@keyframes pop-in {
		from {
			scale: 0;
		}
		to {
			scale: 1;
		}
	}
</style>

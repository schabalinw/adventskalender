<script lang="ts">
	import { isComplete } from '$lib';
	import { flip } from 'svelte/animate';
	import { scale } from 'svelte/transition';

	export interface PuzzleProps {
		image: string;
		layout: number[][];
		width?: number;
		preview?: boolean;
	}

	let {
		image,
		layout = $bindable([
			[2, 3],
			[1, 0]
		]),
		width = 300,
		preview = false
	}: PuzzleProps = $props();

	let columns = $derived(layout[0].length);
	let rows = $derived(layout.length);

	let height = $derived((width / columns) * rows);

	let complete = $derived(isComplete(layout));

	function getDirection(tile: number): 'none' | 'top' | 'bottom' | 'left' | 'right' {
		const flatLayout = layout.flat();

		const spaceTile = Math.max(...flatLayout);
		const spaceTileIndex = flatLayout.findIndex((t) => t == spaceTile);

		const [spaceTileX, spaceTileY] = [
			spaceTileIndex % columns,
			Math.floor(spaceTileIndex / columns)
		];

		if (spaceTileY > 0 && layout[spaceTileY - 1][spaceTileX] == tile) {
			return 'top';
		}

		if (spaceTileY < rows - 1 && layout[spaceTileY + 1][spaceTileX] == tile) {
			return 'bottom';
		}

		if (spaceTileX > 0 && layout[spaceTileY][spaceTileX - 1] == tile) {
			return 'left';
		}

		if (spaceTileX < columns - 1 && layout[spaceTileY][spaceTileX + 1] == tile) {
			return 'right';
		}

		return 'none';
	}

	function swap(tile: number) {
		const flatLayout = layout.flat();

		const spaceTile = Math.max(...flatLayout);

		const tileIndex = flatLayout.findIndex((t) => t == tile);
		const spaceTileIndex = flatLayout.findIndex((t) => t == spaceTile);

		const [tileX, tileY] = [tileIndex % columns, Math.floor(tileIndex / columns)];
		const [spaceTileX, spaceTileY] = [
			spaceTileIndex % columns,
			Math.floor(spaceTileIndex / columns)
		];

		if (
			(Math.abs(tileX - spaceTileX) == 1 && tileY == spaceTileY) ||
			(Math.abs(tileY - spaceTileY) == 1 && tileX == spaceTileX)
		) {
			layout[tileY][tileX] = spaceTile;
			layout[spaceTileY][spaceTileX] = tile;

			// for creating the puzzles
			if (import.meta.env.MODE === 'development') {
				console.log(layout);
			}
		}
	}
</script>

<div
	class="puzzle"
	class:complete
	class:preview
	style="--columns: {columns}; --rows: {rows}; --width: {width}px; --height: {height}px;"
>
	{#each layout.flat() as tile, index (tile)}
		{@const isSpaceTile = tile == Math.max(...layout.flat())}
		{@const direction = getDirection(tile)}

		<div
			class="tile"
			class:space={isSpaceTile}
			class:complete
			style="
				background-image: url({image});
				--x: {index % columns}; 
				--y: {Math.floor(index / columns)};
				--tile-x: {tile % columns};
				--tile-y: {Math.floor(tile / columns)};
			"
			animate:flip={{ duration: 200 * +!preview }}
		>
			{#if !preview}
				<button
					onclick={() => swap(tile)}
					disabled={complete || preview || isSpaceTile}
					aria-label="tile"
				>
					{#key direction}
						<div class="arrow-indicator {direction}" in:scale={{ duration: 200 }}></div>
					{/key}
				</button>
			{/if}
		</div>
	{/each}
</div>

<style>
	.puzzle {
		position: relative;
		width: var(--width);
		height: var(--height);
	}

	.puzzle:not(.preview).complete {
		animation: puzzle-complete 1000ms 1200ms forwards;
	}

	@keyframes puzzle-complete {
		0% {
			scale: 1;
		}
		40% {
			scale: 0.75;
			outline: 0px solid #fff;
		}
		60% {
			scale: 1.1;
			outline: 10px solid #fff;
		}
		80% {
			scale: 0.9;
			outline: 10px solid #fff;
		}
		100% {
			scale: 1;
			outline: 10px solid #fff;
		}
	}

	.tile {
		--tile-width: calc(var(--width) / var(--columns));
		--tile-height: calc(var(--height) / var(--rows));

		position: absolute;
		left: calc(var(--x) * var(--tile-width));
		top: calc(var(--y) * var(--tile-height));
		width: var(--tile-width);
		height: var(--tile-height);
		background-size: var(--width) var(--height);
		background-position-x: calc(-1 * var(--tile-x) * var(--tile-width));
		background-position-y: calc(-1 * var(--tile-y) * var(--tile-height));
		scale: 0.95;
		transition: scale 200ms;
	}

	.tile.complete {
		transition: scale 300ms 300ms;
	}

	.puzzle.preview .tile {
		transition: none;
		scale: 1;
	}

	.tile > button {
		width: 100%;
		height: 100%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tile > button:disabled {
		cursor: default;
	}

	.arrow-indicator {
		--arrow-size: 10px;
		--offset: 8px;
		position: absolute;
	}

	.arrow-indicator:not(.none) {
		border-top: var(--arrow-size) solid var(--tone-6);
		border-left: var(--arrow-size) solid transparent;
		border-right: var(--arrow-size) solid transparent;
		border-bottom: var(--arrow-size) solid transparent;
	}

	.arrow-indicator.left {
		rotate: -90deg;
		right: calc(-2 * var(--arrow-size) - var(--offset));
	}

	.arrow-indicator.right {
		rotate: 90deg;
		left: calc(-2 * var(--arrow-size) - var(--offset));
	}

	.arrow-indicator.top {
		bottom: calc(-2 * var(--arrow-size) - var(--offset));
	}

	.arrow-indicator.bottom {
		rotate: 180deg;
		top: calc(-2 * var(--arrow-size) - var(--offset));
	}

	.tile.complete .arrow-indicator {
		border-color: transparent;
	}

	.tile.space {
		opacity: 0;
	}

	.tile.complete {
		scale: 1;
	}

	.tile.space.complete {
		animation: final-tile-appear 300ms 800ms forwards;
	}

	.puzzle.preview .tile.space.complete {
		animation: final-tile-appear 0ms both;
	}

	@keyframes final-tile-appear {
		from {
			scale: 0;
		}
		to {
			scale: 1;
			opacity: 1;
		}
	}
</style>

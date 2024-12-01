<script lang="ts">
	import snowflakeSVG from '$lib/assets/snowflake.svg?raw';

	interface Props {
		color?: string;
		lifeTime?: number;
		size?: number;
		speed?: number;
		x?: number;
		fallOffset?: number;
		waveOffset?: number;
	}

	let {
		color = '#fff',
		lifeTime = 5000,
		size = 1.0,
		speed = 1.0,
		x = 0.0,
		fallOffset = 0.0,
		waveOffset = 0.0
	}: Props = $props();
</script>

<div
	class="snowflake"
	style="
		--color: {color};
		--life-time: {lifeTime}ms;
		--size: {size};
		--speed: {speed};
		--x: {x}%;
		--fall-offset: {fallOffset}ms;
		--wave-offset: {waveOffset}ms;
	"
>
	<div class="wave-wrapper">
		{@html snowflakeSVG}
	</div>
</div>

<style>
	.snowflake {
		--speed: 1;
		--size: 1;
		--fall-offset: 0ms;
		--wave-offset: 0ms;

		width: calc(70px * var(--size));
		height: calc(70px * var(--size));
		left: var(--x);
		position: absolute;
		animation: fall calc(var(--life-time) / var(--speed)) infinite linear;
		animation-delay: calc(-1 * var(--fall-offset));
	}

	.wave-wrapper {
		width: 100%;
		height: 100%;
		animation: wave calc(var(--life-time) / 10) alternate infinite ease-in-out;
		animation-delay: calc(-1 * var(--wave-offset));
	}

	:global(.snowflake svg) {
		width: 100%;
		height: 100%;
		animation: rotate var(--life-time) infinite linear;
		animation-delay: calc(-1 * var(--wave-offset));
	}

	:global(.snowflake svg path) {
		stroke: var(--color);
		stroke-width: 8px;
		transition: 200ms stroke;
	}

	@keyframes fall {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100vh);
		}
	}

	@keyframes wave {
		to {
			transform: translateX(50px);
		}
	}

	@keyframes rotate {
		to {
			rotate: 360deg;
		}
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { timeline, stagger } from 'motion';
	import SplitType from 'split-type';

	import forestBG from '$lib/assets/forest-bg.webp';
	import forestLeft from '$lib/assets/forest-left.webp';
	import forestRight from '$lib/assets/forest-right.webp';
	import chevronDown from '$lib/assets/chevron-down.svg';

	let heroText;
	let ctaButton;
	let bg;
	let left;
	let right;
	let loaderBG;
	let loaderText;

	onMount(() => {
		// Reveal loader text — Ensures the text doesn't flash
		const revealLoader = [loaderText, { opacity: 1 }, { duration: 0 }];

		const splitLoader = new SplitType(loaderText, { lineClass: 'overflow-hidden' });
		const splitLoaderIn = [
			splitLoader.words,
			{ y: ['100%', '0%'] },
			{ delay: stagger(0.1), duration: 0.8 }
		];
		const splitLoaderOut = [
			splitLoader.words,
			{ y: ['-100%'] },
			{ delay: stagger(0.1), duration: 0.8, at: '+0.1' }
		];
		const animateLoaderBG = [loaderBG, { y: '-100%' }, { duration: 0.8, at: '-0.35' }];

		const splitHero = new SplitType(heroText, { lineClass: 'overflow-hidden -my-16' });
		const animateHero = [
			splitHero.words,
			{ y: ['100%', '0%'] },
			{ delay: stagger(0.1), duration: 1, easing: [0.62, -0.01, 0.37, 0.99], at: '-0.7' }
		];

		const animateBG = [bg, { scale: [1.15, 1] }, { duration: 2, at: '<' }];
		const animateLeft = [left, { x: [-368, 0] }, { duration: 2, at: '<' }];
		const animateRight = [right, { x: [368, 0] }, { duration: 2, at: '<' }];

		// Animate CTA button
		const animateCTA = [ctaButton, { y: ['100%', '0%'] }, { duration: 0.8, at: '-1' }];

		// Create the timeline
		timeline(
			[
				revealLoader,
				splitLoaderIn,
				splitLoaderOut,
				animateLoaderBG,
				animateHero,
				animateBG,
				animateLeft,
				animateRight,
				animateCTA
			],
			{ defaultOptions: { ease: [0.52, 0.05, 0.22, 0.95] } }
		);
	});
</script>

<div class="h-screen w-full flex items-center justify-center bg-primary-400 relative">
	<!-- Hero text -->
	<h1 bind:this={heroText} class="font-primary text-[8rem] text-center text-light-100 z-20">
		Welcome<br />to the<br />Jungle
	</h1>

	<!-- Background image -->
	<div class="absolute w-full h-full">
		<div class="h-full w-full absolute bg-hero-fade" />
		<img bind:this={bg} src={forestBG} alt="" class="blur-sm h-full w-full object-cover" />
	</div>

	<!-- Foreground images -->
	<div class="absolute inset-0 overflow-hidden h-full w-2/5 flex items-center z-30 blur-md">
		<img bind:this={left} src={forestLeft} alt="" class="w-full min-h-full" />
	</div>
	<div class="absolute top-0 right-0 overflow-hidden h-full w-2/5 flex items-center z-30 blur">
		<img bind:this={right} src={forestRight} alt="" class="w-full min-h-full" />
	</div>

	<!-- CTA Button -->
	<button
		bind:this={ctaButton}
		class="absolute -bottom-14 rounded-full p-4 border border-light-100"
	>
		<div class="rounded-full px-4 py-10 bg-orange-300 flex items-center align-center">
			<img src={chevronDown} alt="" class="w-8 h-8" />
		</div>
	</button>

	<!-- Loader -->
	<div class="z-50 fixed h-screen w-screen flex items-center justify-center">
		<div bind:this={loaderBG} class="absolute bg-primary-400 w-full h-full" />
		<span bind:this={loaderText} class="font-primary text-3xl text-light-100 relative opacity-0"
			>Jungle Cat</span
		>
	</div>
</div>

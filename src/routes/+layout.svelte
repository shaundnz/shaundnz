<script lang="ts">
	import SlidePage from '$lib/components/transitions/SlidePage.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import { pageIndexStore, setCurrentPageIndex } from '$lib/store/pageIndexStore';

	export let data;

	$: pageIndexStore;
	onMount(() => {
		setCurrentPageIndex(data.thisPageIndex);
	});

	const getTopLeftPos = (index: number) => {
		if (index === 2) {
			return 'left-2/3';
		} else if (index === 1) {
			return 'left-1/3';
		} else {
			return 'left-0';
		}
	};
	$: topLeftPos = getTopLeftPos(data.thisPageIndex);
</script>

<!-- On desktop, set height to screen, then move the scroll bar inside the page content so it doesn't affect bottom navbar  -->
<!-- On mobile scroll bar is an overlay so doesn't affect bottom navbar pos -->
<div class="overflow-x-hidden md:max-h-screen">
	{#key data.url}
		<SlidePage
			slidePageInFromRight={$pageIndexStore.currentPageIndex > $pageIndexStore.previousPageIndex}
		>
			<div>
				<slot />
			</div>
		</SlidePage>
	{/key}
</div>

<div
	class={`fixed h-0.5 w-1/3 bg-secondary bottom-16 ${topLeftPos} transition-all duration-500 translate-y-0.5 z-50`}
/>
<div class="btm-nav font-mono text-sm md:text-base z-10">
	<a href="/" on:click={() => setCurrentPageIndex(0)}>
		<span class="btm-nav-label">&ltHome /&gt</span>
	</a>
	<a href="/projects" on:click={() => setCurrentPageIndex(1)}>
		<span class="btm-nav-label">&ltProjects /&gt</span>
	</a>
	<a href="/experience" on:click={() => setCurrentPageIndex(2)}>
		<span class="btm-nav-label">&ltExperience /&gt</span>
	</a>
</div>

<script lang="ts">
	import type { JobHistoryItem } from '$lib/types';

	export let jobHistoryItem: JobHistoryItem;
</script>

<li class="mb-8 ml-6 relative">
	<span
		class="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full ring-8 ring-base-100 top-2"
		style="left: -2.125rem"
	/>
	<h3 class="mb-1 text-xl font-bold">{jobHistoryItem.title}</h3>
	<time class="block mb-3 text-sm leading-none text-gray-500">{jobHistoryItem.timespan}</time>
	<ul class="list-disc [&>li]:mb-1">
		{#each jobHistoryItem.bulletPoints as point}
			<li>
				{point}
			</li>
		{/each}
	</ul>
</li>

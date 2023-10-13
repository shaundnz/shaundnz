<script lang="ts">
	import type { JobHistoryItem } from '$lib/types';
	import TimelineItem from './TimelineItem.svelte';
	export let jobHistory: JobHistoryItem[];
</script>

<ol class="relative border-l-4 border-primary">
	{#each jobHistory as jobHistoryItem}
		<TimelineItem {jobHistoryItem} />
	{/each}
</ol>

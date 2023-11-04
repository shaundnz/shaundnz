<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import { aboutMe, languages, frameworks, tools, jobHistory } from '$lib/constants';
</script>

<head>
	<title> Experience </title>
</head>

<div class="mx-auto max-w-screen-md mt-4 px-4">
	<PageHeader>EXPERIENCE</PageHeader>
	<div class="my-6">
		<SectionHeader>ABOUT ME</SectionHeader>
		<p>
			{aboutMe}
		</p>
		<div class="divider" />

		<SectionHeader>SKILLS</SectionHeader>
		<div class="mb-2">
			<h3 class="text-xl font-bold">Languages/Technologies</h3>
			<p class="font-mono">
				{#each languages as language, index}
					{language}{index !== languages.length - 1 ? ', ' : '.'}
				{/each}
			</p>
		</div>
		<div class="mb-2">
			<h3 class="text-xl font-bold">Frameworks</h3>
			<p class="font-mono">
				{#each frameworks as framework, index}
					{framework}{index !== frameworks.length - 1 ? ', ' : '.'}
				{/each}
			</p>
		</div>
		<div class="mb-2">
			<h3 class="text-xl font-bold">Tools</h3>
			<p class="font-mono">
				{#each tools as tool, index}
					{tool}{index !== tools.length - 1 ? ', ' : '.'}
				{/each}
			</p>
		</div>
		<div class="divider" />

		<SectionHeader>HISTORY</SectionHeader>
		<Timeline {jobHistory} />
	</div>
</div>
<div class="min-h-16" />

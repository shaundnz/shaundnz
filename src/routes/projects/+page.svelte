<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/constants';
</script>

<head>
	<title> Projects </title>
</head>

<div class="mx-auto max-w-screen-md mt-4 px-4">
	<PageHeader>PROJECTS</PageHeader>
	<div class="my-6">
		{#each projects as project, index}
			<ProjectCard {project} />
			{#if index !== projects.length - 1}
				<div class="divider" />
			{/if}
		{/each}
	</div>
</div>
<div class="min-h-16" />

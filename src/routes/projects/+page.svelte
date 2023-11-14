<script>
	import InfoIcon from '~icons/mdi/information-outline';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/constants';
</script>

<head>
	<title> Projects </title>
</head>

<div class="mx-auto max-w-screen-md mt-4 px-4 mb-8">
	<PageHeader>PROJECTS</PageHeader>

	<div class="alert my-6">
		<InfoIcon class="text-xl text-info" />
		<span>
			All GitHub pages contain a README with detailed information about the technologies used,
			architecture, and motivations.
		</span>
	</div>
	<div class="divider" />
	<div>
		{#each projects as project, index}
			<ProjectCard {project} />
			{#if index !== projects.length - 1}
				<div class="divider" />
			{/if}
		{/each}
	</div>
</div>
<div class="min-h-16" />

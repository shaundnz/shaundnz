<script lang="ts">
	import type { Project } from '$lib/types';
	import GithubIcon from '~icons/mdi/Github';
	import OpenInNewIcon from '~icons/mdi/open-in-new';
	import SectionHeader from './SectionHeader.svelte';

	export let project: Project;
</script>

<div>
	<div class="flex justify-between mb-2">
		<div>
			<SectionHeader marginBottom={'1'}>{project.title}</SectionHeader>
			{#each project.tags as tag}
				<div class="badge badge-primary badge-outline font-mono">{tag}</div>
				&thinsp;
			{/each}
		</div>
		<div>
			<ul class="menu menu-horizontal p-0 [&>li>*]:px-2">
				<li>
					<a class="tooltip" href={project.githubLink} target="_blank" data-tip="Source Code">
						<GithubIcon class="text-xl" />
					</a>
				</li>
				<li>
					<a class="tooltip" href={project.demoLink} target="_blank" data-tip="Live Demo">
						<OpenInNewIcon class="text-xl" />
					</a>
				</li>
			</ul>
		</div>
	</div>
	{#each project.description as paragraph}
		<p class="mb-1">
			{paragraph}
		</p>
	{/each}
</div>

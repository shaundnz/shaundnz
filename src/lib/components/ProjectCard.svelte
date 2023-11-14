<script lang="ts">
	import type { Project } from '$lib/types';
	import GithubIcon from '~icons/mdi/Github';
	import OpenInNewIcon from '~icons/mdi/open-in-new';
	import SectionHeader from './SectionHeader.svelte';

	export let project: Project;
</script>

<div class="space-y-4">
	<div>
		<div class="flex justify-between">
			<div>
				<SectionHeader marginBottom={'1'}>{project.title}</SectionHeader>
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
		<div>
			{#each project.tags as tag}
				<div class="badge badge-primary badge-outline font-mono">{tag}</div>
				&thinsp;
			{/each}
		</div>
	</div>
	<div>
		{#each project.description as paragraph}
			<p class="mb-1">
				{paragraph}
			</p>
		{/each}
	</div>
	<div class="mockup-browser border bg-base-300">
		<div class="mockup-browser-toolbar">
			<div class="input border">{project.demoLink}</div>
		</div>
		<img src={project.imageUrl} alt={project.title} />
	</div>
</div>

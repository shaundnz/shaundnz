<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import { languages, frameworks, tools, jobHistory } from '$lib/constants';
</script>

<head>
	<title> Experience </title>
</head>

<div class="mx-auto max-w-screen-md mt-4 px-4">
	<PageHeader>EXPERIENCE</PageHeader>
	<div class="my-6">
		<SectionHeader>ABOUT ME</SectionHeader>
		<div class="space-y-2">
			<p>
				Currently a software engineer at&nbsp;<a
					class="link link-primary"
					href="https://www.cornerstoneondemand.com/">Cornerstone OnDemand.</a
				>
				Using React and C#/ASP.NET, I work within an agile team alongside great developers to build new
				features and maintain
				<a
					class="link link-primary"
					href="https://help.csod.com/help/csod_0/Content/User/Careers/Check-Ins/Check-Ins_-_Overview_-_End_User.htm?tocpath=Performance%7CCheck-Ins%7C_____0"
					>Check-Ins.</a
				>
			</p>
			<p>
				I am experienced with working on large-scale, full-stack applications. I love working within
				a team to solve technical challenges and turn ideas into high-quality, reusable, and
				maintainable code.
			</p>
		</div>

		<div class="divider" />

		<SectionHeader>SKILLS</SectionHeader>
		<div class="space-y-2">
			<div>
				<h3 class="text-xl font-bold">Languages/Technologies</h3>
				<p class="font-mono">
					{#each languages as language, index}
						{language}{index !== languages.length - 1 ? ', ' : '.'}
					{/each}
				</p>
			</div>
			<div>
				<h3 class="text-xl font-bold">Frameworks</h3>
				<p class="font-mono">
					{#each frameworks as framework, index}
						{framework}{index !== frameworks.length - 1 ? ', ' : '.'}
					{/each}
				</p>
			</div>
			<div>
				<h3 class="text-xl font-bold">Tools</h3>
				<p class="font-mono">
					{#each tools as tool, index}
						{tool}{index !== tools.length - 1 ? ', ' : '.'}
					{/each}
				</p>
			</div>
		</div>

		<div class="divider" />

		<SectionHeader>HISTORY</SectionHeader>
		<Timeline {jobHistory} />
	</div>
</div>
<div class="min-h-16" />

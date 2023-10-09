<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<div class="hero h-screen">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-8xl font-bold">SHAUN PRICE</h1>
			<p class="py-6 font-mono md:text-lg">
				<Typewriter interval={100} element="span" mode="loop" wordInterval={2500}>
					<span data-static>I Build</span>
					<span class="text-secondary"> Experiences For The Web </span>
					<span class="text-secondary"> Full Stack Applications </span>
					<span class="text-secondary"> Digital Solutions </span>
				</Typewriter>
			</p>
			<div
				class="flex flex-col space-y-2 items-center justify-center md:flex-row md:space-y-0 md:space-x-2"
			>
				<button class="btn btn-primary btn-lg w-52 text-2xl">CONTACT ME</button>
				<button class="btn btn-primary btn-lg btn-outline w-52 text-2xl">RESUME</button>
			</div>
			<div class="min-h-16" />
		</div>
	</div>
</div>

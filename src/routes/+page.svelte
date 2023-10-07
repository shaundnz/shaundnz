<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-8xl font-bold">SHAUN PRICE</h1>
			<p class="py-6 font-mono text-lg">
				<Typewriter interval={100} element="span" mode="loop" wordInterval={2500}>
					<span data-static>I Build</span>
					<span> Experiences For The Web </span>
					<span> Full Stack Applications </span>
					<span> Custom Digital Solutions </span>
				</Typewriter>
			</p>
			<button class="btn btn-primary btn-lg btn-wide text-2xl">CONTACT ME</button>
			<div class="min-h-16" />
		</div>
	</div>
</div>

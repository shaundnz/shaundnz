<script>
	import { fly } from 'svelte/transition';

	export let slidePageInFromRight = true;
</script>

<div
	in:fly={{ x: `${slidePageInFromRight ? '' : '-'}40vw`, duration: 250, delay: 250 }}
	out:fly={{ x: `${slidePageInFromRight ? '-' : ''}40vw`, duration: 250 }}
>
	<slot />
</div>

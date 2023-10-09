<script lang="ts">
	import GithubIcon from '~icons/mdi/Github';
	import OpenInNewIcon from '~icons/mdi/open-in-new';
</script>

<div>
	<div class="flex justify-between mb-2">
		<div>
			<h2 class="text-4xl font-bold mb-0.5">CAT WIKI</h2>
			<div class="badge badge-primary badge-outline font-mono">React</div>
			<div class="badge badge-primary badge-outline font-mono">Next.js</div>
		</div>
		<div>
			<ul class="menu menu-horizontal p-0 [&>li>*]:px-2">
				<li>
					<a class="tooltip" data-tip="Source Code">
						<GithubIcon class="text-xl" />
					</a>
				</li>
				<li>
					<a class="tooltip" data-tip="Live Demo">
						<OpenInNewIcon class="text-xl" />
					</a>
				</li>
			</ul>
		</div>
	</div>
	<p>
		One stop shop for all information related to our feline friends! Search for different breeds or
		browse them all!
	</p>
	<p>
		Created using NextJS's static site generation features for extremely fast load times. The
		website was built using a mobile first approach and is fully responsive with the help of the
		features provided by ChakraUI.
	</p>
</div>

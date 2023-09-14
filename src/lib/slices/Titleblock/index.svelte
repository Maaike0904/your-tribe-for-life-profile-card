<script>
	import { SliceSimulator } from '@slicemachine/adapter-sveltekit/simulator';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	export let slice;
</script>

<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1>{slice.primary.title[0].text}</h1>
</div>

<style>
	h1 {
		font-family: 'Montserrat';
		color: #4b0082;
	}
</style>

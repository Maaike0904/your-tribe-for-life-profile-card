<script>
	/** @type {import("@prismicio/client").Content.ParagraphtextSlice} */
	export let slice;
</script>

<!-- <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices
</section> -->

<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<p>{slice.primary.keytext}</p>
</div>

<style>
	p {
		font-family: 'Montserrat';
		color: lightcoral;
		size: 0.5em;
	}
</style>

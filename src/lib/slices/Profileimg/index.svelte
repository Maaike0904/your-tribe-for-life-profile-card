<script>
	/** @type {import("@prismicio/client").Content.ProfileimgSlice} */
	export let slice;
</script>

<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src={slice.primary.profileimg.url} width="300" height="230" />
</div>

<script>
	/** @type {import("@prismicio/client").Content.TitleblockSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1 src={slice.primary.title} alt="">Maaike</h1>
	<img src={slice.primary.profileimg} alt="" width="300" height="500" />
	<p src={slice.primary.keytext} alt="" />
	<a href="https://www.google.com">
		<button src={slice.primary.linkbutton}>Klik hier</button>
	</a>
</section>

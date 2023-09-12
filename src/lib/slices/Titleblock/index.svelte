<script>
	/** @type {import("@prismicio/client").Content.TitleblockSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1 src={slice.primary.title.url} alt="">Maaike</h1>
	<img src={slice.primary.profileimg.url} alt="" width="300" height="300" />
	<p src={slice.primary.keytext.url} alt="" />
	<a href="https://github.com/Maaike0904">
		<button src={slice.primary.linkbutton}>Klik hier</button>
	</a>
</section>

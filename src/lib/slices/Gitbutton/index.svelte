<script>
	/** @type {import("@prismicio/client").Content.GitbuttonSlice} */
	export let slice;
</script>

<button>
	<a href={slice.primary.linkbutton.url} />
	<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-brand-github"
			width="24"
			height="24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path d="M0 0h24v24H0z" stroke="none" /><path
				d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
			/>
		</svg>
	</div>
</button>

<style>
	button {
		color: lightyellow;
		border: 0;
		border-radius: 10px;
		font-style: none;
		font-family: 'Montserrat';
		background-color: lightcoral;
		list-style: none;
		cursor: pointer;
	}
</style>

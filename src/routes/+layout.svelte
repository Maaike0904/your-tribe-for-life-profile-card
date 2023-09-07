<script>
	import pico from '@picocss/pico';
</script>

<nav class="layout">
	<a prefetch href="/">My site</a>
</nav>

<main>
	<slot />
</main>

<footer>c Maaike Verplancke - 2023</footer>

<style>
	nav {
		background: purple;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	nav,
	footer {
		text-transform: uppercase;
		font-size: 0.7rem;
		letter-spacing: 0.1px;
		font-weight: 500;
	}

	:global(html) {
		background: lightsteelblue;
		overflow-y: scroll;
	}

	:global(.layout) {
		--width: 700px;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	main {
		margin-bottom: 5rem;
		margin-top: 5vw;
	}

	footer {
		text-align: center;
		margin: 3rem 0;
		color: purple;
	}
</style>

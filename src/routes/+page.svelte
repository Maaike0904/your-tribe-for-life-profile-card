<script>
	import * as prismic from '@prismicio/client';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;
</script>

<main>
	<section>
		<SliceZone slices={data.slices} {components} />
	</section>
</main>

<!-- STARLIGHT DEVINERS -->
<!-- <main>
	<div class="button_container">
		<a href="/" class="button"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="15"
				viewBox="0 0 25 15"
				fill="none"
			>
				<path
					d="M7.99995 14.0323C8.00295 13.2903 7.27445 12.1793 6.53622 11.2463C5.58709 10.0425 4.45134 8.99088 3.14759 8.18659C2.17002 7.58362 0.984362 7.00382 0.0283704 6.99994M0.0283704 6.99994C0.984362 7.00382 2.17568 6.43364 3.1571 5.83861C4.46733 5.04391 5.61156 4.00154 6.57041 2.80741C7.31617 1.87942 8.05366 0.772402 8.05666 0.0324082M0.0283704 6.99994L24.0282 7.09716"
					stroke="#E1C253"
				/>
			</svg></a
		>
	</div>
	<h1>Starlight deviners</h1>
	<section class="desktop-naast-elkaar">
		<section class="card-introduction">
			<img src="boogschutter-achterkant.png" class="card-back" />
			<div class="horoscope-introduction">
				<h2>Boogschutter</h2>
				<p>
					De levendige en openhartige Boogschutters zijn geboren natuurlijke leiders die achter
					alles aan gaan wat ze willen, ongeacht wat andere mensen van hen denken. Dit sterrenbeeld
					houdt van reizen en avontuur. Boogschutter is een optimistisch, positief denkend teken dat
					geassocieerd wordt met de zoektocht naar vrijheid van alle beperkingen, evenals idealisme,
					religie en filosofie.
				</p>
			</div>
		</section>
		<article class="students-same-horoscope">
			<h2>Studenten met hetzelde sterrenbeeld</h2>
			<div class="cards-front">
				<img src="Squad2A-Demi.jpg" />
				<img src="Squad2A-Maaike.jpg" />
				<img src="Squad2A-Ralph.jpg" />
				<img src="Squad2A-Sander.jpg" />
				<img src="Squad2A-Sanne.jpg" />
				<img src="Squad2A-Rosa.jpg" />
			</div>
		</article>
	</section>
</main>

<style>
	:root {
		--gold: #e1c253;
		--darkblue: #061528;
		--offwhite: #fffbea;
		--lightblue: #062968;
		background: url(sterren-achtergrond.jpg);
	}

	main {
		padding: 0.7em;
	}

	h1,
	h2 {
		font-family: 'Elsie';
		color: var(--offwhite);
		font-weight: 100;
	}

	p {
		font-family: 'montserrat';
		color: var(--offwhite);
	}
	/* BUTTON */
	.button_container {
		background: var(--darkblue);
		color: var(--gold);
		border-style: solid;
		border-width: 1px;
		border-color: var(--gold);
		width: 115px;
		height: 55px;
	}

	a.button {
		color: var(--gold);
		border: 1px solid var(--gold);
		width: 95px;
		height: 40px;
		padding: 10px 38px;
		margin: 8px 1px -45px 9.5px;
		cursor: pointer;
		font-weight: bold;
		font-size: 19px;
		font-family: 'Elsie';
		display: inline-block;
		text-decoration: none;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.card-introduction {
		display: grid;
		grid-auto-flow: column;
	}

	.horoscope-introduction {
		padding: 0.5em;
		margin-top: -1.5em;
	}

	.card-back {
		width: 140px;
	}

	/* .students-same-horoscope {
		width: 45%;
	} */

	img {
		width: 163px;
	}

	@media screen and (min-width: 1000px) {
		.card-introduction {
			width: 90%;
		}
		.horoscope-introduction {
			padding-left: 1.5em;
			margin-top: 0em;
		}
		.students-same-horoscope {
			width: 90%;
		}
		.desktop-naast-elkaar {
			display: grid;
			grid-auto-flow: column;
		}
	}
</style> -->
<!-- STARLIGHT DEVINERS -->

<style>
	main {
		width: 100%;
		height: 100vh;
		display: flex;
		background: lightyellow;
		position: relative;
	}

	section {
		width: 20em;
		height: fit-content;
		margin: auto;
		padding: 1em;
		/* background-color: #f4f4f44a; */
		border: 2px solid lightcoral;
		border-radius: 1em;
		opacity: 0;
		z-index: 1;
		animation: fade-in 0.9s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
	}

	@keyframes fade-in {
		0% {
			transform: translateY(1em);
			opacity: 0;
		}

		66% {
			transform: translateY(-0.33em);
		}

		100% {
			transform: translateY(0em);
			opacity: 1;
		}
	}
</style>

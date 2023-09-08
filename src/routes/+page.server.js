import { CreateClient } from '$lib/prismicio';
import { createClient } from '@prismicio/client';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const document = await client.getByID('page', 'homepage');

	return {
		document
	};
}

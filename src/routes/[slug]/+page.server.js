import { error } from '@sveltejs/kit';
import { horoscopes } from '../horoscopes';

export function load({ params }) {
	const horoscope = horoscopes.find((horoscope) => horoscope.slug === params.slug);
	console.log(horoscope);

	if (!horoscope) throw error(404);

	return {
		horoscope
	};
}

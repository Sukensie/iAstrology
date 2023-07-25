import { prisma } from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function load() {
	return {
		post: await prisma.blogPost.findMany({
			orderBy: {
				date: 'desc'
			}
		})
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	deletePost: async ({ url }) => {
		/*if(!window.confirm("Chcete opravu smazat tento příspěvek?")){
			return;
		}*/

		const id = url.searchParams.get('a');
		if(id === undefined || id === null){
			return fail(400, { incorrect: true })
		}

		await prisma.blogPost.delete({
			where: {
				id: id
			}
		})
	}
};


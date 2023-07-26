import { prisma } from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { _checkAuth } from '../../+layout.server';

export async function load({ cookies, params, url }) {

	_checkAuth(cookies);

	let page = Number(params.page)
	let limit = 4
	let take = limit
	
	return {
		post: await prisma.blogPost.findMany({
			take: take,
			skip: ((page - 1) * limit),
			orderBy: {
				date: 'desc'
			},
			
		}),
		total: await prisma.blogPost.count(),
		limit: limit
	};
}

/** @type {import('../$types').Actions} */
export const actions = {
	deletePost: async ({ url }) => {

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


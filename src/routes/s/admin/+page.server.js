import { prisma } from '$lib/server/prisma.js';

export async function load() {
	return {
		post: await prisma.blogPost.findMany({})
	};
}

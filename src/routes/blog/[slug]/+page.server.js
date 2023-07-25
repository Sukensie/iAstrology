import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma.js';

export async function load({ params }) {
	
	const getPost = async () => {
		const post = await prisma.blogPost.findUnique({
			where: {
				id: params.slug
			  },
			select: {
			   title: true,
			   text: true
			}
		})

		if(!post){
			throw error(404, "Article not found");
		}

		return post;
	}

	return {
		post: getPost(), 
	};
}
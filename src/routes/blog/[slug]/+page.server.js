import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma.js';
import { json } from '@sveltejs/kit'


export async function load({ params }) {
	
	const getPost = async () => {
		const post = await prisma.blogPost.findUnique({
			where: {
				id: params.slug
			  },
			select: {
			   title: true,
			   text: true,
			   photo: true,
			   seen: true,
			   date: true
			}
		})

		if(!post){
			throw error(404, "Article not found");
		}

		return post;
	}
	
	//increment post view count
	const incrementViews = async () => { try {
		await prisma.blogPost.update({
			where: {
				id: params.slug
			},
			data: {
				seen: post.seen+1
			}
		})
		} catch (error) {
			return json({ error: error })
		}
	}

	let post = await getPost();
	await incrementViews();

	return {
		post: post, 
	};
}
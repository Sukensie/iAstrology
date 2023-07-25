import { prisma } from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {

    create: async ({ request }) => {
        const form = await request.formData();
    
        const title = form.get('title');
        let photo = form.get('photo');
        const text = form.get("text");

        if (!title || !text ) {
            return fail(400, { text, photo, title, missing: true });
        }

        if(!photo){
            photo = " ";
        }
        
        if (typeof title != "string" || typeof text != "string" || typeof photo != "string") {
            return fail(400, { incorrect: true })
        }

        const seen = 0;
        const date = new Date();

        await prisma.blogPost.create({
            data: {
                date,
                seen,
                title,
                photo,
                text
            }
        })

        throw redirect(303, './admin')
    },

    edit: async ({ request, url }) => {
        const form = await request.formData();
    
        const title = form.get('title');
        let photo = form.get('photo');
        const text = form.get("text");

        if (!title || !text ) {
            return fail(400, { text, photo, title, missing: true });
        }

        if(!photo){
            photo = " ";
        }
        
        if (typeof title != "string" || typeof text != "string" || typeof photo != "string") {
            return fail(400, { incorrect: true })
        }

        const id = url.searchParams.get('a');
        if(id === undefined || id === null){
            return fail(400, { incorrect: true })
        }

        await prisma.blogPost.update({
            where: {
                id: id
            },
            data: {
                title,
                photo,
                text
            }
        })
        
        throw redirect(303, './admin')
    }
};

export async function load({ url }) {
	
    if(url.searchParams.get('a') == 'create'){
        return{
            post: undefined
        };
    }

    const getPost = async () => {
        const post = await prisma.blogPost.findUnique({
            where: {
                id: url.searchParams.get('a')
                },
            select: {
                title: true,
                photo: true,
                text: true,
                id: true
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

import { prisma } from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        
        const title = form.get('title');
        let photo = form.get('photo');
        const text = form.get("text");

        console.log(title, photo, text);

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
    }
};

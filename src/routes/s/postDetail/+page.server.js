import { prisma } from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { _checkAuth } from '../+layout.server';

function stripTags(tags) {
    tags = tags.replaceAll(',', ' ')

    tags = tags.trim()
    var regex = /\s+/g;
    tags = tags.replaceAll(regex, ' ')

    var tagsArray = tags.split(" "); 

    for(var i = 0; i < tagsArray.length; i++){
        if(tagsArray[i][0] !== '#'){
            tagsArray[i] = '#' + tagsArray[i]; 
        }
    }
    
    return tagsArray
}


/** @type {import('./$types').Actions} */
export const actions = {

    create: async ({ request }) => {
        const form = await request.formData();
        const title = form.get('title');
        const perex = form.get('perex');
        const tags = form.get('tags');
        const text = form.get('text');

        let photo = form.get('photo');
        

        if (!title || !text || !perex || !tags ) {
            return fail(400, { text, photo, title, tags, perex, missing: true });
        }

        if(!photo){
            photo = " ";
        }
        
        if (typeof perex != "string" || typeof title != "string" || typeof text != "string" || typeof photo != "string") {
            return fail(400, { incorrect: true })
        }

        var tagsArray = stripTags(tags);

        const seen = 0;
        const date = new Date();

        await prisma.blogPost.create({
            data: {
                date,
                seen,
                title,
                perex: perex,
                tags: tagsArray,
                photo,
                text
            }
        })
        
        throw redirect(303, './admin')
    },

    edit: async ({ request, url }) => {
        const form = await request.formData();
    
        const title = form.get('title');
        const perex = form.get("perex");
        const tags = form.get("tags");
        const text = form.get("text");

        let photo = form.get('photo');

        if (!title || !text || !perex || !tags ) {
            return fail(400, { text, photo, title, tags, perex, missing: true });
        }

        if(!photo){
            photo = " ";
        }
        
        if (typeof perex != "string" || typeof title != "string" || typeof text != "string" || typeof photo != "string") {
            return fail(400, { incorrect: true })
        }

        var tagsArray = stripTags(tags);

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
                perex: perex,
                tags: tagsArray,
                photo,
                text
            }
        })
        
        throw redirect(303, './admin')
    }
};

export async function load({ url, parent, cookies }) {

    _checkAuth(cookies);

    if(url.searchParams.get('a') == 'create'){
        return{
            post: undefined
        };
    }

    const getPost = async () => {
        if(!url.searchParams.get('a')){
            throw error(404, "An error occured");
        }

        const post = await prisma.blogPost.findUnique({
            where: {
                id: url.searchParams.get('a')
            },
            select: {
                title: true,
                photo: true,
                perex: true,
                tags: true,
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

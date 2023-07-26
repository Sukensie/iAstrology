import { prisma } from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

export async function load( {url, cookies} ) {
    
    if(url.searchParams.get('signout') !== null)
    {
        await cookies.delete('session_id', { path: '/' });
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ( {request, cookies} ) => {
        const data = await request.formData()

        const username = data.get('username')
        const password = data.get('password')
        let result

        try{
            result = await prisma.admin.findUniqueOrThrow({
                where: {
                  username: username?.toString(),
                },
            })
        }
        catch(err){
            return fail(400, { incorrect: true })
        }
		
        //const salt = bcrypt.genSaltSync(5);
        //const hash = bcrypt.hashSync(password, salt); 
        //console.log(hash)   

        const match = await bcrypt.compare(password, result.password);
        
        if(match) {
            const id = uuidv4;
            cookies.set('session_id', id, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: true,
                maxAge: 60 * 60 * 24 * 7 // one week
            });

            throw redirect(303, "./admin")
        }
        else{
            return fail(400, { incorrect: true })
        }
	}
};

// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';  

export const _checkAuth = (cookies) => {
    const sessionId = cookies.get('session_id');
    
    if (!sessionId) {
        throw redirect(303, '/s/login');
    }
}


import { _checkAuth } from "./s/+layout.server"; 

export const load = ({ cookies }) => {
    let visible = false
    if(cookies.get('session_id')){
        visible = true;
    }

    return{
        visible: visible
    }
}


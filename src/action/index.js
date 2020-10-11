import {AUTH_USER,AUTH_ERROR} from "./type";
import axios from 'axios';

export const signup = (formProps,callback)=>async (dispatch)=>{

    try {
        const request = await axios.post('http://localhost:3090/signup', formProps);
        dispatch({type: AUTH_USER, payload: request.data.token})
        localStorage.setItem('auth_token',request.data.token);
        callback();
    }catch (e){
        console.log(e);
        dispatch({type:AUTH_ERROR, payload: 'Email in use'})
    }
}
export const signin = (formProps,callback)=>async (dispatch)=>{

    try {
        const request = await axios.post('http://localhost:3090/signin', formProps);
        dispatch({type: AUTH_USER, payload: request.data.token})
        localStorage.setItem('auth_token',request.data.token);
        callback();
    }catch (e){
        console.log(e);
        dispatch({type:AUTH_ERROR, payload: 'Invalid login credentials'})
    }
}

export const signout = () => {
    localStorage.removeItem('auth_token');
    return({type:AUTH_USER,payload:''})

}
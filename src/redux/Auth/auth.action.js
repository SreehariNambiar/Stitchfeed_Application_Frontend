import axios from "axios";
import {API_BASE_URL} from '../../config/api'
import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE} from './auth.actionType'
import {api} from '../../config/api'
import { getAllPostAction } from "../Post/post.action";
export const loginUserAction = (loginData) => async(dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data)

        if(data.token){
            localStorage.setItem('jwt', data.token)
            
        }
        console.log("login successfull", data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.token
        })
        dispatch(getAllPostAction())
    } catch (error) {
        console.log("-------", error);
        dispatch({type:LOGIN_FAILURE, payload:error})
    }
}



export const registerUserAction = (loginData) => async(dispatch) => {
    dispatch({type: REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data)

        if(data.token){
            localStorage.setItem('jwt', data.token)
            
        }
console.log("register successfull", data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.token
        })

    } catch (error) {
        console.log("-------", error);
        dispatch({type:REGISTER_FAILURE, payload:error})
    }
}

export const getProfileAction = (jwt) => async(dispatch) => {
    dispatch({type: GET_PROFILE_REQUEST})
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
    })

console.log("profile ---------", data);
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log("profile -------", error);
        dispatch({type:GET_PROFILE_FAILURE, payload:error})
    }
}


export const updateProfileAction = (reqData) => async(dispatch) => {
    dispatch({type: UPDATE_PROFILE_REQUEST})
    try {
        const {data} = await api.put(`${API_BASE_URL}/api/users`, reqData)

console.log("update profile ---------", data);
        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log("udate profile -------", error);
        dispatch({type:UPDATE_PROFILE_FAILURE, payload:error})
    }
}

export const searchUser = (query) => async(dispatch) => {
    dispatch({type: SEARCH_USER_REQUEST})
    try {
        const {data} = await api.get(`${API_BASE_URL}/users/search?query=${query}`)

console.log("search user ---------", data);
        dispatch({
            type: SEARCH_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log("profile -------", error);
        dispatch({type:SEARCH_USER_FAILURE, payload:error})
    }
}
import { api } from "../../config/api"
import { API_BASE_URL } from "../../config/api"
import { CREATE_CHAT_FAILURE, CREATE_CHAT_REQUEST, CREATE_CHAT_SUCCESS, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS, GET_ALL_CHATS_FAILURE, GET_ALL_CHATS_REQUEST, GET_ALL_CHATS_SUCCESS } from "./mssage.actionType"

export const createMessage = (message) => async (dispatch) => {
    dispatch({type: CREATE_MESSAGE_REQUEST})
    try {
        const {data} = await api.post(`${API_BASE_URL}/api/messages/chat/${message.chatId}`, message)
        dispatch({type: CREATE_MESSAGE_SUCCESS, payload: data})
        console.log("create message", data)
    } catch (error) {
        console.log("error", error)
        dispatch({type: CREATE_MESSAGE_FAILURE, payload: error})
    }
}

export const createChat = (chat) => async (dispatch) => {
    dispatch({type: CREATE_CHAT_REQUEST})
    try {
        const {data} = await api.post(`${API_BASE_URL}/api/chats`, chat)
        dispatch({type: CREATE_CHAT_SUCCESS, payload: data})
        console.log("create chat", data)
    } catch (error) {
        console.log("error", error)
        dispatch({type: CREATE_CHAT_FAILURE, payload: error})
    }
}

export const getAllChats = () => async (dispatch) => {
    dispatch({type: GET_ALL_CHATS_REQUEST})
    try {
        const {data} = await api.get(`${API_BASE_URL}/api/chats`)
        dispatch({type: GET_ALL_CHATS_SUCCESS, payload: data})
        console.log("get all chats", data)
    } catch (error) {
        console.log("error", error)
        dispatch({type: GET_ALL_CHATS_FAILURE, payload: error})
    }
}

// export const messageAction = {
//     createMessage,
//     createChat,
//     getAllChats
// }   
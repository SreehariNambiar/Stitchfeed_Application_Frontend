import { CREATE_CHAT_FAILURE, CREATE_CHAT_REQUEST, CREATE_CHAT_SUCCESS, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS, GET_ALL_CHATS_FAILURE, GET_ALL_CHATS_REQUEST, GET_ALL_CHATS_SUCCESS } from "./mssage.actionType"

const initalState = {
    chats:[],
    messages:[],
    error:null,
    loading:false,
    message:null
}
export const messageReducer = (state = initalState, action) => {
    switch(action.type) {
        case CREATE_MESSAGE_REQUEST:
            return {...state, message:action.payload}
        case CREATE_CHAT_REQUEST:
            return {...state, chats:[action.payload, ...state.chats]}
        case GET_ALL_CHATS_SUCCESS:
            return {...state, chats:action.payload}

        // case GET_ALL_CHATS_REQUEST:
        //     return {...state, loading:true, error:null}
        // case CREATE_MESSAGE_SUCCESS:
        //     return {...state, messages:[action.payload, ...state.messages], loading:false, error:null}
        // case CREATE_CHAT_SUCCESS: 
        //     return {...state, chats:[action.payload, ...state.chats], loading:false, error:null}
        // case CREATE_MESSAGE_FAILURE:
        // case CREATE_CHAT_FAILURE:
        // case GET_ALL_CHATS_FAILURE:
        //     return {...state, loading:false, error:action.payload}
        default:
            return state
    }
}
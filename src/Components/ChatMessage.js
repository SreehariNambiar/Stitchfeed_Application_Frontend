import React from 'react'
import './Styles/ChatMessage.css'
import { useSelector } from 'react-redux'
const ChatMessage = ({item}) => {
    const {message, auth} = useSelector((store) => store)
    console.log(item)
    console.log(auth)
    const isReqUserMessage = auth.user?.id === item.user?.id
  return (
    <div  className='chat-messages'>
        <div  className={ `chat-messages-1 ${isReqUserMessage ? 'chat-messages-1a'  : 'chat-messages-1b'}`}> 
                <p style={{"background":"none"}} >{item.content}</p> 
                {
                    item.image && <img className='message-image' src="https://images.pexels.com/photos/5475178/pexels-photo-5475178.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"/>
                }
        </div>
    </div>
  )
}

export default ChatMessage
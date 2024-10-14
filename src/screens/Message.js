import React, {useState, useEffect} from 'react'
import './Styles/Message.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBar from '../Components/SearchBar'
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import ProfileMessage from '../Components/ProfileMessage'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideocamIcon from '@mui/icons-material/Videocam';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ChatMessage from '../Components/ChatMessage';
import { createMessage, getAllChats } from '../redux/Message/message.action';
import { uploadToCloud } from '../utils/uploadToCloud';
const messages = [1,1,1,1]
const Message = () => {
  const {auth, message} = useSelector((store) => store)
  const navigate = useNavigate()
  const [showChat, setShowChat] = useState(false);
  const dispatch = useDispatch()
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    console.log("message", message)
    dispatch(getAllChats())
    
  },[])

  console.log("current chat ---------", currentChat);
  console.log("chats ---------", messages);

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content:value,
      image:selectedImage

    }
    dispatch(createMessage(message))
    setMessages([...messages, message])
    console.log("message after", message.content)
  }
  const handleSelectImage = async(e) => {
    setLoading(true);
    console.log("handle select image")
    const imgUrl = await uploadToCloud(e.target.files[0], "image")
    setSelectedImage(imgUrl)
    setLoading(false)
  }

  // useEffect(() => {
    
  //   setMessages([...messages, message.message])
  //   console.log("message", message.message)
  // },[message.message])

  return (
    <div className='message'>
      <div className='message-1'>
        <div className='message-left'>
            <div className='message-left-1'>
                <div className='message-left-1-1'>
                <div className='message-arrow' onClick = {() => navigate(-1)}>
                    <ArrowBackIcon sx={{fontSize:"3em", backgroundColor:"none"}}/>
                    </div>
                    <p>Messages</p>
                </div>
                <div className='message-left-1-2'>
                    <SearchBar placeholder='search groups, trends ...'/>
                </div>
                <div className='message-left-1-3'>
                {
                  message.chats.map((item) => {
                      return(
                        <div onClick={() => 
                        {
                          setCurrentChat(item)
                          setMessages(item.messages)
                        }
                        
                        }>
                          <ProfileMessage messagess={"Hello world"} chat={item}/>
                          </div>
                      )
                  })
                }
                </div>

            </div>
        </div>
        <div className='message-right'>
        {currentChat ? 
          <div className='message-right-11'>
          
              <div className='message-right-111'> 
              <div style={{"background":"none"}} className='profileBlock_1'>
            <img src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
            <div style={{"background":"none"}}>
            <div className='name_profile' style={{"background":"none", "color":"#000"}}>{auth.user.id === currentChat.users[0].id? currentChat.users[1].firstName + " " + currentChat.users[1].lastName : currentChat.users[0].firstName + " " + currentChat.users[0].lastName}</div>
      
        </div>

        </div>
        <div className='message-right-111-1'>
        <AddIcCallIcon sx={{fontSize:"1.5em", background:"none"}}/>
            <VideocamIcon sx={{fontSize:"1.5em", background:"none"}}/>
        </div>
              </div>
              <div className='message-right-112'>
              {
                messages.map((item) => {
                  return(
                    <ChatMessage item={item}/>
                  )
                })
              }
                
              </div>
              <div className='message-right-113'>
                <div className='message-input'>
                <input onKeyPress={(e) => {
                  if(e.key === 'Enter' && e.target.value){
                    handleCreateMessage(e.target.value)
                }} }
                type="text" placeholder="Type your message here"/>
                </div>
                <div className='message-input-icon'>
                <input type='file' accept='image/*' onChange={handleSelectImage} className='hidden' style={{display:"none"}} id='image-input'/>
                <label htmlFor='image-input'>
              <AddPhotoAlternateIcon sx={{fontSize:"4em", background:"none"}}/>
              </label>
                </div>
              </div>
          </div>
        : 
          <div className='message-right-1'>
                <QuestionAnswerIcon sx={{fontSize:"30em", backgroundColor:"none"}}/>
                <p>No chat selected</p>
              </div>
              }
             
        </div>
      </div>
    </div>
  )
}

export default Message
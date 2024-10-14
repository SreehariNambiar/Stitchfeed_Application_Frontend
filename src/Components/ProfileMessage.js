import React from 'react'
import './Styles/ProfileMessage.css'
import { useSelector } from 'react-redux'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const ProfileMessage = ({messagess, chat}) => {
  const {message, auth} = useSelector((store) => store)
    
  return (
    <div style={{"background":"none"}}  className='profileMessage'>
        <div style={{"background":"none"}}  className='profileBlock_1'>
            <img src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
            <div>
            {/* <div style={{"background":"none"}}  className='name_profile'>{auth.user?.firstName + " " + auth.user?.lastName}</div> */}
            <div style={{"background":"none"}}  className='name_profile'>{auth.user.id === chat.users[0].id? chat.users[1].firstName + " " + chat.users[1].lastName : chat.users[0].firstName + " " + chat.users[0].lastName }</div>
            <div style={{"background":"none"}}  className='username_profile'>{messagess}</div>
        </div>
    
        </div>
        <div style={{"background":"none"}}  >
          <MoreHorizIcon sx={{fontSize:"1.5em", background:"none"}}/>
        </div>
        
    </div>
  )
}

export default ProfileMessage
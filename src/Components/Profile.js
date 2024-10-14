import React, {useState} from 'react'
import './Styles/Profile.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from 'react-redux'
const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {auth} = useSelector((store) => store)
  
  return (
    <div className='profileBlock'>
        <div className='profileBlock_1'>
            <img src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
            <div>
            <div className='name_profile'>{auth.user?.firstName + " " + auth.user?.lastName}</div>
            <div className='username_profile'>@{auth.user?.firstName.toLowerCase()}</div>
        </div>
        </div>
   
        <div onClick={() => setIsOpen(!isOpen)}>
            <MoreHorizIcon/>
        </div>
        {isOpen && <div className='modal-z'>Profile</div>}
    </div>

  )
}

export default Profile
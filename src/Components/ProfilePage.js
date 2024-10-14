import React,{useState} from 'react'
import './Styles/ProfilePage.css'
import { useParams } from 'react-router-dom'
import ProfileSeconder from './ProfileSeconder'
import { useSelector } from 'react-redux'
import ProfileModal from './ProfileModal'
const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
    const {id} = useParams()
    const auth = useSelector((store) => store.auth);

  

  const handleOpen = () => {
    console.log("pressed")
      setIsOpen(!isOpen);
  };

  
  return (
    <div className = 'profilePage-x'>
    <div className='profilePage'>
    <div className='image-back'>
    <img src="https://cdn.pixabay.com/photo/2023/07/19/12/40/trees-8136806_1280.png"/>
    </div>
    <div className='profile-page-2'>
      <div className='profile-page-2-img'>
        <img className='add-z' src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
      </div>
      {true ? <button className='edit-button' onClick={handleOpen}>
        <p>Edit Profile</p>
        </button> : <button className='edit-button'>
        <p>Follow</p>
      </button> 
      }
      {isOpen && <ProfileModal setIsOpen={setIsOpen}/>}
    </div>
    <div className='profile-page-3'>
    <div>
    <div className='profile-page-3-1-1'>
      <p>{auth.user?.firstName + " " + auth.user?.lastName}</p>
      <p>@{auth.user?.firstName.toLowerCase()}</p>
      </div>
      <div className='profile-page-3-2'>
        <ul>
          <li>41 posts</li>
          <li>71 followers</li>
          <li>22 following</li>
        </ul>
      </div>

      </div>
      <div className='fffff'>
        <p>i am awesome</p>
      </div>
    </div>

    </div>
    <div>
      <ProfileSeconder/>
    </div>
    </div>
  )
}

export default ProfilePage
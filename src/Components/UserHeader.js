import { ReactComponent as Down} from "../Assets/Images/down.svg"
import Dropdown from './Dropdown'

import './Styles/UserHeader.css'
const UserHeader = () => {
  
  return (
    <div className='user_header'>
    <div className="post__avatars">
    {/* <Avatar src={avatar} /> */}
    <div className='textx'>
    <div className="name">
    @Sreehari
    </div>
    <div className='sub_textx'>
    <ul>
    <li className='upvotes'>
        2.5k upvotes
    </li>
    <li className='groupsx'>
        50 groups
    </li>
    </ul>
    </div>
    </div>
    <img  className='userIcons' src='https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg'/>
  </div>
    <div className='iso'>
      <Down className='svggg'/>
      <Dropdown/>
    </div>
  </div>
  )
}

export default UserHeader
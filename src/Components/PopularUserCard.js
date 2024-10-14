import React from 'react'
import './Styles/PopularUserCard.css'
const PopularUserCard = ({username}) => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <div>
          <div className="first-card">
      <div className='first-1-card'>
        <div className="post__avatar-card">
          {/* <Avatar src={avatar} /> */}
          <img  className='userIcons' src='https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg'/>
        </div>
        <div className="post_header-card">
            <p><span className='h'>@{truncate(username,10)}</span></p>
            <p className='time-card'>follows you</p>
        </div>
        </div>
        <div>
            Follow
          </div>
        </div>
       
    </div>
  )
}

export default PopularUserCard
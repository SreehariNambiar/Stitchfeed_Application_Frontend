import React from 'react'
import './Styles/SideMenu.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { navigationMenu } from './SideNavigation';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideMenu = () => {
    const auth = useSelector((store) => store.auth)
 const navigate = useNavigate();
 const handleNavigate = (item) => {
    if(item.title === "Profile"){
        navigate(`/profile/${auth.user?.id}`)
    }
    else if(item.title === "Home"){
        navigate(`/`)
    }
    else if(item.title === "Messages"){
        navigate(`/message`)
    }
 }
  return (
    <div className='activity'>
    <div className="head">
        <ul>
        {
            navigationMenu.map((item) => {
                return(
                    <li onClick = {() => handleNavigate(item)}>{item.icon} {item.title}</li>
                )
            })
        }
            {/* <li><HomeIcon className='iiix'/> Home</li>
            <li><ExploreIcon className='iiix'/> Reels</li>
            <li><AddCircleOutlineIcon className='iiix'/> Create Reels</li>
            <li><NotificationsIcon className='iiix'/> Notfications</li>
            <li> <MessageIcon className='iiix'/> Messages</li>
            <li><ListAltIcon className='iiix'/> Lists</li>
            <li><PeopleIcon className='iiix'/> Communities</li>
            <li><AccountCircleIcon className='iiix'/> Profile</li> */}
        </ul>
    </div>
    </div>
  )
}

export default SideMenu
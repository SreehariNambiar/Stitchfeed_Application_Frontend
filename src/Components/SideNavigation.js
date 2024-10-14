import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const navigationMenu = [
    {
        title:"Home",
        icon:<HomeIcon className='iiix'/>,
        path:"/"
    },
    {
        title:"Reels",
        icon:<ExploreIcon className='iiix'/>, 
        path:"/"
    },
    {
        title:"Create Reels",
        icon:<AddCircleOutlineIcon className='iiix'/>,
        path:"/"
    },
    {
        title:"Notifications",
        icon:<NotificationsIcon className='iiix'/> ,
        path:"/"
    },
    {
        title:"Messages",
        icon:<MessageIcon className='iiix'/>  ,
        path:"/message"
    },
 
    {
        title:"Lists",
        icon:<ListAltIcon className='iiix'/>,
        path:"/"
    },
    {
        title:"Communities",
        icon:<PeopleIcon className='iiix'/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon className='iiix'/> ,
        path:"/profile"
    }
]
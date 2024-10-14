import React,{useState, useEffect} from 'react'
import './Styles/ProfileSeconder.css'
import Stitchx from './Stitchx'
import UserReelsCard from './UserReelsCard'
import { getUsersPostAction } from '../redux/Post/post.action'
import { useDispatch, useSelector } from 'react-redux';
const tabs = [
    {value:"post", name:"Post"},
    {value:"reels", name:"Reels"},
    {value:"saved", name:"Saved"},
    {value:"repost", name:"Repost"}
]

const posts = [1,1,1,1,1]
const reels = [1,1,1,1,1]
const saved = [1,1,1,1,1]
const repost = [1,1,1,1,1]
const ProfileSeconder = () => {
    const {post} = useSelector(store => store)
    const {auth} = useSelector((store) => store)
    const dispatch = useDispatch()
    const [show,setShow] = useState(false);
    const [btnState, setBtnState] = useState(true);
    const [btnState1, setBtnState1] = useState(false);
    const [btnState2, setBtnState2] = useState(false);
    const [btnState3, setBtnState3] = useState(false);
    const handleClick1 = () => {
        setBtnState(true);
        setBtnState1(false);
        setBtnState2(false)
        setBtnState3(false)
        setShow(false);

    }
    let toggleClassCheck1 = btnState ? 'activeE': '';
    const handleClick2 = () => {
        setBtnState(false);
        setBtnState1(true);
        setBtnState2(false);
        setBtnState3(false);
        setShow(true);

    }
    let toggleClassCheck2 = btnState1 ? 'activeE': '';

    const handleClick3 = () => {
        setBtnState(false);
        setBtnState1(false);
        setBtnState2(true);
        setBtnState3(false);
        setShow(true);

    }

    let toggleClassCheck3 = btnState2 ? 'activeE': '';

    const handleClick4 = () => {
        setBtnState(false);
        setBtnState1(false);
        setBtnState2(false);
        setBtnState3(true);
        setShow(true);

    }
    useEffect(() => {
        console.log(post.posts)
        dispatch(getUsersPostAction(auth.user?.id))
    }, [])
    let toggleClassCheck4 = btnState3 ? 'activeE': '';
   

  return (
    <div className='profileSeconder'>
         <div className="trendsS">
            <ul>
                <li className={`groupsS ${toggleClassCheck1}`} onClick={handleClick1}>Posts</li>
                <li className={`interestsS ${toggleClassCheck2}`} onClick={handleClick2}>Reels</li>
                <li className={`interestsS ${toggleClassCheck3}`} onClick={handleClick3}>Saved</li>
                <li className={`interestsS ${toggleClassCheck4}`} onClick={handleClick4}>Repost</li>
                
            </ul>
        </div>
        <div className='profileSeconder-2'>
            {btnState ? <div className='profile-Seconder-2-post'> 
            {
                post.posts.map((item) => {
                    return(
                        <div>
                        <Stitchx item={item}/>
                        </div>
                    )
                })
            }
            
            </div> : ""}
            {btnState1 ? 
                <div className='profile-Seconder-2-reels'> 
            {
                reels.map((item) => {
                    return(
                        <div className='profile-Seconder-2-reels-card'>
                        <UserReelsCard/>
                        </div>
                    )
                })
            }
            
            </div> 
            : ""}
            {btnState2 ?    <div className='profile-Seconder-2-saved'> 
            {
                post.posts.map((item) => {
                    return(
                        <div>
                        <Stitchx item={item}/>
                        </div>
                    )
                })
            }
            
            </div>  : ""}
            {btnState3 ? <div> Repost </div> : ""}
        </div>
    </div>
  )
}

export default ProfileSeconder
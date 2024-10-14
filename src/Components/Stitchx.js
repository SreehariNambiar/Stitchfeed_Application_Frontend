import React, { useState } from 'react'
import './Styles/Stitchx.css'
import { ReactComponent as Arrow } from "../Assets/Images/Arrow.svg"
import { ReactComponent as Comment } from "../Assets/Images/comment.svg"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction, likePostAction } from '../redux/Post/post.action';
import { isLikedByReqUser } from '../utils/isLikedByReqUser';
const Stitchx =({item}) => {
  const dispatch = useDispatch();
  const {post, auth} = useSelector(store => store)
  const [showComments, setShowComments] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleCreateComment = (content) => {
    const reqData = {
      postId:item.id,
      data:{
        content
      }
    }
    dispatch(createCommentAction(reqData))
}

const handleLikePost = () => {
  dispatch(likePostAction(item.id))
  setLiked(!liked);
}
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
}
    return (
      <div className="post">
      <div className="first">
      <div className='first-1'>
        <div className="post__avatar">
          {/* <Avatar src={avatar} /> */}
          <img  className='userIcons' src='https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg'/>
        </div>
        <div className="post_header">
            <p><span className='h'>@{truncate(item.user.firstName,10)}</span> stitched in <span className='h'>#hollywood_movies</span></p>
            <p className='time'> : 15 hr</p>
        </div>
        </div>
        <div>
            {true ? <TurnedInIcon/> : <TurnedInNotIcon/>}
          </div>
        </div>
        <div className='second'>
        <div className="post__body">
        <div className="post__header">
            <div className="post__headerDescription">
              {/* <p>{text}</p> */}
              <p>{item.caption}</p>
            </div>
          </div>
        <img src={item.image} alt=""/>
        </div>
        <ul className="post__footer">
           {/* <li><Arrow className='svg'/></li> */}
           

           {/* <li><div>
           <Arrow className='svgg'/>
           <p>1.25k</p>
           </div></li>
           <li><div>
           <Comment className='svgg'/>
           <p>1.25k</p>
           </div></li> */}
           <li onClick={handleLikePost}>
           {isLikedByReqUser(auth.user.id, item) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
           {/* <p>1.25k</p> */}
           </li>
           <li>
            <ShareIcon/>
            {/* <p>1.25k</p> */}
           </li>
           <li onClick={() => setShowComments(!showComments)}>
            <ChatBubbleIcon/>
            {/* <p>1.25k</p> */}
           </li>
          </ul>
        
          </div>
          {showComments &&  
          <div className='stitchx-comment-section'>
          <section className='stitchx-comments'>
          <div className='stitchx-comments-1'>
          <img className='userIconss' src='https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg'/>
          {/* <ChatBubbleIcon/> */}
          <input onKeyPress = {(e) => {
            if(e.key === 'Enter'){
              handleCreateComment(e.target.value)
              console.log("pressed", e.target.value)
            }
          }} className='comment' type='text' placeholder='Write a comment'/>
          
          </div>
        <div onClick={() => setShowAllComments(!showAllComments)} className='show-all-comments'>
        <p>{showAllComments ? "Hide Comments" : "All Comments"}</p>
        </div>
        
     
          </section>
          <section className='stitchx-comments-2x-all-comments'>
          <div className='stitchx-comments-2-all-comments'>
        {showAllComments && 
        item.comments.map((comment) => {
          return(
            <div className='stitchx-comments-2'>
        {/* <h1 className='all-comments'>All comments</h1> */}
          <div className='stitchx-comments-2-1'>
          
            <div style={{"background":"none"}} className='stitchx-comments-2-1-1'>
            <img className='userIconss' src='https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg'/>
            <p>{comment.content}</p>    
            </div>
          </div>

          </div>
          )
        })
        
        }
        
</div>
          </section>
          </div>
          }
         
          
      </div>
    );
  }


export default Stitchx;

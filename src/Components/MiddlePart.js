import React, { useEffect, useState } from 'react'
import './Styles/MiddlePart.css'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotesIcon from '@mui/icons-material/Notes';
import Stitchx from './Stitchx';
import PostModal from './PostModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostAction } from '../redux/Post/post.action';
const story = [1,1,1,1,1]
const MiddlePart = () => {
    const dispatch = useDispatch()
    const {post} = useSelector(store => store)
    const {auth} = useSelector((store) => store)
    const [open, setOpen] = useState(false);
    console.log("post stor", post);
    const handlePostModal = () => {
        console.log("handle post modal")
    }

    useEffect(() => {
        dispatch(getAllPostAction())
    }, [post.newComment])
  return (
   
    <div className='middle-part'>
    <section>
    <div>
        <div className='add-profile'>
    <div className='add'><AddIcon sx={{fontSize:"3em", backgroundColor:"none"}} className='add-icon'/></div>
    <p>New</p>
        </div>
        </div>
        {
            story.map((item) => {
                return(
                    <div>
                    <StoryCircle/>
                    </div>
                )
            })
        }
        </section>
        <div className='card' onClick={() => setOpen(!open)}>
        <div>
    <img src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg" className='adds' />

        </div>
        <div className='add-profiles'>
            <div>
                <input type="text" placeholder="Create new post"/>
            </div>
            <div>
                <ul>
                    <li onClick={handlePostModal}> <CropOriginalIcon/> media</li>
                    <li onClick={handlePostModal}> <VideocamIcon/>video</li>
                    <li onClick={handlePostModal}> <NotesIcon/> Write article</li>
                </ul>
            </div>

        </div>
        </div>
        <div>
        {post.posts.map((item) => {
            return(
                <Stitchx item={item}/>
            )
        })}
            {/* <Stitchx username="@adam" text="This is a planet and it is made by us " image="https://media4.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=790b76119f83d7fb5633d4a8c24e81ab52afabdedc5ce6a0&rid=giphy.gif&ct=g"/>
            <Stitchx username="@adam" text="This is a planet and it is made by us " image="https://media4.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=790b76119f83d7fb5633d4a8c24e81ab52afabdedc5ce6a0&rid=giphy.gif&ct=g"/>
            <Stitchx username="@adam" text="This is a planet and it is made by us " image="https://media4.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=790b76119f83d7fb5633d4a8c24e81ab52afabdedc5ce6a0&rid=giphy.gif&ct=g"/>
            <Stitchx username="@adam" text="This is a planet and it is made by us " image="https://media4.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=790b76119f83d7fb5633d4a8c24e81ab52afabdedc5ce6a0&rid=giphy.gif&ct=g"/>
            <Stitchx username="@adam" text="This is a planet and it is made by us " image="https://media4.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=790b76119f83d7fb5633d4a8c24e81ab52afabdedc5ce6a0&rid=giphy.gif&ct=g"/> */}
        </div>
        {open ? <PostModal setOpen={setOpen}/> : ""}
    </div>
   
  )
}

export default MiddlePart
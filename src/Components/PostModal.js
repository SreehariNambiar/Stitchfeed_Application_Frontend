import React, {useState} from 'react'
import './Styles/PostModal.css'
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useFormik } from 'formik';
import {uploadToCloud} from '../utils/uploadToCloud'
import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../redux/Post/post.action';
const PostModal = ({setOpen}) => {


    const [selectedImage, setSelectedImage] = useState();
    const [selectedVideo, setSelectedVideo] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()


    const handleSelectImage = async(event) => {
        setIsLoading(true)
        const imageUrl = await uploadToCloud(event.target.files[0], "image")
        setSelectedImage(imageUrl)
        setIsLoading(false)
        formik.setFieldValue("image", imageUrl)
    }

    const handleSelectVideo = async(event) => {
        setIsLoading(true)
        const videoUrl = await uploadToCloud(event.target.files[0], "video")
        setSelectedImage(videoUrl)
        setIsLoading(false)
        formik.setFieldValue("video", videoUrl)
    }

    const formik = useFormik({
        initialValues:{
        caption:"",
        image:"",
        video:""
    },
onSubmit:(values) => {
    console.log(values)
    dispatch(createPostAction(values))
}});


  return (
    <div className='post-modal-x' onClick={() => setOpen(false)}>

    <div className='post-modal' onClick={(e) => e.stopPropagation()}>
    <div className='post-modal-1'>
      
        <div className='post-modal-1-1'>
        <div className='post-modal-img'>
        <img className='add-zz' src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
      </div>
      <div className='post-modal-1-1-1'>
            <div>
                <h1>Sreehari</h1>
            </div>
            <div>
                <p>@Sreehari</p>
            </div>
            </div>
        </div>
    </div>
    <div className='post-modal-2'>
    <form className='post-modal-form' onSubmit={formik.handleSubmit}>
    <div>
        <textarea placeholder="Create a post" rows={4} value={formik.values.caption} name="caption" onChange={formik.handleChange}></textarea>
    </div>
    <div className='post-modal-2-2'>
        <div className='post-modal-2-2-1'>
        <input type='file' accept='image/*' onChange={handleSelectImage} style={{display:"none"}} id='image-input'/>
            <label className="post-modal-label" htmlFor='image-input'><ImageIcon/>
            <span>Image</span>
            </label>
        </div>
        <div className='post-modal-2-2-1'>
        <input type='file' accept='video/*' onChange={handleSelectVideo} style={{display:"none"}} id='video-input'/>
            <label className="post-modal-label" htmlFor='video-input'><VideocamIcon/>
            <span>Video</span>
            </label>
        </div>

 
    </div>
    {selectedImage && 
    <div className='post-modal-2-2-2'>
            <img src={selectedImage} alt=""/>
        </div>
   }

   {selectedVideo && 
    <div className='post-modal-2-2-2'>
            <img src={selectedVideo} alt=""/>
        </div>
   }
    <div className='post-modal-button'>
        <button type='submit' >Post</button>
    </div>
    <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open={isLoading}

>
  <CircularProgress color="inherit" />
</Backdrop>
    </form>
    </div>
    </div>
    </div>
  )
}

export default PostModal
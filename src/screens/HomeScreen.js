import React, { useEffect } from 'react'
import Feed from '../Parts/Feed'
import Sidebar from '../Parts/Sidebar'
import Widgets from '../Parts/Widgets'
import './Styles/HomeScreen.css'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../redux/Auth/auth.action'
import { getAllPostAction } from '../redux/Post/post.action'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const {post} = useSelector(store => store)
  const {auth} = useSelector((store) => store)
useEffect(()=>{
  dispatch(getAllPostAction())
  
},[])
  console.log("auth",auth.user)
  console.log("get all post", post.posts)
  return (
  
    <div className="app">
    <Sidebar/>
    <Feed/>
    <Widgets className='gg'/>

    </div>
  
  )
}

export default HomeScreen
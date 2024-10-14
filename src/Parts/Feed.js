import React from 'react'
import Header from '../Components/Header'
import Stitchx from '../Components/Stitchx'
import './Feed.css'
import { Routes, Route } from 'react-router-dom'
import MiddlePart from '../Components/MiddlePart'

import Reels from '../Components/Reels'
import CreateReels from '../Components/CreateReels'
import ProfilePage from '../Components/ProfilePage'
const Feed = () => {
  return (
 
    <div className='feed'>
      {/* <Header/> */}
      <div className='first-body'>
      <Routes>
        <Route path='/' element={<MiddlePart/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/create-reels' element={<CreateReels/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
      </Routes>
{/* <Stitchx username="adam" text="This is a planet and it is made by us " image="https://media4.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=790b76119f83d7fb5633d4a8c24e81ab52afabdedc5ce6a0&rid=giphy.gif&ct=g"/>
          <Stitchx username="sreehari_nambiar" text = "this is awesome" image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"/>
          <Stitchx username="sreegovind_rajendra_kumar" text="this is awesoome" image="https://www.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif"/>
          <Stitchx username="ben" text="This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome This is awesoome" image=""/> */}
          
          </div>
    </div>
  
  )
}

export default Feed
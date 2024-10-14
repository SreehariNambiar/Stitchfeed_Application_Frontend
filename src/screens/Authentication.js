import React from 'react'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import LoginBox from '../Components/LoginBox'
import SignupBox from '../Components/SignupBox'
import { Route, Routes } from 'react-router-dom';
const Authentication = () => {
    return (
        <div className='f'>
        <div className='loginss'>
        <Heading/>
        <Routes>
        <Route path='/' element={<LoginBox/>}/>
            <Route path='/register' element={<SignupBox/>}/>
            <Route path='/login' element={<LoginBox/>}/>
        </Routes>
        
        </div>
        <Footer/>
        </div>
      )
}

export default Authentication
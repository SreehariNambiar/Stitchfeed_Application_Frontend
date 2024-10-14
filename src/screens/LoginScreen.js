import React from 'react'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import LoginBox from '../Components/LoginBox'
import './Styles/LoginScreen.css'
const LoginScreen = () => {
  return (
    <div className='f'>
    <div className='loginss'>
    <Heading/>
    <LoginBox/>
    </div>
    <Footer/>
    </div>
  )
}

export default LoginScreen
import { useSelector } from 'react-redux';
import './App.css';
import Authentication from './screens/Authentication';
import HomeScreen from './screens/HomeScreen'
import LoggedScreen from './screens/LoggedScreen';
import LoginScreen from './screens/LoginScreen'
import Message from './screens/Message';
import SignupScreen from './screens/SignupScreen';
import {useEffect} from 'react'
import UsernameScreen from './screens/UsernameScreen'
import { Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { getProfileAction } from './redux/Auth/auth.action'
import { getAllPostAction } from './redux/Post/post.action';
function App() {
  const dispatch = useDispatch()
  const {auth} = useSelector((store) => store)
  window.document.body.style.zoom = 1;

  const jwt = localStorage.getItem('jwt')
  useEffect(() => {
    dispatch(getProfileAction(jwt))
    dispatch(getAllPostAction())
    console.log(auth)
    
  },[jwt])
  return (

    <div>
    <Routes>
    <Route path='/message' element={<Message/>}/>
      <Route path='/*' element={auth.user?<HomeScreen/> : <Authentication/>}/>
      
      {/* <Route path='/*' element={<Authentication/>}/> */}
    </Routes>
    {/* <HomeScreen/> */}
    {/* <LoginScreen/> */}
    {/* <SignupScreen/> */}
    {/* <UsernameScreen/> */}
    {/* <LoggedScreen/> */}
    </div>
  );
}

export default App;


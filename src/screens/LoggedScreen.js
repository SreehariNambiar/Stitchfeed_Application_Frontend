import React from 'react'
import Feed from '../Parts/Feed'
import Sidebar from '../Parts/Sidebar'
import Widgets from '../Parts/Widgets'
import WidgetsLogged from '../Parts/WidgetsLogged'
import './Styles/LoggedScreen.css'
const LoggedScreen = () => {
  return (
    <div className="app">
    <Sidebar/>
    <Feed/>
    <WidgetsLogged className='gg'/>
    </div>
  )
}

export default LoggedScreen
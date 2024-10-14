import React,{useState} from 'react'
import { ReactComponent as Home } from "../Assets/Images/Home.svg";
import { ReactComponent as Bell } from "../Assets/Images/Bell 7.svg";
import { ReactComponent as Search } from "../Assets/Images/Search 2.svg";
import { ReactComponent as Bells} from "../Assets/Images/Bell 8.svg";
import { ReactComponent as Homes } from "../Assets/Images/Home2.svg";
import { ReactComponent as Searchs } from "../Assets/Images/Search 3.svg";


import './Styles/Header.css'
const Header = () => {
  
  const [btnState, setBtnState] = useState(true);
  const [btnState1, setBtnState1] = useState(false);
  const [btnState2, setBtnState2] = useState(false);
  const [btnState3, setBtnState3] = useState(false);
  const [show,setShow] = useState(true);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(true);
  
  const handle = (i) => {
    if(i==1){
    setShow(false);
    }
    else{
      if(btnState2==false){
        setShow(true);
      }
      else{
        setShow(false);
      }
    }
  }

  const handle2 = (i) => {
    if(i==1){
    setShow2(false);
    }
    else{
      if(btnState==false){
        setShow2(true);
      }
      else{
        setShow2(false);
      }
    }
  }

  const handle3 = (i) => {
    if(i==1){
    setShow3(false);
    }
    else{
      if(btnState3==false){
        setShow3(true);
      }
      else{
        setShow3(false);
      }
    }
  }
  const handleClick1 = () => {
    setBtnState(true);
    setBtnState1(false);
    setBtnState2(false);
    setBtnState3(false);
    setShow(true);
    setShow2(false);
    setShow3(true)

}
let toggleClassCheck1 = btnState ? 'active1': '';

const handleClick2 = () => {
    setBtnState(false);
    setBtnState1(true);
    setBtnState2(false);
    setBtnState3(false);
    setShow(true);
    setShow2(true);
    setShow3(false)
    setShow3(true)

}
let toggleClassCheck2 = btnState1 ? 'active2': '';

const handleClick3 = () => {
  setBtnState(false);
  setBtnState1(false);
  setBtnState2(true);
  setBtnState3(false);
  setShow(false);
  setShow2(true);
  setShow3(true);
  
}
let toggleClassCheck3 = btnState2 ? 'active3': '';

const handleClick4 = () => {
  setBtnState(false);
  setBtnState1(false);
  setBtnState2(false);
  setBtnState3(true);
  setShow(true);
  setShow2(true);
  setShow3(false);
  
}
let toggleClassCheck4 = btnState3 ? 'active4': '';



  return (
    <section className='header'>
  
      <div className={`home ${toggleClassCheck1}`} onClick={handleClick1} onMouseEnter={()=>handle2(1)} onMouseLeave={()=>handle2(2)}>
      {show2?
        <Homes className='svg'/>
        :
        <Home className='svg'/>
        
      }
      </div>
      <div className='title'>
          <h2>stitchfeed</h2>
      </div>
      <div className={`groupss ${toggleClassCheck2}`} onClick={handleClick2}>
        <span className='hash'>#</span>
      </div>
      <div className={`s ${toggleClassCheck4}`} onClick={handleClick4} onMouseEnter={()=>handle3(1)} onMouseLeave={()=>handle3(2)}>
      {show3?
        <Search className='svgxx'/>
        :
        <Searchs className='svgxx'/>
        
      }
      </div>
      <div className={`notifications ${toggleClassCheck3}`} onClick={handleClick3} onMouseEnter={()=>handle(1)} onMouseLeave={()=>handle(2)}>
      {show?
        <Bell className='svgx'/> :
        <Bells className='svgx'/>

      }
        
      </div>
      
     
    </section>
  )
}

export default Header
import React,{useState} from 'react'
import './Styles/UsernameBox.css'
const UsernameBox = () => {
  const [show,setShow] = useState(false);
  return (
    <div className='body'>
      <div className='box'>
        <ul className='headerss'>
          <li>Create your unique identity</li>
          <li> Username :
          <div className='sub'> Once you choose a usename you cannot change it as it is the unique identity of the person on stitchfeed</div>
          </li>
          <li className='fl'>
          <div className="at">@</div>
          <input type='text' className='username'></input>
          </li>
          {show? <li>Available options
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul></li> : <div></div>}
          
          <li className='fll' onClick = {()=>setShow(true)}>
          {show? <button type="button" className='buttonss' on>Proceed</button> :
          <button type="button" className='buttons' on>Check availability</button>}
            
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UsernameBox
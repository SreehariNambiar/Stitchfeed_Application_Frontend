import React,{useState} from 'react'
import './Styles/TopTrending.css'
const TopTrending = () => {
    const [show,setShow] = useState(false);
    const [btnState, setBtnState] = useState(true);
    const [btnState1, setBtnState1] = useState(false);
    const handleClick1 = () => {
        setBtnState(true);
        setBtnState1(false);
        setShow(false);

    }
    let toggleClassCheck1 = btnState ? 'active': '';
    const handleClick2 = () => {
        setBtnState(false);
        setBtnState1(true);
        setShow(true);

    }
    let toggleClassCheck2 = btnState1 ? 'active': '';

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
     <div className='activity'>
        <div className="head">
            Top activity today
        </div>
        <div className="trends">
            <ul>
                <li className={`groups ${toggleClassCheck1}`} onClick={handleClick1}>Groups</li>
                <li className={`interests ${toggleClassCheck2}`} onClick={handleClick2}>Trending</li>
            </ul>
        </div>
        <div className="order">
        { show ? (
          
            <ul>
             <li>1.  <span> {truncate("#peopleworlds",17)} </span> </li>
             <li>2.  <span> {truncate("#FTX Collapse", 17)} </span></li>
             <li>3.  <span> {truncate("#voiceYourConcerns",17)} </span></li>
             <li>4.  <span> {truncate("#tothemoon",17)} </span></li>
             <li>5.  <span> {truncate("#believeitornot")} </span></li>
            </ul>
        ) : (
            <ul>
             <li>1. <span>
             <img  className='userIcon' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
             <p>{truncate("@swimmersUSA",17)}</p>
             </span></li>

             <li>2. <span><img  className='userIcon' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
             <p>{truncate("@bikersUSA",17)}</p></span></li>

             <li>3. <span> <img  className='userIcon' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
             <p>{truncate("@football",17)}</p></span></li>

             <li>4. <span> <img  className='userIcon' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
             <p>{truncate("@FIFAQatar",17)}</p></span></li>

             <li>5. <span><img  className='userIcon' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
             <p>{truncate("@HelloWorld",17)}</p></span></li>

            </ul>
        )
        }
        </div>

    </div>
  )
}

export default TopTrending
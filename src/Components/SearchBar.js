import React, { useEffect, useState,useRef } from "react";

import './Styles/SearchBar.css'
import { ReactComponent as Circle } from "../Assets/Images/Circle.svg";
import { ReactComponent as SearchBottom } from "../Assets/Images/Search-bottom.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../redux/Auth/auth.action";
import { createChat } from "../redux/Message/message.action";

const SearchBar = ( { placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [isOpen,setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const {auth, message} = useSelector((store) => store)
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      dispatch(searchUser(wordEntered))
      console.log('search user ---------', auth)
      setIsOpen((isOpen)=>true)
      
      // const newFilter = data.filter((value) => {
      //   return value.author.toLowerCase().includes(searchWord.toLowerCase());
      // });

      const newFilter2 = auth.searchUser.filter((value) => {
        return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
      })
  
      if (searchWord === "") {
        setFilteredData([]);
      }
      else{
        setFilteredData(newFilter2);
      }
      // }else {
      //   setFilteredData(newFilter);
        
      // }
     
    };
    //custom hook
    let menuRef = useRef();
    useEffect(()=>{
      let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
          setIsOpen(false)
          }
          else{
            setIsOpen(true)
            }
      }
      document.addEventListener('mousedown',handler)
      return ()=>{
        document.removeEventListener('mousedown',handler)
      }
    })
    //end of custom hook
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    const handleClick = (id) => {
      setFilteredData(auth.searchUser.filter((value) => value.id === id));
      dispatch(createChat({userId:id}));
      setWordEntered("");
      
      clearInput();
    };
    
  return (
    <div ref={menuRef} className="search">
    <label className='lala'>
      <input
        className="submit_on_enter"
        type="search"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
        name="search"
        autocomplete="off"
      
      />
      
    </label>

    
    {(filteredData.length != 0 && isOpen) && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
          {/* {auth.searchUser.map((value, key) => { */}
            return (
              <div onClick={() => {
                handleClick(value.id);
                setWordEntered("")
              }} className="dataItem" href={value.link} target="_blank">
              <div className="search-header">
        {/* <div className="circle">
          <Circle className="search-circle" />
        </div> */}
        <div className='profile-page-x-img'>
        <img className='add-z' src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
      </div>
        <div className="search-list">
          <div className="search-h">
            <ul>
              {/* <li>{value.author}</li> */}
              <li>{value.firstName}</li>
              <li>{value.lastName}</li>
              
            </ul>
          </div>

          <div className="search-l">
            <ul>
              <li>2.5k upvotes</li>
              <li>2k stitches</li>
            </ul>
          </div>
        </div>
      </div>
              </div>
            );
          })}
          <div className="search-bottom">
        <div className="search-contents">
          <ul className="search-ele">
            <li className="paras">
              <p>Can't find your interests...</p>
              <p>Create one now and meet...</p>
              <p>People with your interests...</p>
            </li>
            <li>
              <SearchBottom className="svgxxx" />
            </li>
          </ul>
          <button type="button" className="search-interests">
            Create my interest
          </button>
        </div>
      </div>
        </div>
      )}
  </div>
  )
}

export default SearchBar
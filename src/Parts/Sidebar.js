import React from "react";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import TopTrending from "../Components/TopTrending";
import BookData from "../dummy/Search.json";
import './Sidebar.css'
import SideMenu from "../Components/SideMenu";
import Profile from "../Components/Profile";
const Sidebar = () => {
  return (
    <section className="sidebar">
      
        <SearchBar placeholder='search groups, trends ...' />
        {/* <TopTrending/> */}
        <SideMenu/>
        <Profile/>
        <Footer/>
    
     
      {/* <Footer /> */}
    </section>
  );
};

export default Sidebar;

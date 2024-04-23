import "./topbar.css";
import React,{useState} from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";


function topbar(){
    return(
   <div className="main">
    <div className="left">
    <div  className="topbarIcon"><button type="submit"><GoSidebarCollapse></GoSidebarCollapse></button></div>
    <div  className="search "><FaSearch/><input type="search" name="search" id="search"  placeholder="Ctrl+K"/></div>
    </div>
    
    <div className="right">
    <div  className="topbarIcon"><FaPlus/></div>
   <div  className="topbarIcon"><IoIosNotifications /></div>
   <div  className="profile"> <img src="" alt="" srcset="" />
        <h5>khushi@gmail.com</h5></div>
   <div  className="topbarIcon"><IoLogOutSharp></IoLogOutSharp></div>
    </div>
  
   </div>
    );
}
export default topbar;
import React, { useState } from "react";
import s from "./sidebar.module.css";
import { RiArrowDownSLine,RiArrowUpSLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { BsPersonVcardFill } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";


function SubMenu() {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <li className={s.box}> {/* Use s.box here */}
      <span onClick={toggleVisibility}>Masters</span>
      <button onClick={toggleVisibility} className={s.arrow}>
        {/* Show different arrow icon based on visibility */}
        {isVisible ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
      </button>

      {/* Submenu content */}
      {isVisible && (
        <div>
          {/* Your submenu content goes here */}
          <ul>
            <li className={s.boxedit}><a href="/ManageUsers"><FaCircleUser /><span>Manage Users</span></a></li>
            <li className={s.boxedit}><a href="/ManageRoles"><BsPersonVcardFill></BsPersonVcardFill><span>Manage Roles </span></a></li>
            <li className={s.boxedit}><RiCalendarScheduleFill></RiCalendarScheduleFill><span>Manage Timetables </span></li>
            <li className={s.boxedit}><SiGoogleclassroom></SiGoogleclassroom><span>Manage Classes </span></li> 
          </ul>
        </div>
      )}
    </li>
  );
}

function Sidebar() {
  return (
    <nav>
        <div className={s.app_head}>
            <img src="" alt="" srcset="" />
            <h1>My App</h1>
            <hr/>
        </div>
       
      <ul className={s.container}>
        <li className={s.box}>
          <a href="/dashboard">
          <MdDashboard></MdDashboard>
          <span>Dashboard</span>
          </a>
        </li>

        {/* Render the SubMenu component */}
        <SubMenu />

        <li className={s.box}>
          {/* <Link to="/manage-roles"> */}
          <IoSchoolSharp />
          <span>Manage Schools</span>
          {/* </Link> */}
        </li>

        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
         <FaUserCog></FaUserCog>
          <span> Manage Teachers</span>
          {/* </Link> */}
        </li>

        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
          <FaUserGraduate></FaUserGraduate>
          <span>Manage Students</span>
          {/* </Link> */}
        </li>

        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
         <RiParentFill></RiParentFill>
          <span> Manage Parents</span>
          {/* </Link> */}
        </li>
        
        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
        <IoDocumentAttachSharp></IoDocumentAttachSharp>
          <span> Manage Documents</span>
          {/* </Link> */}
        </li>

        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
         <PiCertificateFill/>
          <span> Manage Certificates</span>
          {/* </Link> */}
        </li>

        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
          <MdAssignmentTurnedIn></MdAssignmentTurnedIn>
          <span> Manage Assignment</span>
          {/* </Link> */}
        </li>

        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
          <MdAssignmentAdd></MdAssignmentAdd>
          <span> Manage Tests</span>
          {/* </Link> */}
        </li>
        <li className={s.box}>
          {/* <Link to="/dashboard"> */}
          <IoSettings></IoSettings>
          <span> Settings</span>
          {/* </Link> */}
        </li>
        {/* Other menu items */}
      </ul>
    </nav>
  );
}

export default Sidebar;

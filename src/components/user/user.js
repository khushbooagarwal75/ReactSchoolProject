import React,{useState} from "react";
import Home from "../home/home";
import "./user.css";
import { MdKeyboardArrowRight } from "react-icons/md";

import {createUserWithEmailAndPassword} from "firebase/auth";  
import { FaPlus } from "react-icons/fa";
import {auth, firestore } from "../../firebase";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {serverTimestamp} from "../../firebase";
import DataTable from "../custom/datatable/Dt";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
    school_id: '',
    schoolName: '',
    role: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create user account using Firebase Authentication
      const { user } = await createUserWithEmailAndPassword(auth,formData.email, formData.password);

      // Create user document in Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        
        uid:user.uid,
        email: formData.email,
        display_name: formData.displayName,
        photo_url:formData.photo_url,
        schoolid: formData.school_id,
        school_name: formData.schoolName,
        role: formData.role,
      });

      console.log('User account created and Firestore document created:', user.uid);
      
      // Optionally, clear the form after successful registration
      setFormData({
        email: '',
        password: '',
        displayName: '',
        school_id: '',
        schoolName: '',
        role: ''
        
      });
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };




  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
      <div className="popup-header">
      <h2>Add User</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        {/* Your form content goes here */}
        <div class="form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="displayName" name="displayName" value={formData.displayName} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required/>
    </div>
    <div className="form-group">
      <label htmlFor="photo_url">Profile Pic:</label>
      <input type="file" id="photo_url" name="photo_url" value={formData.photo_url} onChange={handleInputChange} required/>
    </div>
    <div className="form-group">
      <label htmlFor="school-id">School ID:</label>
      <input type="text" id="school_id" name="school_id" value={formData.school_id} onChange={handleInputChange} required/>
    </div>
    <div className="form-group">
      <label htmlFor="school-name">School Name:</label>
      <input type="text" id="school_name" name="schoolName" value={formData.schoolName} onChange={handleInputChange} required/>
    </div>
    <div className="form-group">
      <label htmlFor="role">Role:</label>
      <select id="role" name="role" value={formData.role} onChange={handleInputChange} required>
        <option value="" disabled selected>Select your role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="staff">Staff</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

      </div>
    </div>
  );
};




function ManageUser(){
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
 
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
    // Ensure that toDate is always after fromDate
  
  };

  const handleToDateChange = (e) => {
    // Update the "to" date only if it's manually selected by the user
    const selectedToDate = e.target.value;
    if (selectedToDate >= fromDate) {
      setToDate(selectedToDate);
    }
  };
    return(
        <>
        <Home></Home>
        <div className="pageContent">
            <h1>User Page</h1>
            <div className="breadcrumbs">
                <h5>Page1 </h5>
                <div className="breadcrumbs-icon"><MdKeyboardArrowRight/></div>
                <h5>Page 2</h5>
                <div className="breadcrumbs-icon"><MdKeyboardArrowRight/></div>
                <h5>Default</h5>
            </div>
            <div className="row2">
            <div class="date-row">
                <label for="from-date">From:</label>
                <input type="date" id="from-date" class="datepicker" placeholder="Select from date" value={fromDate}
        onChange={handleFromDateChange} />

                <label for="to-date">To:</label>
                <input type="date" id="to-date" class="datepicker"   placeholder="Select to date"  value={toDate} onChange={handleToDateChange}
        min={fromDate}/>

                
            </div>
            <div  className="searchInPage"><input type="search" name="search" id="search"  placeholder="Ctrl+K"/></div>
            <button class="button"  onClick={handleOpenPopup}>
    <span class="icon3"></span>
    Add New
  </button>
 
            </div>
            

         <div className="tablePart">
          <DataTable></DataTable>
          </div>  
        </div>
        <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
}

export default ManageUser;

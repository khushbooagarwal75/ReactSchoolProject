import React, { useState } from "react";
import Home from "../home/home";
import "./role.css";
import { MdKeyboardArrowRight } from "react-icons/md";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaPlus } from "react-icons/fa";
import { auth, firestore } from "../../firebase";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { serverTimestamp } from "../../firebase";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
   rolename: '',
   dashboard: '',
   user:'',
   teachers:'',
   parent:'',
   certificates:'',
   class:'',
   role:'',
   school:'',
   students:'',
   documents:'',
   Timetable:'',
   Assignment:''
    
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

      // Create user document in Firestore
      await setDoc(doc(firestore, "userRoles"), {
        rolename: formData.role,
        dashboard: formData.dashboard,
        user:formData.user,
        teachers:formData.teachers,
        parent:formData.parent,
        certificates:formData.certificates,
        class:formData.class,
        role:formData.role,
        school:formData.school,
        students:formData.students,
        documents:formData.documents,
        Timetable:formData.Timetable,
        Assignment: formData.Assignment
      });

      console.log('Role Created', formData.rolename);

      // Optionally, clear the form after successful registration
      setFormData({
        rolename: '',
        dashboard: '',
        user:'',
        teachers:'',
        parent:'',
        certificates:'',
        class:'',
        role:'',
        school:'',
        students:'',
        documents:'',
        Timetable:'',
        Assignment:''

      });
    } catch (error) {
      console.error('Error adding role:', error.message);
    }
  };




  if (!isOpen) return null;

  return (
    <div className=" role-popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <h2>Add Role</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        {/* Your form content goes here */}
        <div class="form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group1">
              <label htmlFor="rolename">Role:</label>
              <input type="text" id="displayName" name="displayName" value={formData.displayName} onChange={handleInputChange} required />
            </div>
            <h2>Page 1</h2>
    <div className="form-group">
      <div className="pageCheckbox">
        <div className="left-container">
          <label>
            <input
              type="checkbox" id="dashboard" name="dashboard" value={formData.dashboard} onChange={handleInputChange}
            />
            Dashboard
          </label>
          <label>
            <input
              type="checkbox" id="user" name="user" value={formData.user} onChange={handleInputChange}
            />
            Manage Users
          </label>
          <label>
            <input
              type="checkbox" id="teachers" name="teachers" value={formData.teachers} onChange={handleInputChange}
            />
            Manage Teachers
          </label>
          <label>
            <input
              type="checkbox" id="parents" name="parents" value={formData.parents} onChange={handleInputChange}
            />
            Manage Parents
          </label>
          <label>
            <input
              type="checkbox" id="certificates" name="certificates" value={formData.certificates} onChange={handleInputChange}
            />
            Manage Certificates
          </label>
          <label>
            <input
              type="checkbox" id="classes" name="classes" value={formData.classes} onChange={handleInputChange}
            />
            Manage Classes
          </label>
        </div>
        <div className="right-container">
          <label>
            <input
              type="checkbox" id="roles" name="roles" value={formData.roles} onChange={handleInputChange}
            />
            Manage Roles
          </label>
          <label>
            <input
              type="checkbox" id="schools" name="schools" value={formData.schools} onChange={handleInputChange}
            />
            Manage Schools
          </label>
          <label>
            <input
              type="checkbox" id="students" name="students" value={formData.students} onChange={handleInputChange}
            />
            Manage Students
          </label>
          <label>
            <input
              type="checkbox" id="documents" name="documents" value={formData.documents} onChange={handleInputChange}
            />
            Manage Documents
          </label>
          <label>
            <input
              type="checkbox" id="Timetable" name="Timetable" value={formData.Timetable} onChange={handleInputChange}
            />
            Manage Timetable
          </label>
          <label>
            <input
              type="checkbox" id="Assignment" name="Assignment" value={formData.Assignment} onChange={handleInputChange}
            />
            Manage Assignment 
          </label>
        </div>
      </div>
    </div>
            <button type="submit">Submit</button>
         
          
          
          
          </form>
        </div>
      </div>
    </div>
  );
};
function ManageRoles() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Home></Home>
      <div className="pageContent">
      <h1>Roles Page</h1>
        <div className="breadcrumbs">
          <h5>Page1 </h5>
          <div className="breadcrumbs-icon"><MdKeyboardArrowRight /></div>
          <h5>Page 2</h5>
          <div className="breadcrumbs-icon"><MdKeyboardArrowRight /></div>
          <h5>Default</h5>
        </div>
        <div className="row2">
          <div class="date-row">
            <label for="from-date">From:</label>
            <input type="date" id="from-date" class="datepicker" placeholder="Select from date" />

            <label for="to-date">To:</label>
            <input type="date" id="to-date" class="datepicker" placeholder="Select to date" />


          </div>
          <div className="searchInPage"><input type="search" name="search" id="search" placeholder="Ctrl+K" /></div>
          <button class="button" onClick={handleOpenPopup}>
            <span class="icon3"></span>
            Add New
          </button>
          <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>



      </div>
    </>
  );
}

export default ManageRoles;

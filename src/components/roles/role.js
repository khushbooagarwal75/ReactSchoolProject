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
import DataTableRole from "../custom/datatable/DtRole";

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
   Assignment:'',
   test:'',
   settings:''
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

  if (type === 'checkbox') {
    setFormData(prevState => ({
      ...prevState,
      [name]: checked ? 'on' : '' // Update to 'on' if checked, empty string otherwise
    }));
  } else {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const pagesAllowed = {
        manageDashboard: formData.dashboard === 'on' ,
        manageUser: formData.user === 'on',
        manageTeachers: formData.teachers === 'on',
        manageParent: formData.parent === 'on',
        manageCertificates: formData.certificates === 'on',
        manageClass: formData.class === 'on',
        manageRole: formData.role === 'on',
        manageSchool: formData.school === 'on',
        manageStudents: formData.students === 'on',
        manageDocuments: formData.documents === 'on',
        manageTimetable: formData.Timetable === 'on',
        manageAssignment: formData.Assignment === 'on',
        manageTests: formData.test === 'on',
        settings: formData.settings === 'on'
      };

      // Create user document in Firestore
      await setDoc(doc(firestore, "userRoles",formData.rolename), {
        rolename: formData.rolename,
        pageAllowed:pagesAllowed,
      });

      console.log('Role Created', formData.rolename);

      // Optionally, clear the form after successful registration
      setFormData({
        rolename:'',
        dashboard:'',
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
        Assignment:'',
        test:'',
        settings:''

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
              <input type="text" id="rolename" name="rolename" value={formData.rolename} onChange={handleInputChange} required />
            </div>
            <h2>Page 1</h2>
    <div className="form-group">
      <div className="pageCheckbox">
        <div className="left-container">
          <label>
            <input
              type="checkbox" id="dashboard" name="dashboard" value='on' checked={formData.dashboard} onChange={handleInputChange}
            />
            Dashboard
          </label>
          <label>
            <input
              type="checkbox" id="user" name="user"   value='on' checked={formData.user} onChange={handleInputChange}
            />
            Manage Users
          </label>
          <label>
            <input
              type="checkbox" id="teachers" name="teachers"  value='on' checked={formData.teachers} onChange={handleInputChange}
            />
            Manage Teachers
          </label>
          <label>
            <input
              type="checkbox" id="parent" name="parent"  value='on' checked={formData.parent} onChange={handleInputChange}
            />
            Manage Parents
          </label>
          <label>
            <input
              type="checkbox" id="certificates" name="certificates"  value='on' checked={formData.certificates} onChange={handleInputChange}
            />
            Manage Certificates
          </label>
          <label>
            <input
              type="checkbox" id="class" name="class"  value='on' checked={formData.class} onChange={handleInputChange}
            />
            Manage Classes
          </label>
          <label>
            <input
              type="checkbox" id="test" name="test" value='on' checked={formData.test} onChange={handleInputChange}
            />
            Manage Tests
          </label>
        </div>
        <div className="right-container">
          <label>
            <input
              type="checkbox" id="role" name="role"  value='on' checked={formData.role}  onChange={handleInputChange}
            />
            Manage Roles
          </label>
          <label>
            <input
              type="checkbox" id="school" name="school"  value='on' checked={formData.school} onChange={handleInputChange}
            />
            Manage Schools
          </label>
          <label>
            <input
              type="checkbox" id="students" name="students"  value='on' checked={formData.students}  onChange={handleInputChange}
            />
            Manage Students

          </label>
          <label>
            <input
              type="checkbox" id="documents" name="documents"  value='on' checked={formData.documents}  onChange={handleInputChange}
            />
            Manage Documents
          </label>
          <label>
            <input
              type="checkbox" id="Timetable" name="Timetable"  value='on' checked={formData.Timetable}  onChange={handleInputChange}
            />
            Manage Timetable
          </label>
          <label>
            <input
              type="checkbox" id="Assignment" name="Assignment"   value='on' checked={formData.Assignment}  onChange={handleInputChange}
            />
            Manage Assignment 
          </label>
          <label>
            <input
              type="checkbox" id="settings" name="settings"  value='on' checked={formData.settings}  onChange={handleInputChange}
            />
            Settings
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
                <input type="date" id="from-date" class="datepicker" placeholder="Select from date" value={fromDate}
        onChange={handleFromDateChange} />

                <label for="to-date">To:</label>
                <input type="date" id="to-date" class="datepicker"   placeholder="Select to date"  value={toDate} onChange={handleToDateChange}
        min={fromDate}/>

                
            </div>
          <div className="searchInPage"><input type="search" name="search" id="search" placeholder="Ctrl+K" /></div>
          <button class="button" onClick={handleOpenPopup}>
            <span class="icon3"></span>
            Add New
          </button>
          <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
        <div className="tablePartRole">
        <DataTableRole></DataTableRole>
        </div>
        

      </div>
    </>
  );
}

export default ManageRoles;

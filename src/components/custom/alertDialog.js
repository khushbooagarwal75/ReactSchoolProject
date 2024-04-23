import React, { useState } from 'react';
import '../custom/alertDialog.module.css'; // import your CSS file for styling

const CustomAlertDialog = ({ isOpen, message, onClose }) => {
  return (
    <div className={`custom-alert-dialog ${isOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default CustomAlertDialog;
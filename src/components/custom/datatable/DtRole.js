import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../../firebase';
import "./Dt.css";

const DataTableRole = () => {
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "userRoles"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  };

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      // Fetch data from Firestore using the fetchData function defined outside the component
      const data = await fetchData();
      setRows(data);
    };
    fetchDataFromFirestore(); // Call the function to fetch data
  }, []); // Empty dependency array ensures useEffect runs only once

  const columns = [
    { field: "rolename", headerName: "Role", width: 70 },
    {field: "manageDashboard", headerName: "Dashboard", width: 80 },
    { field: "manageUser", headerName: "User", width: 140 },
    { field: "manageRole", headerName: "Role", width: 170 },
    { field: "manageSchool", headerName: "School", width: 150 },
    { field: "manageTeachers", headerName: "Teacherse", width: 100 },
    // Define other columns based on your data fields
  ];

  return (
    <div className="data-table-container">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default DataTableRole;

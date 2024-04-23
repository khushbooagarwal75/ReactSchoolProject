import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../../firebase';
import "./Dt.css";

const DataTable = () => {
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
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
    { field: "photo_url", headerName: "Profile", width: 70 },
    { field: "display_name", headerName: "Display Name", width: 140 },
    { field: "email", headerName: "Email", width: 170 },
    { field: "schoolid", headerName: "School Id", width: 80 },
    { field: "school_name", headerName: "School Name", width: 150 },
    { field: "role", headerName: "Role", width: 100 },
    // Define other columns based on your data fields
  ];

  return (
    <div className="data-table-container">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default DataTable;

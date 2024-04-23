import logo from './logo.svg';
import './App.css';
import React from"react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/login/login";
import User from "./components/user/user";
import Roles from "./components/roles/role";

function App() {
  return (
    
      
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/ManageUsers' element={<User/>}/>
          <Route path='/ManageRoles' element={<Roles/>}/>
          
        </Routes>
      </Router>
  );
}

export default App;

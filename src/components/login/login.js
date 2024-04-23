import React from "react";
import logo from '../../logo.svg';
import styles from  "../login/login.module.css";
import email from '../../assets/email.png';
import pass from '../../assets/password.png';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";

function Login(){
  const navigate=useNavigate();
  const  CheckUser=async (e)=> {
      e.preventDefault();
      const Email=e.target.email.value
      const pass=e.target.password.value

      try {
         await signInWithEmailAndPassword(auth,Email,pass);
         navigate("/dashboard");
      } 
      catch (error) {
        alert(error.message);
      }
  }

    return(
      <body className={styles.body}>
      <div className={styles.parent}>
        <div className={styles.left}>
        <img src={logo} className={styles.logo} alt="" srcset="" />
        <h1>IQNaut</h1>
        </div>
       <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Login</div>
          <div className={styles.underline}></div>
        </div>
        <form onSubmit={CheckUser}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={email} alt="No Image" srcset="" />
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div className={styles.input}>
            <img src={pass} alt="No Image" srcset="" />
            <input type="password" name="password" id="password" placeholder="Password"/>
          </div>
         
          <center>
            <button type="submit" className={styles.submit}>Login</button>
          </center>
          </div>
          </form>
           <center>
          <div className={styles.forgot_password}> Forgot Password?<a href="#">Click here</a></div>
          </center>
        </div>
       </div>
       </body>
    );
}
export default Login;
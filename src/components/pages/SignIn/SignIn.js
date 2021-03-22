import React,{useCallback,useContext} from 'react';
import {Redirect } from "react-router";
import { Link } from 'react-router-dom'



export default function SignIn() {

  return (
    
     
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>Sign In</h1>
        <form  noValidate>
        <div className="email">
          <label htmlFor="email"></label> 
          <input 
          type="text"
          className=""
          placeholder="E-mail"
          type="email" 
          name="email" 
         
          />
        </div>
        <div className="password">
          <label htmlFor="password"></label> 
          <input 
          type="text"
          className=""
          placeholder="Password"
          type="password" 
          name="password" 
        
          />
        </div>
           
         
            
          <button className="buttonsign" type="submit">
            Sign In
          </button>
         
             
            
              <Link to="/signup" >
                {"Don't have an account? Sign Up"}
              </Link>
            
        </form>
      </div>
       </div>
   
   );     
  
     
  
  
}

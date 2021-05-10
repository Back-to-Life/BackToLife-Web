import React,{useCallback,useContext,useState} from 'react';
import { withRouter, Redirect } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import './ForgotPassword.css'
import { useTranslation } from 'react-i18next';

import { Component } from 'react';
import Navbar from '../../Navbar';




export default function ForgotPassword () {
    const {t, i18n} = useTranslation();
    
  
    const [email, setEmail] = useState("")
   
    const history = useHistory();



async function forgotPassword()
{
    let item = {email}
    console.log(email)
    
  let result = await fetch("http://localhost:5000/forgotPassword", 
  {
    method: "POST",
    body:JSON.stringify(item),
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }

  
  }).then(history.push("/resetPassword"))
  
  result = await result.json()
console.log("result", result)
}



   

      return (
    
     <>
     <Navbar/>
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>{t('Sign.forgot')}</h1>
        <form >
      
        <div className="email">
          <label htmlFor="email"></label> 
          <input 
          type="text"
          className=""
          placeholder="E-mail"
          type="email" 
          name="email" 
          onChange =  {(e) => setEmail(e.target.value)}
         
          />
        </div>

           
    
    <button className = "buttonsign"
    onClick={forgotPassword}
           value = "Confirm"
           >
             <h5>{t('Sign.Confirm')} </h5>
           </button>
    
              <Link className="linklogin" to="/login" >
                {t('Sign.accountIn')}
              </Link>
            
        </form>
      </div>
       </div>
       </>
   );     
  
   
  

    
  

 
     
  
  
}
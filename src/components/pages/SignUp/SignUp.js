import React,{useCallback,useContext} from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useTranslation } from 'react-i18next';


export default function SignIn() {
  const {t, i18n} = useTranslation();

  return (
    
     
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>{t('Sign.signup')}</h1>
        <form  noValidate>
         <div className="firstName">
          <label  htmlFor="firstName"></label> 
          <input 
          type="text"
          className=""
          placeholder="First Name"
          type="text" 
          name="firstName" 
         
          />
        </div>
        <div className="lastName">
          <label  htmlFor="lastName"></label> 
          <input 
          type="text"
          className=""
          placeholder="Last Name"
          type="text" 
          name="lastName" 
         
          />
        </div>
        <div className="email">
          <label   htmlFor="email"></label> 
          <input 
          type="text"
          className=""
          placeholder="E-mail"
          type="email" 
          name="email" 
         
          />
        </div>
        <div className="password">
          <label  htmlFor="password"></label> 
          <input 
          type="text"
          className=""
          placeholder="Password"
          type="password" 
          name="password" 
        
          />
        </div>
        <div className="passwordAgain">
          <label  htmlFor="passwordAgain"></label> 
          <input 
          type="text"
          className=""
          placeholder="Password Again"
          type="password" 
          name="passwordAgain" 
        
          />
        </div>
           
         
            
          <a className="buttonsign" type="submit">
           <h5>{t('Sign.signup')}</h5> 
          </a>
         
             
            
              <Link to="/login" >
                {t('Sign.accountIn')}
              </Link>
            
        </form>
      </div>
       </div>
   
   );     
  
     
  
  
}
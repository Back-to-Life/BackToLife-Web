import React,{useCallback,useContext} from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



export default function SignIn() {
  const {t, i18n} = useTranslation();

  return (
    
     
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>{t('Sign.signin')}</h1>
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
           
         
            
          <a className="buttonsign" type="submit">
            <h5>{t('Sign.signin')}</h5>
          
          </a>
         
             
            
              <Link to="/signup" >
              {t('Sign.accountUp')}
              </Link>
            
        </form>
      </div>
       </div>
   
   );     
  
     
  
  
}

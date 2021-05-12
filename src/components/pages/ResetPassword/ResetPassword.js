import React,{useState} from 'react';
import { Link ,useHistory} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './SignIn.css'


export default function ResetPassword() {
    const {t, i18n} = useTranslation();

    const [email, setEmail] = useState("")
    const [resetToken, setResetToken] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const history = useHistory();


    const resetPassword = async (e) => {
 
    let item = { email, newPassword, resetToken }
        console.log(item)
    let result = await fetch("http://localhost:5000/resetPassword", 
        {
            method: "PUT",
            body:JSON.stringify(item)
  }).then(history.push("/") )
  result = await result.json()
console.log("result", result)

}


  return (
    <>
    
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>{t('Sign.reset')}</h1>
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
        <div className="password">
          <label htmlFor="password"></label> 
          <input 
          type="text"
          className=""
          placeholder="New Password"
          type="password" 
          name="password" 
          onChange = {(e) => setNewPassword(e.target.value)}
        
          />
        </div>
        <div className="password">
          <label htmlFor="password"></label> 
          <input 
          type="text"
          className=""
          placeholder="Reset Token"
          type="number" 
          name="token" 
          onChange = {(e) => setResetToken(e.target.value)}
        
          />
        </div>
        
           
         
            
       
    <button className="buttonsign" onClick={resetPassword}
           value = "Submit"
           >

               <h5>{t('Sign.signin')}</h5> 


           </button>
    
          

 
        </form>
      </div>
       </div>
       </>
   );     
  
     
  
  
}
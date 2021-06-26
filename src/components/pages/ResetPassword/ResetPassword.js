import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './ResetPassword.css'
import {BASE_URL} from '../../../enviroments'

export default function ResetPassword() {
    const {t, i18n} = useTranslation();

    const [email, setEmail] = useState("")
    const [resetToken, setResetToken] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const history = useHistory();


    const resetPassword = async (e) => {
 
    let item = { email, newPassword, resetToken }
        console.log(item)
    let result = await fetch(`${BASE_URL}/resetPassword`, 
        {
            method: "PUT",
            body:JSON.stringify(item)
  }).then(history.push("/home") )
  result = await result.json()
console.log("result", result)

}


  return (
    <>
    
      <div className="wrapper1">
      <img className="upperimg2" src="images/Saly-41.png" alt="" />   
        <div className="form-wrapper">

        <h1>{t('Sign.reset')}</h1>
        <form >
        <div className="email">
          <label htmlFor="email"></label> 
          <input 

          className=""
          placeholder="E-mail"
          type="email" 
          name="email" 
          onChange =  {(e) => setEmail(e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>
        <div className="password">
          <label htmlFor="password"></label> 
          <input 
          className=""
          placeholder="New Password"
          type="password" 
          name="password" 
          onChange = {(e) => setNewPassword(e.target.value)}
          required
          />
        </div>
        <div className="password">
          <label htmlFor="password"></label> 
          <input 
          className=""
          placeholder="Reset Token"
          type="number" 
          name="token" 
          onChange = {(e) => setResetToken(e.target.value)}
          required
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
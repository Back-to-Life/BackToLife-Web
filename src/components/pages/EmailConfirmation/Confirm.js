import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Confirm.css'
import { useTranslation } from 'react-i18next';
import {BASE_URL} from '../../../enviroments'

export default function Confirm () {
const {t, i18n} = useTranslation();

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [randomCode, setToken] = useState("")
const history = useHistory();

async function confirm()
{
  let item = {name, email, password, randomCode}
  console.log(item)


  let result = await fetch(`${BASE_URL}/email-activate`, 
  {
    method: "POST",
    body:JSON.stringify(item),
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  
  }).then(history.push("/"))
  
  result = await result.json()
  console.log("result", result)
}
      return (   
      <div className="wrapper1">
      <div className="form-wrapper">
        <h1>{t('Sign.Confirm')}</h1>
        <form >
         <div className="firstName">
          <label  htmlFor="firstName"></label> 
          <input 
          className=""
          placeholder={t('Sign.name')}
          type="text" 
          name="name" 
          onChange = {(e) => setName(e.target.value)} 
          value =  {name}
          />
        </div>
        
        <div className="email">
          <label   htmlFor="email"></label> 
          <input 
          className=""
          placeholder={t('Sign.email')}
          type="email" 
          name="email" 
          onChange =  {(e) => setEmail(e.target.value)} 
          value = {email} 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>
        <div className="password">
          <label  htmlFor="password"></label> 
          <input 
          className=""
          placeholder={t('Sign.password')}
          type="password" 
          name="password" 
          onChange = {(e) => setPassword(e.target.value)} 
          value =  {password}
          minlength="6"
          />
        </div>
       
        <div className="token">
          <label  htmlFor="token"></label> 
          <input 
          className=""
          placeholder="Token"
          type="number" 
          name="token" 
          onChange = {(e) => setToken(e.target.value)} 
          value =  {randomCode}
          />
        </div>

    <button className = "buttonsign"
            onClick={confirm}
            value = "Confirm">
             <h5>{t('Sign.Confirm')} </h5>
           </button>
              <Link className="linklogin" to="/login" >
                {t('Sign.accountIn')}
              </Link>
        </form>
      </div>
       </div>
   
   );     
  
}
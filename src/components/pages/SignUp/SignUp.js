import React,{useState,useEffect} from 'react';

import { Link, useHistory} from 'react-router-dom';
import './SignUp.css'
import { useTranslation } from 'react-i18next';
import Navbar from '../../Navbar';




export function SignUp () {
// useEffect(()=>{
//   if(localStorage.getItem('user-info')){
//     history.push("/")
//   }
// })

const {t, i18n} = useTranslation();

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const history = useHistory();

async function signUp()
{
  let item = {name, email, password}
  console.log(item)

  let result = await fetch("http://localhost:5000/signup", 
  {
    method: "POST",
    body:JSON.stringify(item),
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  

  }).then(history.push("/confirm"))

  

  
  result = await result.json()
console.log("result", result)
}



   

      return (
    
     <>
   
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>{t('Sign.signup')}</h1>
        <form >
         <div className="firstName">
          <label  htmlFor="firstName"></label> 
          <input 
          type="text"
          className=""
          placeholder="Name"
          type="text" 
          name="name" 
          onChange = {(e) => setName(e.target.value)} 
          value =  {name}
         
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
          onChange =  {(e) => setEmail(e.target.value)} 
          value = {email} 
         
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
          onChange = {(e) => setPassword(e.target.value)} 
          value =  {password}
          />
        </div>
       
        
    <button className = "buttonsign"

    onClick={signUp}

           value = "Submit"
           >
             <h5>{t('Sign.signup')}</h5> 
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
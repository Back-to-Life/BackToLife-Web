import React,{useCallback,useContext,useState} from 'react';
import { withRouter, Redirect } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import './Confirm.css'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { Component } from 'react';




export default function Confirm () {
 
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [randomCode, setToken] = useState("")

const history = useHistory();



async function confirm()
{
  let item = {name, email, password, randomCode}
  console.log(item)

  let result = await fetch("http://localhost:5000/email-activate", 
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
       
        <div className="token">
          <label  htmlFor="token"></label> 
          <input 
          type="text"
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
           value = "Confirm"
           >
             Confirm 
           </button>
    
    
  
    
              <Link to="/login" >
                {"Have an account?"}
              </Link>
            
        </form>
      </div>
       </div>
   
   );     
  
   
  
//}
    
  

 
     
  
  
}
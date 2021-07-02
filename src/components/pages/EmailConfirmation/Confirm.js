import React,{useState} from 'react';
import './Confirm.css'

export default function Confirm () {

const [randomCode, setToken] = useState("")

      return (   
      
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

   
   );     
  
}
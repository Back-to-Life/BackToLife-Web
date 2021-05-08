import React,{useCallback,useContext,useState} from 'react';
import { withRouter, Redirect } from "react-router";
import { Link} from 'react-router-dom';
import axios from 'axios'



function Logout() {

    async function logout()
{

  let result = await axios("http://localhost:5000/logout", 
  {
    method: "GET",
    headers: {
        "Authorization":`Baerer ${token}`
    }
  
  })
  
  result = await result.json()
console.log("result", result)
}





    return (
        <div>
           <Link to = "/">
               <button
               onClick={logout}
               >
                   Logout

               </button>
           </Link>
        </div>
    )
}

export default Logout

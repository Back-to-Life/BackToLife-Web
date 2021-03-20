import React,{useCallback,useContext} from 'react';
import { withRouter, Redirect } from "react-router";
import app from "firebase";
//import { AuthContext } from "C:/Users/serap/Desktop/Backtolife_website/src/components/pages/firebase";
import { Link } from 'react-router-dom';
import './SignUp.css'



export default function SignIn({history}) {
 //const classes = useStyles();
 
const handleSignup = useCallback(
  async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  },
  [history]
);
  return (
    
     
      <div className="wrapper1">
       
         
        <div className="form-wrapper">

        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}  noValidate>
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
           
         
            
          <button className="buttonsign" type="submit">
            Sign Up
          </button>
         
             
            
              <Link to="/login" >
                {"You have an account? Sign In"}
              </Link>
            
        </form>
      </div>
       </div>
   
   );     
  
     
  
  
}
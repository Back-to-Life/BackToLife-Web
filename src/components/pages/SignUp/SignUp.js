import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../enviroments";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function SignUp() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const { t, i18n } = useTranslation();

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [randomCode, setToken] = useState("")

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });

  async function sign() {
    let item = { name, email, password };
     let item2 = {name, email, password, randomCode}
     let result2;
    console.log(item);

    let result = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    // .then(history.push("/confirm"));
    result = await result.json()
    console.log("result", result);
     result2 = await fetch(`${BASE_URL}/email-activate`, 
   {
     method: "POST",
     body:JSON.stringify(item2),
     headers: {
       "Content-Type":"application/json",
       "Accept":"application/json"
     }

   })
  // .then(history.push("/"))
   result2 = await result2.json()
   console.log("result", result2)
    // 

    
  }

  return (
    <>
      <div className="wrapper1">
      <img className="ThreeDimage" src="images/Saly-39.png" alt="" />
        <div className="form-wrapper">
          <h1>{t("Sign.signup")}</h1>
          <form>
            <div className="firstName">
              <label htmlFor="firstName"></label>
              <input
                className=""
                placeholder={t("Sign.name")}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="email">
              <label htmlFor="email"></label>
              <input
                className=""
                placeholder={t("Sign.email")}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div className="password">
              <label htmlFor="password"></label>
              <input
                type="text"
                className=""
                placeholder={t("Sign.password")}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <button className="buttonsign" onClick={() => {
          sign();
          handleOpen();
        }} value="Submit" >
              <h5>{t("Sign.signup")}</h5>
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                // onClose={handleClose}
              
              
      >
        <Fade in={open}>
          <div className={classes.paper}>
            
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

          </div>
        </Fade>
      </Modal>
            <Link className="linklogin" to="/login">
              {t("Sign.accountIn")}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

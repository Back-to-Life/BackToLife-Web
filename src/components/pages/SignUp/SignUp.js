import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../enviroments";


export function SignUp() {

  const { t, i18n } = useTranslation();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });

  async function signUser() {
    let item = { name, email, password };

    console.log(item);

    let result = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
         "Accept": "application/json",
      },
    })
    .then(history.push("/confirm"));
    result = await result.json()
    console.log("result", result);

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
            }} value="Submit" >
              <h5>{t("Sign.signup")}</h5>
            </button>
            
            <button className="buttonsign" value="Submit" onClick={signUser}>
              <h5>{t("Sign.signup")}</h5>
            </button>
 
            <Link className="linklogin" to="/login">
              {t("Sign.accountIn")}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
}

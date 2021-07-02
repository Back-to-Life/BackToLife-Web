import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SignIn.css";
import {BASE_URL} from '../../../enviroments'

export default function SignIn() {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });

  const submit = async (e) => {
    let item = { email, password };
    console.log(item);
    for (var i = 0; i < 2; i++) {

      if (!localStorage.getItem("user-info")) {

        let result = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then(history.push("/"));
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        console.log("result", result);
      }
      else {

        let idUser = localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1].toString()
        let myRefreshToken = localStorage.getItem('user-info').split(',')[1].split(':')[1].split('"')[1]
        let data = {myRefreshToken}

        let verify = await fetch(`${BASE_URL}/users/${idUser}/checkToken`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"

          },
        }).then(history.push("/"))
        verify = await verify.json();
        console.log("verify:", verify)
      }
    }
      window.location.reload();
  }
  return (
    <>
      <div className="wrapper1">
        <img className="Tdimage" src="images/Saly-38.png" alt="" />
        <div className="form-wrapper">
          <h1>{t("Sign.signin")}</h1>
          <form>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                placeholder={t('Sign.email')}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div className="password">
              <label htmlFor="password"></label>
              <input
                placeholder={t('Sign.password')}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                minlength="6"
              />
            </div>

            <button className="buttonsign" onClick={submit} value="Submit">
              <h5>{t("Sign.signin")}</h5>
            </button>

            <Link className="passwordlink" to="/forgotPassword">
              {t("Sign.forgot")}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

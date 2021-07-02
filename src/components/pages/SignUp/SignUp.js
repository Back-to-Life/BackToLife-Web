import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../enviroments";
import Confirm from "../EmailConfirmation/Confirm";
export function SignUp() {
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });
  const [showResults, setShowResults] = React.useState(false);

  async function signUser() {
    let item = { name, email, password };
    console.log(item);

    let result = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(history.push(setShowResults(true)));
    result = await result.json();
    console.log("result", result);
  }

  const [randomCode, setToken] = useState("");

  async function confirm() {
    let item2 = { name, email, password, randomCode };
    console.log(item2);

    let result2 = await fetch(`${BASE_URL}/email-activate`, {
      method: "POST",
      body: JSON.stringify(item2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      )
      .then(history.push("/home"));

    result2 = await result2.json();
    console.log("result", result2);
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
                placeholder={t("Sign.password")}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                minlength="6"
              />
            </div>

            {showResults ? <Confirm /> : null}

            {showResults ? null : (
              <button className="buttonsign" value="Submit" onClick={signUser}>
                <h5>{t("Sign.signup")}</h5>
              </button>
            )}
            {showResults ? (
              <button className="buttonsign" onClick={confirm} value="Confirm">
                <h5>{t("Sign.Confirm")} </h5>
              </button>
            ) : null}

            <Link className="linklogin" to="/login">
              {t("Sign.accountIn")}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./ForgotPassword.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../enviroments";

export default function ForgotPassword() {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const history = useHistory();

  async function forgotPassword() {
    let item = { email };
    console.log(email);

    let result = await fetch(`${BASE_URL}/forgotPassword`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(history.push("/resetPassword"));

    result = await result.json();
    console.log("result", result);
  }
  return (
    <>
      <div className="wrapper1">
        <img className="upperimg" src="images/Saly-41.png" alt="" />
        <div className="form-wrapper">
          <h1>{t("Sign.forgotMain")}</h1>
          <form>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                className=""
                placeholder={t("Sign.email")}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <button
              className="buttonsign"
              onClick={forgotPassword}
              value="Confirm"
            >
              <h5>{t("Sign.Confirm")} </h5>
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

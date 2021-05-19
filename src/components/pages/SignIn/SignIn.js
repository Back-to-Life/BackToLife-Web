import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SignIn.css";

export default function SignIn() {

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });
  const { t, i18n } = useTranslation();


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [id, setId] = useState();
  const history = useHistory();
  id =  localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1]

  const submit = async (e) => {
    let item = { email, password };
    console.log(item);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }).then(history.push("/"));
    
    let sort = await fetch(`http://localhost:5000/whereAmI`, {
      method:"POST",
      body: JSON.stringify(id)
    })
    sort = await sort.json();
    localStorage.setItem("sort", JSON.stringify(sort));
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log("result", result);
    if (result.status == 200) {
      console.log("result", result.body);

    }

    window.location.reload();
  };

  return (
    <>
      <div className="wrapper1">
        <div className="form-wrapper">
          <h1>{t("Sign.signin")}</h1>
          <form>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="text"
                className=""
                placeholder="E-mail"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label htmlFor="password"></label>
              <input
                type="text"
                className=""
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
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

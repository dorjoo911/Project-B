import React, { useState, useEffect, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Signup = (props) => {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   // check email in real time
  // }, [email, password1]);
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0N0EHElAbM2-Thze87O_nOoW59EFhaKg
  const signup = () => {
    if (password1 === password2) {
      ctx.signupUser(email, password1);
    } else {
      setError("Your password not matching!");
    }
  };

  return (
    <div className={css.Signup}>
      {ctx.state.userId && <Redirect to="/" />}

      <h1>REGISTER FORM</h1>
      <div>Please, input your information</div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword1(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setPassword2(e.target.value)}
        type="password"
        placeholder="Password"
      />
      {error && <div style={{ color: "red" }}>{error}</div>}

      {ctx.state.firebaseError && (
        <div style={{ color: "red" }}>{ctx.state.firebaseError}</div>
      )}

      {ctx.state.saving && <Spinner />}

      <Button text="REGISTER" btnType="Success" daragdsan={signup} />
    </div>
  );
};

export default Signup;
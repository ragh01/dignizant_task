import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const onChangeName = (e) => {
    setName({ name: e.target.value });
  };
  const onChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };
  const onChangePassword = (e) => {
    setPassword({ password: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userData); 

    await axios
      .post("http://localhost:8080/signup", userData)
      .then((res) => {
        console.log(res.data);
        setName(name);
        setEmail(email);
        setPassword(password);
      })
      .catch((error) => {
        console.log(error);
      });
    setSignedUp(true);
  };

  return (
    <div>
      {signedUp ? (
        <p className="bookedMsg">User Signed Up successfully</p>
      ) : (
        <form onSubmit={onSubmit} className="form contact-form">
          <div className="input-group-wrap">
            <div className="input-group">
              <input
                className="input"
                type="text"
                onChange={onChangeName}
                placeholder="Name..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <input
                className="input"
                type="email"
                onChange={onChangeEmail}
                placeholder="Email..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <input
                onChange={onChangePassword}
                type="password"
                className="input"
                placeholder="Password..."
                required
              />
              <span className="bar"></span>
            </div>
          </div>
          <button type="submit" className="btn form-btn btn-purple">
            SIGNUP NOW
            <span className="dots">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
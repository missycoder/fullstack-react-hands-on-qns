import React, { useState } from 'react'

export default function RegisterForm() {

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userErrorNotification, setUserErrorNotification] = useState("");
  const [emailErrorNotification, setEmailErrorNotification] = useState("");
  const [passwordErrorNotification, setPasswordErrorNotification] = useState("");

  // regular expression
  // meow123@gmail.com
  // to prevent cross site scripting: should avoid some of these special characters
  // avoid: %, *
  const emailRegex = /^[a-zA-Z0-9._-] + @[a-zA-Z.-] + \.[A-Za-z.]{2,}$/
  const textRegex = /^[a-zA-Z0-9] {0,15} $/


  function validateAll() {
    validateUserName();
    validateEmail();
    validatePassword();
  }

  function validateUserName() {
    if (textRegex.test(userName)) {
      setUserErrorNotification("");
    } else {
      setUserErrorNotification("Username must be less than 15 characters and cannot contain any special characters");
    }
  }

  function validateEmail() {
    if (emailRegex.test(email)) {
      setEmailErrorNotification("");
    } else {
      setEmailErrorNotification("Invalid email format");
    }
  }

  function validatePassword() {
    if (textRegex.test(password)) {
      setUserErrorNotification("");
    } else {
      setUserErrorNotification("Invalid password format");
    }
  }


  return (
    <React.Fragment>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={(event) => setUsername(event.target.value)} />
        <span class="error" style={{ color: "red" }}>{userErrorNotification}</span>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} />
        <span class="error" style={{ color: "red" }}>{emailErrorNotification}</span>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={(event) => setPassword(event.target.value)} />
        <span class="error" style={{ color: "red" }}>{passwordErrorNotification}</span>
      </div>
      <button onClick={() => validateAll()}>Submit</button>
    </React.Fragment>
  )
}
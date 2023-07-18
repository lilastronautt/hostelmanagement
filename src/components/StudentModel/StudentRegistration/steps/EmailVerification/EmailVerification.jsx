import React from "react";
import "./EmailVerification.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmailVerification = () => {
  const [email, setEmail] = useState(""); // for catching live inputs for email
  const navigate = useNavigate();
  const emailEnterHandler = (event) => {
    // updating the char input as we go
    setEmail(() => event.target.value);
  };

  const emailSaveHandler = () => {
    // final value of the user Email
    if (!email.includes("@") || !email.includes(".")) {
      // checking for human error (email format)
      alert("Enter Valid Email");
      setEmail(() => "");
    } else {
      console.log("emailValid"); // continue with the flow (correct email input format)
      navigate("/student-details");
    }
  };

  return (
    <>
      <main className="emailVerification__box">
        <div className="emailId_input">
          <label>Email</label>
          <input
            placeholder="Enter Email"
            type="text"
            onChange={emailEnterHandler}
            value={email}
          ></input>
          <button onClick={emailSaveHandler}>Verify</button>
        </div>
      </main>
    </>
  );
};

export default EmailVerification;

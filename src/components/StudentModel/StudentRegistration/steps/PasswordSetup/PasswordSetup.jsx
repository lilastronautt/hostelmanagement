import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordSetup.css";

const PasswordSetup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); // save password state
  const [confirmPassword, setConfirmPassword] = useState(""); // save confirm password state
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate password requirements
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{7,}$/;
    if (!password.match(passwordRegex)) {
      setErrorMessage(
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*()), and be at least 7 characters long."
      );
      return;
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // password is valid
    // take the student to dashboard
    navigate("/student/dashboard");
  };

  const checkCondition = (regex) => {
    return regex.test(password);
  };

  return (
    <div>
      <h1>Set Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="check-flex">
          <div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>
          <div className="password-conditions">
            <p className={checkCondition(/[a-z]/) ? "matched" : "unmatched"}>
              Contains at least 1 lowercase letter
            </p>
            <p className={checkCondition(/[A-Z]/) ? "matched" : "unmatched"}>
              Contains at least 1 uppercase letter
            </p>
            <p className={checkCondition(/\d/) ? "matched" : "unmatched"}>
              Contains at least 1 number
            </p>
            <p
              className={
                checkCondition(/[!@#$%^&*()]/) ? "matched" : "unmatched"
              }
            >
              Contains at least 1 special character (!@#$%^&*())
            </p>
            <p
              className={
                checkCondition(/^[A-Za-z\d!@#$%^&*()]{7,}$/)
                  ? "matched"
                  : "unmatched"
              }
            >
              Password length is at least 7 characters
            </p>
          </div>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordSetup;

import React, { useState } from "react";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo-container">
          <img src="/logo22.png" alt="CenturyPly Logo" />
        </div>
        <div className="login-heading">
          <p>Sign in to continue to your account</p>
        </div>
        (
        <div className="login-alert error-alert">
          <i className="fa-solid fa-circle-exclamation"></i>
          <span></span>
        </div>
        ) (
        <div className="login-alert success-alert">
          <i className="fa-solid fa-circle-check"></i>
          <span></span>
        </div>
        )
        <form onSubmit={handleSubmit}>
          <div className="input-group-container">
            <div className="input-box">
              <i className="fa-solid fa-user"></i>

              <input
                id="userName"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter your username"
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div className="input-group-container">
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i
                  className={
                    showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                  }
                ></i>
              </button>
            </div>
          </div>

          <button type="submit" className="login-button" disabled>
            <>
              <span className="spinner-border spinner-border-sm"></span>
              Signing in...
            </>

            <>
              Login
              <i className="fa-solid fa-arrow-right"></i>
            </>
          </button>
        </form>
        <p className="login-footer">
          © {new Date().getFullYear()} CenturyPly. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;

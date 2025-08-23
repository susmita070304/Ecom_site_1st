import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignup = () => {
    let tempErrors = {};

    if (!password) tempErrors.password = "Password is required";
    if (!confirmPassword) tempErrors.confirmPassword = "Confirm Password is required";

    if (password && confirmPassword && password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    // Password strength validation (at least 8 characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (password && !passwordRegex.test(password)) {
      tempErrors.password =
        "Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character!";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) return;

    const signupData = JSON.parse(localStorage.getItem("signupData"));
    if (!signupData) {
      alert("No signup data found. Please fill your details first.");
      navigate("/signup");
      return;
    }

    const userData = {
      ...signupData,
      password,
      expiry: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.removeItem("signupData");

    alert("Account created! You are logged in.");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <h2 className="text-2xl font-bold mb-4">Set Password</h2>

      <div className="flex flex-col w-64">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
      </div>

      <div className="flex flex-col w-64">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
        )}
      </div>

      <button
        onClick={handleSignup}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
      >
        Sign Up
      </button>
    </div>
  );
}

export default Password;

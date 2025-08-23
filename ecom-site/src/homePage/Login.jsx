import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check both completed users and signupData
    const savedUser =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("signupData"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }


    // Validate credentials
    if (
      savedUser.email === email &&
      savedUser.password === password &&
      savedUser.expiry > new Date().getTime()
    ) {
      alert("Login successful!");
      navigate("/");
    } else if (savedUser.expiry <= new Date().getTime()) {
      alert("Session expired. Please sign up again.");
      localStorage.removeItem("user");
      navigate("/signup");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Email or Phone"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-3 w-64"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-3 w-64"
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;

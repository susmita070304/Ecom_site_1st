import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [landmark, setLandmark] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser) {
      alert("You are already signed up. Redirecting to login page...");
      navigate("/login");
    }
  }, [navigate]);

  const handleSignup = () => {
    let tempErrors = {};

    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) tempErrors.email = "Invalid email format";

    if (!number) tempErrors.number = "Phone number is required";
    else if (!/^[0-9]+$/.test(number)) tempErrors.number = "Phone must contain only digits";

    if (!address) tempErrors.address = "Address is required";
    if (!address) tempErrors.address = "Address is required";
    else if (!/^[A-Za-z\s]+$/.test(address)) tempErrors.address = "Address cannot contain numbers";

    if (!building) tempErrors.building = "Building number is required";
    if (!building) tempErrors.building = "Building number is required";
    else if (!/^[0-9]+$/.test(building)) tempErrors.building = "Building number must contain only digits";

    if (!landmark) tempErrors.landmark = "Landmark is required";

    if (!password) tempErrors.password = "Password is required";
    else if (password.length < 8) tempErrors.password = "Password must be at least 8 characters";
    if (!password) tempErrors.password = "Password is required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    ) {
      tempErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character";
    }



    setErrors(tempErrors);
    if (Object.keys(tempErrors).length > 0) return;

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && (existingUser.email === email || existingUser.number === number)) {
      alert("An account with this email or phone already exists. Redirecting to login...");
      navigate("/login");
      return;
    }

    const user = {
      name,
      email,
      number,
      address,
      building,
      landmark,
      password,
      expiry: new Date().getTime() + 24 * 60 * 60 * 1000 // 1 day session
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <input type="text" placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} className="border p-2 w-64" />
      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

      <input type="email" placeholder="E-mail" value={email}
        onChange={(e) => setEmail(e.target.value)} className="border p-2 w-64" />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

      <input type="text" placeholder="Phone Number" value={number}
        onChange={(e) => setNumber(e.target.value)} className="border p-2 w-64" />
      {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}

      <input type="text" placeholder="Address" value={address}
        onChange={(e) => setAddress(e.target.value)} className="border p-2 w-64" />
      {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}

      <input type="text" placeholder="Building Number" value={building}
        onChange={(e) => setBuilding(e.target.value)} className="border p-2 w-64" />
      {errors.building && <span className="text-red-500 text-sm">{errors.building}</span>}

      <input type="text" placeholder="Landmark" value={landmark}
        onChange={(e) => setLandmark(e.target.value)} className="border p-2 w-64" />
      {errors.landmark && <span className="text-red-500 text-sm">{errors.landmark}</span>}


      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} className="border p-2 w-64" />
      {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}


      <button onClick={handleSignup}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
        Sign Up
      </button>
    </div>
  );
}

export default Signup;

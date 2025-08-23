import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [landmark, setLandmark] = useState("");

  // State for error messages
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is already fully signed up, redirect to login page
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser) {
      alert("You are already signed up. Redirecting to login page...");
      navigate("/login");
    }
  }, [navigate]);

  const handleNext = () => {
    let tempErrors = {};

    // Validate text fields (no numbers allowed)
    const textRegex = /^[^0-9]+$/;
    if (!name) tempErrors.name = "Name is required";
    else if (!textRegex.test(name)) tempErrors.name = "Name cannot contain numbers";

    if (!address) tempErrors.address = "Address is required";
    else if (!textRegex.test(address)) tempErrors.address = "Address cannot contain numbers";

    // Validate building number (only digits)
    const buildingRegex = /^[0-9]+$/;
    if (!building) tempErrors.building = "Building Number is required";
    else if (!buildingRegex.test(building)) tempErrors.building = "Building Number must contain only digits";

    if (!landmark) tempErrors.landmark = "Landmark is required";
    else if (!textRegex.test(landmark)) tempErrors.landmark = "Landmark cannot contain numbers";

    // Validate number field
    const numberRegex = /^[0-9]+$/;
    if (!number) tempErrors.number = "Number is required";
    else if (!numberRegex.test(number)) tempErrors.number = "Number must contain only digits";

    // Validate email
    if (!email) tempErrors.email = "Email is required";

    setErrors(tempErrors);

    // Stop if there are errors
    if (Object.keys(tempErrors).length > 0) return;

    // Check if email or number already exists in fully signed up user
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser) {
      if (existingUser.email === email || existingUser.number === number) {
        alert("An account with this email or phone number already exists. Redirecting to login page...");
        navigate("/login");
        return;
      }
    }

    // Check if email or number already exists in temporary signup (partial signup)
    const tempSignup = JSON.parse(localStorage.getItem("signupData"));
    if (tempSignup) {
      if (tempSignup.email === email || tempSignup.number === number) {
        alert("You have already started signing up with this email or phone. Redirecting to password page...");
        navigate("/login");
        return;
      }
    }

    // Store signup info temporarily
    const signupData = { name, email, number, address, building, landmark };
    localStorage.setItem("signupData", JSON.stringify(signupData));

    // Navigate to Password page
    navigate("/password");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <div className="flex flex-col w-64">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>

      <div className="flex flex-col w-64">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      <div className="flex flex-col w-64">
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border p-2"
        />
        {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}
      </div>

      <div className="flex flex-col w-64">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2"
        />
        {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
      </div>

      <div className="flex flex-col w-64">
        <input
          type="text"
          placeholder="Building Number"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          className="border p-2"
        />
        {errors.building && <span className="text-red-500 text-sm">{errors.building}</span>}
      </div>

      <div className="flex flex-col w-64">
        <input
          type="text"
          placeholder="Landmark"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          className="border p-2"
        />
        {errors.landmark && <span className="text-red-500 text-sm">{errors.landmark}</span>}
      </div>

      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
      >
        Next
      </button>
    </div>
  );
}

export default Signup;

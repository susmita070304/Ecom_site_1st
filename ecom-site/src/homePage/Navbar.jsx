import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch user from localStorage when drawer opens
  const handleDrawerOpen = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setDrawerOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDrawerOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      {/* Logo */}
      <div
        className="logo text-left absolute left-[25px] top-[9px] w-[156px] h-[101px] z-40"
        style={{ WebkitTextStroke: "1px #000000" }}
      >
        <span>
          <span className="logo block text-xl font-bold">Comfy</span>
          <span className="logo text-3xl text-[#b2ddc2] font-bold">Home</span>
        </span>
      </div>

      {/* Home icon */}
      <div className="icons absolute right-[178px] top-[10px] w-11 h-11 text-black fill-current z-40">
        <button onClick={handleHomeClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-full h-full"
          >
            <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
          </svg>
        </button>
      </div>

      {/* Profile Icon */}
      <div className="icons absolute right-[129px] top-[10px] w-11 h-11 text-black fill-current z-50">
        <button onClick={handleDrawerOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-full h-full"
          >
            <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
          </svg>
        </button>
      </div>

      {/* Profile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-3 text-xl"
          onClick={() => setDrawerOpen(false)}
        >
          ✖
        </button>

        {/* Drawer Content */}
        <div className="p-4 mt-12 flex flex-col gap-4 items-center text-center">
          {user ? (
            <>
              <h2 className="font-semibold text-3xl">Welcome, {user.name}</h2>
              <p className="text-xl">Number: {user.number}</p>
              <p className="text-xl">Email: {user.email}</p>
              <button
                className="px-2 py-1 text-xl bg-red-500 text-white rounded w-[250px]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <h2 className="font-semibold text-3xl">Welcome</h2>
              <button
                className="px-2 py-1 text-2xl bg-blue-500 text-white rounded w-[250px]"
                onClick={() => {
                  navigate("/signup");
                  setDrawerOpen(false);
                }}
              >
                Sign Up
              </button>
              <button
                className="px-2 py-1 text-xl bg-green-500 text-white rounded w-[250px]"
                onClick={() => {
                  navigate("/login");
                  setDrawerOpen(false);
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>

      {/* Share icon */}
      <div className="icons absolute right-[78px] top-[10px] w-11 h-11 text-black fill-current z-40">
        <button
          onClick={() => {
            navigator.clipboard
              .writeText(window.location.href)
              .then(() => {
                alert("Link copied to your clipboard!");
              })
              .catch((err) => {
                console.error("Failed to copy: ", err);
              });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-full h-full"
          >
            <path d="M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z" />
          </svg>
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="absolute right-6 top-4 z-40">
        <button onClick={() => setIsOpen(true)} className="w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-full h-full fill-black"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm32 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
          </svg>
        </button>
      </div>

      {/* Hamburger Drawer */}
      <div
        className={`fixed top-12 right-0 h-60 w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-xl text-right pr-3 bg-black text-white w-60"
        >
          ✕
        </button>

        <div className="mt-16 flex flex-col items-center space-y-6">
          <button
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
            className="text-lg font-semibold"
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              navigate("/feedback");
              setIsOpen(false);
            }}
            className="text-lg font-semibold"
          >
            Feedback
          </button>
          <button
            onClick={() => {
              navigate("/faq");
              setIsOpen(false);
            }}
            className="text-lg font-semibold"
          >
            FAQ
                      </button>
        </div>
      </div>
    </div>
    
  );
}


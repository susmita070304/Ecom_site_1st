import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between font-sans">
      
      {/* 1. HEADER (Matches Comfy Branding Layout) */}
      <header className="bg-white px-6 py-4 flex justify-between items-center border-b-2 border-black w-full fixed top-0 left-0 z-50 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-black">Comfy</h1>
          <p className="text-xs font-bold text-gray-700">Order Status</p>
        </div>
        <div className="flex items-center gap-4 text-xl text-black">
          <span className="cursor-pointer hover:opacity-70" onClick={() => navigate("/")}>🏠</span>
          <span className="cursor-pointer hover:opacity-70" onClick={() => navigate("/cart")}>🛒</span>
        </div>
      </header>

      {/* 2. BODY SECTION (With CSS Animations) */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 mt-20 mb-16">
        <div className="max-w-md w-full text-center space-y-6">
          
          {/* Animated Arrow/Icon Container */}
          <div className="relative h-32 flex items-center justify-center overflow-hidden">
            {/* Tailwind custom style inline tracking:
              - animate-slide-in: Flies in from off-screen left to center
              - animate-bounce: Bounces in place after reaching center point
            */}
            <div className="text-6xl filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-[slideIn_1s_ease-out_forwards]">
              <div className="animate-bounce">
                📦
              </div>
            </div>
          </div>

          {/* Animated Message Group */}
          <div className="space-y-2 opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]">
            <h2 className="text-3xl font-black uppercase text-black tracking-wide">
              Congratulations!
            </h2>
            <p className="text-base font-bold text-gray-700 border border-black bg-[#BCE3C9] py-2 px-4 inline-block rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Your order is successfully confirmed.
            </p>
          </div>

          {/* Action Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-[fadeIn_0.5s_ease-out_1.2s_forwards]">
            
            {/* Button 1: Order Again */}
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto bg-[#F3C677] text-black font-black px-6 py-3 border-2 border-black rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider text-xs hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[3px] active:shadow-none transition-all"
            >
              🛒 Order Again
            </button>

            {/* Button 2: Show Previous Orders */}
            <button
              onClick={() => navigate("/orderHistory")}
              className="w-full sm:w-auto bg-white text-black font-black px-6 py-3 border-2 border-black rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider text-xs hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[3px] active:shadow-none transition-all"
            >
              📋 Show Previous Orders
            </button>
            
          </div>

        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="bg-black text-white text-center py-4 text-xs font-bold tracking-wider border-t-2 border-black w-full fixed bottom-0 left-0 z-50">
        <p>© {new Date().getFullYear()} COMFY STORE. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* CSS Keyframes injected directly into the document container for quick setup */}
      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          60% {
            transform: translateX(10vw);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
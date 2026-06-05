import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice"; 

export default function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [activeAccordion, setActiveAccordion] = useState("upi");
  const [orderHistory, setOrderHistory] = useState([]);

  // Calculate live dynamic totals matching Cart.jsx logic
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace("₹", "").replace(",", ""));
    return total + price * item.quantity;
  }, 0);

  useEffect(() => {
    const savedOrders = localStorage.getItem("comfy_orders");
    if (savedOrders) {
      setOrderHistory(JSON.parse(savedOrders));
    }
  }, []);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      orderId: "CMFY-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      items: [...cartItems],
      paymentMethod: activeAccordion.toUpperCase(),
      totalAmount: totalPrice,
    };

    if (activeAccordion === "upi") {
      const upiDeepLink = `upi://pay?pa=comfystore@bank&pn=ComfyStore&am=${totalPrice}&cu=INR`;
      console.log("Mocking App Redirect Intent:", upiDeepLink);
    }

    // Save order payload history securely onto localStorage array wrapper
    const updatedHistory = [newOrder, ...orderHistory];
    localStorage.setItem("comfy_orders", JSON.stringify(updatedHistory));

    // Clear the cart state globally
    dispatch(clearCart()); 
    
    // ⚡ REDIRECTS STRAIGHT TO ORDER CONFIRMATION PAGE AFTER CLICKING CONTINUE
    navigate("/orderConfirmation"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col items-center font-sans mt-20">
      
      <div className="w-full max-w-3xl bg-[#A3D9C9] border-2 border-black shadow-sm overflow-hidden rounded-sm">
        
        {/* Header Bar Navigation Header */}
        <div className="bg-white px-4 py-3 flex justify-between items-center border-b-2 border-black">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-black">Comfy</h1>
            <p className="text-xs font-bold text-gray-700">Home</p>
          </div>
          {/* Header button still lets them view old history directly if they want */}
          <button 
            className="text-xs font-black border border-black px-3 py-1 bg-gray-50 rounded-sm hover:bg-gray-200"
            onClick={() => navigate("/orderHistory")}
          >
            Previous Orders
          </button>
        </div>

        {/* Accordion List Body Wrapper */}
        <div className="p-4 sm:p-6 space-y-4">
          <h2 className="text-xs font-black uppercase tracking-wider text-black">Payment Options</h2>

          {/* UPI */}
          <div className="border border-black rounded-sm bg-transparent">
            <button 
              onClick={() => setActiveAccordion(activeAccordion === "upi" ? "" : "upi")}
              className="w-full flex justify-between items-center p-3 text-left font-black text-black"
            >
              <div>
                <p className="text-sm font-black">UPI</p>
                <p className="text-xs text-gray-800 font-normal">Pay by UPI App</p>
              </div>
              <span>{activeAccordion === "upi" ? "▲" : "▼"}</span>
            </button>

            {activeAccordion === "upi" && (
              <div className="bg-white m-3 p-4 border-2 border-[#3B82F6] rounded-sm space-y-4">
                <div className="flex items-center gap-3 font-bold text-sm">
                  <input type="radio" checked readOnly className="accent-black w-4 h-4" />
                  <label>Add UPI ID</label>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter UPI ID" className="border border-black p-2 text-sm flex-1 focus:outline-none" />
                  <button className="bg-[#F3C677] border border-black px-6 py-2 font-black text-sm">Verify</button>
                </div>
                <button 
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#E5E7EB] border border-gray-400 py-3 text-sm font-black text-gray-700 tracking-wider uppercase"
                >
                  Pay ₹{totalPrice.toLocaleString()}
                </button>
              </div>
            )}
          </div>

          {/* Credit/Debit Card Section */}
          <div className="border border-black rounded-sm bg-transparent">
            <button 
              onClick={() => setActiveAccordion(activeAccordion === "card" ? "" : "card")}
              className="w-full flex justify-between items-center p-3 text-left font-black text-black"
            >
              <div>
                <p className="text-sm font-black">Credit / Debit / ATM Card</p>
                <p className="text-xs text-gray-800 font-normal">Add and secure cards</p>
              </div>
              <span>{activeAccordion === "card" ? "▲" : "▼"}</span>
            </button>

            {activeAccordion === "card" && (
              <div className="bg-white m-3 p-4 border border-black rounded-sm space-y-3">
                <input type="text" placeholder="Card Number" className="w-full border border-black p-2 text-sm focus:outline-none" />
                <div className="flex gap-2">
                  <input type="text" placeholder="MM / YY" className="w-1/2 border border-black p-2 text-sm focus:outline-none" />
                  <input type="password" placeholder="CVV" className="w-1/2 border border-black p-2 text-sm focus:outline-none" />
                </div>
              </div>
            )}
          </div>

          {/* Cash on Delivery */}
          <div className="border border-black rounded-sm bg-transparent">
            <button 
              onClick={() => setActiveAccordion(activeAccordion === "cod" ? "" : "cod")}
              className="w-full flex justify-between items-center p-3 text-left font-black text-black"
            >
              <p className="text-sm font-black">Cash on Delivery</p>
              <span>{activeAccordion === "cod" ? "▲" : "▼"}</span>
            </button>

            {activeAccordion === "cod" && (
              <div className="bg-white m-3 p-3 border-2 border-green-600 rounded-sm text-xs font-bold text-green-800">
                ✓ Selected COD. Total due at doorstep: ₹{totalPrice.toLocaleString()}
              </div>
            )}
          </div>

          {/* Continue Button handles checkout execution and forces redirect to orderConfirmation */}
          <div className="flex justify-end pt-4">
            <button 
              onClick={handlePlaceOrder}
              className="bg-[#F3C677] text-black font-black px-8 py-2 border-2 border-black rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider text-sm hover:translate-y-[1px] active:translate-y-[3px]"
            >
              Continue
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
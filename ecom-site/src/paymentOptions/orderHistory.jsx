import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 

export default function OrderHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orderHistory, setOrderHistory] = useState([]);

  // Fetch the current orders from localStorage when the component loads
  useEffect(() => {
    const savedOrders = localStorage.getItem("comfy_orders");
    if (savedOrders) {
      setOrderHistory(JSON.parse(savedOrders));
    }
  }, []);

  // Dispatch items back into Redux and route back to Checkout
  const handleOrderAgain = (pastOrderItems) => {
    pastOrderItems.forEach((item) => {
      dispatch(addToCart(item)); 
    });

    alert("Items re-added to your cart! Redirecting to checkout.");
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col items-center font-sans mt-20">
      <div className="w-full max-w-2xl bg-white border-2 border-black p-5 rounded-sm shadow-md">
        
        {/* Header Row */}
        <div className="flex justify-between items-center border-b-2 border-black pb-3 mb-6">
          <h2 className="text-xl font-black uppercase text-black tracking-wide">Your Order History</h2>
          <button 
            onClick={() => navigate("/payment")} 
            className="text-xs font-black border border-black px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors uppercase"
          >
            Back to Checkout
          </button>
        </div>

        {/* Order Cards Logic */}
        {orderHistory.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 font-bold text-sm">No historical orders tracked yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <div 
                key={order.orderId} 
                className="border-2 border-black p-4 rounded-sm bg-gray-50 flex flex-col gap-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Top Row: Order Metadata */}
                <div className="flex justify-between items-center border-b border-dashed border-gray-400 pb-2">
                  <div>
                    <p className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 inline-block rounded-sm">
                      {order.orderId}
                    </p>
                    <p className="text-[11px] text-gray-500 font-bold mt-1">Placed on: {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-black text-gray-400">Paid Via</p>
                    <p className="text-xs font-black text-gray-700">{order.paymentMethod}</p>
                  </div>
                </div>

                {/* Middle Section: Detailed item mapping row iteration */}
                <div className="space-y-3">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm bg-white p-2 border border-black rounded-sm">
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-10 h-10 object-cover border border-black rounded-sm"
                          />
                        )}
                        <div>
                          <p className="font-black text-black">{item.name}</p>
                          <p className="text-xs text-gray-500 font-bold">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Row: Totals Metrics and Core Function Submission Action */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-400">Grand Total</p>
                    <p className="text-lg font-black text-black">
                      ₹{order.totalAmount.toLocaleString()}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => handleOrderAgain(order.items)}
                    className="bg-[#F3C677] border-2 border-black font-black text-xs px-5 py-2.5 uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all"
                  >
                    🔄 Order Again
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
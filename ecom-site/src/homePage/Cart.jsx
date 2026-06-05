import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

export default function Cart() {
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(
      item.price.replace("₹", "").replace(",", "")
    );

    return total + price * item.quantity;
  }, 0);

  const handleBuyNow = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/signup");
      return;
    }

    if (user.expiry && user.expiry < Date.now()) {
      localStorage.removeItem("user");
      navigate("/signup");
      return;
    }

    navigate("/payment");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-serif mt-20">
      {cartItems.length === 0 ? (
        <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
      ) : (
        <div className="w-full max-w-4xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="text-2xl font-semibold">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-semibold">
                {item.name}
              </h2>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="border px-3 py-1 text-xl"
                >
                  -
                </button>

                <span className="text-xl font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="border px-3 py-1 text-xl"
                >
                  +
                </button>
              </div>

              <p className="text-xl">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-3xl font-bold text-right mt-8">
        Total: ₹{totalPrice.toLocaleString()}
      </h2>

      <div className="flex justify-end mt-10">
        <button
          onClick={handleBuyNow}
          className="fixed bg-[#BCE3C9] px-20 py-3 rounded-lg text-3xl font-bold border-2 border-black bottom-6 right-6 hover:scale-105 font-serif"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
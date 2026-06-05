import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

export default function Cart() {
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-serif">
      {cartItems.length === 0 ? (
        <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
      ) : (
        <div className="w-full max-w-4xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
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
        <button className="bg-[#BCE3C9] px-8 py-3 rounded-lg text-xl font-bold border-2 border-black">
          Buy Now
        </button>
      </div>
    </div>
  );
}
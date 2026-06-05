// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./homePage/Contact";
import Feedback from "./homePage/Feedback";
import FAQ from "./homePage/FAQ";
import HeroSection from "./homePage/HeroSection";
import Cart from "./homePage/Cart";
import Aboutus from "./homePage/Aboutus";
import Layout from "./layouts/Layout";
import Signup from "./homePage/Signup";
import Login from "./homePage/Login";
import Password from "./homePage/Password";
import Products from "./varieties/Products";
import ProductDetails from "./productsDetails/productDetails";
import Payment from "./paymentOptions/payment";
import OrderHistory from "./paymentOptions/orderHistory";
import OrderConfirmation from "./paymentOptions/orderConfirmation";

function App() {
  return (
    <Router>
      <Routes>
     
         <Route element={<Layout />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/orderConfirmation" element={<OrderConfirmation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

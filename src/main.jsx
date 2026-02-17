import React from "react";
import { StrictMode } from "react";
import {createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./CartProvider.jsx";
import "./index.css";
import App from "./App.jsx";
import { Home } from "./components/pages/Home.jsx";
import { About } from "./components/pages/About.jsx";
import { Product } from "./components/pages/Product.jsx";
import { Shop } from "./components/pages/Shop.jsx";
import { Cart } from "./components/pages/Cart.jsx";
import { ShoppingBag } from "./components/pages/ShoppingBag.jsx";
import { MyAccount } from "./components/pages/MyAccount.jsx";
import { Blog } from "./components/pages/Blog.jsx";
import { OurStory } from "./components/pages/OurStory.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shopping-bag" element={<ShoppingBag />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);

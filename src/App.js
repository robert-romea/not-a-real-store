import "./App.css";
//import { Navbar, Footer } from "./index2";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Contact } from "./components";

import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const products = data?.products;
  console.log(products);

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home products={products} />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./componments/nav";
import Contact from "./componments/contact";
import Shop from "./componments/shop";
import Home from "./componments/home";
import Footer from "./componments/footer";
import Product1 from "./componments/product1";
import ScrollToTop from "./componments/ScrollToTop";
import Purchase from "./componments/Purchase";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route exact path="/" element=  {<Home/>}/>
          <Route exact path="/shop" element=  {<Shop/>}/>
          <Route exact path="/contact" element=  {<Contact/>}/>
          <Route path="/product/:id" element={<Product1 />} />
          <Route path="/purchase/:id" element={<Purchase />} /> {/* New Route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

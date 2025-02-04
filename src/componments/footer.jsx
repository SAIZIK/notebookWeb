import React from "react";
import "../styles/footer.css";
import { Link } from 'react-router-dom'
import logoWhite from "../assests/logoWhite.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="fLeft">
        <img src={logoWhite} alt="logo" />
        <p>�� 2021 Hopes Touch. All rights reserved.</p>
      </div>
      <div className="fRight">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default footer;

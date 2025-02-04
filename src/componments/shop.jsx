import React from 'react';
import '../styles/shop.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products data:", error));
  }, []);

  return (
    <div className='shop'>
      <h2> Wlecome to our shop</h2>
      <ul className="cards">
        {products.map((element, index) => (
          <li key={index} className="card">
              <Link to={`/product/${element.id}`}>

              <img src={element.image[0]} alt={element.name}  />
              <h3>{element.name}</h3>
              <p>{element.price} DA</p>
              <br />
              <button>More details</button>
              </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;

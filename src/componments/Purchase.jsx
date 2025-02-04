import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Purchase.css";
import arrow from '../assests/icons8-left-arrow-48.png';

const PurchasePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        location: "",
        phone: "",
    });

    useEffect(() => {
        fetch("/Products.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedProduct = data.products.find((item) => item.id === parseInt(id));
                setProduct(selectedProduct);
            })
            .catch((error) => console.error("Error fetching product data:", error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Details:", { product, ...formData, quantity });
        alert("Your order has been placed!");
    };

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="purchase">
            <button onClick={() => navigate(`/product/${product.id}`)} className="back">
                <img src={arrow} alt="Back" />
            </button>
            {/* Product Details */}
            <div className="product">
                <img src={product.image[0]} alt={product.name} width="200" />
                <h2>{product.name}</h2>
                <p>Price: {product.price} DA</p>
            </div>

            {/* Purchase Form */}
            <form onSubmit={handleSubmit} className="form">
                <h1>Purchase Form</h1>
                <div className="info">
                    <label htmlFor="">First Name:</label> <br />
                    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required /> <br />
                </div>
                
                <div className="info">
                    <label htmlFor="">Last Name:</label> <br />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required /> <br />
                </div>
                
                <div className="info">
                   <label htmlFor="">Phone number:</label> <br />
                   <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required /> <br />
                </div>
                
                <div className="info">
                   <label htmlFor="">Address:</label> <br />
                   <input type="text" name="address" placeholder="Address" onChange={handleChange} required /> <br />
                </div>
                
                <div className="info">
                    <label htmlFor="">Maps location link:</label> <br />
                    <input type="text" name="location" placeholder="Maps Location (Optional)" onChange={handleChange} /> <br />
                </div>
                <div className="info">
                    <label htmlFor="">How many:</label> <br />
                    <input type="number" name="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required /> <br />
                </div>
                <button type="submit">Confirm Purchase</button>
            </form>
        </div>
    );
};

export default PurchasePage;

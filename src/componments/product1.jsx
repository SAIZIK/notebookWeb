import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/product1.css';
import arrow from '../assests/icons8-left-arrow-48.png';

const ProductPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        fetch("/Products.json")
            .then((response) => response.json())
            .then((data) => {
                // Access the 'products' array from the fetched data
                const selectedProduct = data.products.find((item) => item.id === parseInt(id));
                setProduct(selectedProduct);
                if (selectedProduct) {
                    setMainImage(selectedProduct.image[0]); // Default to the first image
                }
            })
            .catch((error) => console.error("Error fetching product data:", error));
    }, [id]);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product1">
            <button onClick={() => navigate(`/shop`)} className="back">
                <img src={arrow} alt="Back" />
            </button>
            <div className="box">
                <div className="boxLeft">
                    <div className="boxLTop">
                        {/* Main Image */}
                        <img src={mainImage} alt="Main" />
                    </div>
                        {/* Thumbnails */}
                    <div className="boxLBottom">
                        {product.image.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                // width="100"
                                onClick={() => setMainImage(img)} // Update main image when clicked
                                style={{
                                    cursor: "pointer",
                                    margin: "5px",
                                    border: mainImage === img ? "2px solid blue" : "none",
                                }}
                            />
                        ))}
                    </div>
                    <div className="boxRight">
                        <h1>{product.name}</h1>
                        <p>{product.price} DA</p>
                        <p>{product.description}</p>
                        <button onClick={() => navigate(`/purchase/${product.id}`)}>Buy</button>
                    </div>
                </div>
            </div>
            

            
            
        </div>
    );
};

export default ProductPage;

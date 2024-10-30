import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImages, setSelectedImages] = useState({});

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const totalPrice = product.price * quantity;

    const confirmPurchase = async () => {



        const data = {
            productId: product._id, quantity, amount: totalPrice, userId: localStorage.getItem("userId")
        };

        try {
            const response = await axios.post(
                "http://localhost:3001/payment/create-order",
                data
            );
            console.log(response.data);
            window.location.href = response.data.url;
        } catch (error) {
            console.log("error in payment", error);

        }
    };



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-11/12 sm:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <div className="flex space-x-4">
                    {/* Main Image */}
                    <img
                        src={selectedImages[product._id] || product.images[0]?.url}
                        alt={product.name}
                        className="w-3/4 h-64 object-cover rounded-md"
                    />
                    {/* Thumbnails Column */}
                    <div className="flex flex-col space-y-2">
                        {product.images.slice(0, 4).map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-16 h-16 object-cover rounded-md border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => setSelectedImages((prevState) => ({
                                    ...prevState,
                                    [product._id]: image.url,
                                }))}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-gray-900 font-semibold mb-2">Price per unit: ₹{product.price}</p>

                <div className="flex items-center mb-4">
                    <label htmlFor="quantity" className="mr-4">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border border-gray-300 rounded-md p-2 w-20"
                    />
                </div>

                <p className="text-xl font-bold mb-4">Total Price: ₹{totalPrice}</p>

                <button
                    onClick={confirmPurchase}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold w-full"
                >
                    Confirm Purchase
                </button>
            </div>
        </div>
    );
};

export default ProductModal;

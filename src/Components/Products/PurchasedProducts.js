import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Contexts/Contexts';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const PurchasedProducts = () => {
    const [purchasedProducts, setPurchasedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext); // Get user from AuthContext
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {

        if (!token) {
            toast.error('You need to be logged in first.', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
               
                draggable: true,
                progress: undefined,
pauseOnHover: false,
            });

            setTimeout(() => {
                navigate('/login'); // Redirect to login after 3 seconds
            }, 3000);
            return; // Exit if no token
        }


        const fetchPurchasedProducts = async () => {

            const url = user && user.userName === 'admin'
                ? 'http://localhost:3001/sellRecyclingProducts/getAllPurchasedProducts' // Admin API
                : 'http://localhost:3001/sellRecyclingProducts/getPurchasedProducts'; // User API

            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPurchasedProducts(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load purchased products');
                setLoading(false);
            }
        };

        fetchPurchasedProducts();
    }, [user, token, navigate]); // Add user to dependencies

    const handleStatusChange = async (orderId, newStatus) => {
        const token = localStorage.getItem('token');

        try {
            await axios.put(
                `http://localhost:3001/sellRecyclingProducts/updateOrderStatus/${orderId}`,
                { status: newStatus },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setPurchasedProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === orderId
                        ? { ...product, status: newStatus }
                        : product
                )
            );
        } catch (error) {
            setError('Failed to update order status');
            console.error(error);
        }
    };


    return (
        <>
            <Header />
            <ToastContainer /> 
            <div className="p-6 bg-gray-100 min-h-screen">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Purchased Products</h2>
                {purchasedProducts.length === 0 ? (
                    <p className="text-center text-gray-600">No products purchased yet.</p>
                ) : (
                    <div className="flex flex-col space-y-6">
                        {purchasedProducts.map(({ _id, productId, quantity, totalPrice, purchasedAt, status }, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-300 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 flex"
                            >
                                <img
                                    src={productId.images[0]?.url}
                                    alt={productId.name}
                                    className="w-2/12 h-40 object-cover rounded-md shadow-md"
                                />
                                <div className="flex flex-col justify-between w-10/12 pl-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{productId.name}</h3>
                                        <p className="text-gray-600 mb-1">Quantity: {quantity}</p>
                                        <p className="text-gray-600 mb-1">Total Price: <span className="font-bold text-green-600">₹{totalPrice}</span></p>
                                        <p className="text-gray-500 text-sm mb-3">Purchased on: {new Date(purchasedAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className={`mt-2 p-2 rounded-md text-center text-white ${status === 'Order Delivered' ? 'bg-green-500' : status === 'Order Shipped' ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                                        {status}
                                    </div>
                                    {user && user.userName === 'admin' && (
                                        <select
                                            value={status}
                                            onChange={(e) => handleStatusChange(_id, e.target.value)}
                                            className="mt-2 border border-gray-300 rounded-md p-1"
                                        >
                                            <option value="Order Confirmed">Order Confirmed</option>
                                            <option value="Order Shipped">Order Shipped</option>
                                            <option value="Order Delivered">Order Delivered</option>
                                        </select>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default PurchasedProducts;

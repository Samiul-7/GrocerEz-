import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';
import { StoreContext } from '../../context/StoreContext';

const OrderConfirmation = () => {
  const { resetCart } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    resetCart(); // Reset the cart when the confirmation page is loaded
  }, [resetCart]);

  const handleReturnHome = () => {
    navigate('/home'); // Navigate back to the home page
  };

  return (
    <div className="order-confirmation">
      <h1>Order has been placed!</h1>
      <button onClick={handleReturnHome}>Return to Home</button>
    </div>
  );
};

export default OrderConfirmation;

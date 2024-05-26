import React from "react";
import "../CSS_Files/Cart.css";
import { Link } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ value, setValue }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderItems = () => {
    return value.map((item) => (
      <div className="cartproduct" key={item.id}>
        <img src={item.imageUrl} alt={item.text} style={{ width: "10%" }} />
        <div className="cartitemname">
          <h2>{item.text}</h2>
        </div>
        <div className="cartitemprice">
          <span>{item.Price}</span>
        </div>
        <div className="deletebin"
          onClick={() => {
            setValue(value.filter((i) => i.id !== item.id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </div>
      </div>
    ));
  };

  const calculateSubTotal = () => {
    return value.reduce((total, item) => total + parseFloat(item.Price), 0);
  };

  const deliveryCharges = () => {
    return calculateSubTotal() === 0 ? 0 : 40;
  };

  const calculateTotal = () => {
    return calculateSubTotal() + deliveryCharges();
  };

  const handleCheckout = async () => {
    try {
      const totalAmount = calculateTotal();
      const response = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartProducts: value, totalAmount }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to initiate checkout. Server responded with status: " +
            response.status
        );
      }

      const responseData = await response.json();
      const { id: sessionId } = responseData;

      const stripe = await loadStripe(
        "pk_test_51PKjrESIkUweu5Q3vUTjXAv7RamOB0lbJXVxY7BgyMRH3JLOPfM6YXv3bH6HDJAquBTRjGz3cBAAjk9y4xUVds3i00qkFHu7Km"
      );

      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        throw new Error(error.message);
      } else {
        // Redirect the user after successful checkout
        window.location.href = "/success"; // Replace "/success" with your desired success page URL
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Error during payment: " + error.message);
    }
  };

  return (
    <div className="cart">
      <h1>Cart</h1>

      <div className="cartdetails">
        <div className="shoppinglist">{renderItems()}</div>

        {value.length > 0 && (
          <div className="cartbill">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal:</td>
                  <td>Rs. {calculateSubTotal()} /-</td>
                </tr>
                <tr>
                  <td>Delivery Charges:</td>
                  <td>Rs. {deliveryCharges()} /-</td>
                </tr>
                <tr>
                  <td>
                    <h2>Total:</h2>
                  </td>
                  <td>
                    <h2>
                      <small>Rs. {calculateTotal()} /-</small>
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>

            <button onClick={handleCheckout}>Proceed To Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

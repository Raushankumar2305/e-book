import React from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const amount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    try {
      if (amount <= 0) {
        alert("Cart is empty");
        return;
      }

      const res = await fetch("http://localhost:8000/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_RASjiNTDWBrSfO",
        amount: order.amount,
        currency: "INR",
        name: "E-Book Store",
        description: "Book Purchase",
        order_id: order.id,

        handler: async function (response) {
          await fetch("http://localhost:8000/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              user_id: 1,
              amount,
            }),
          });

          clearCart();
          navigate("/success");
        },

        theme: { color: "#16a34a" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed ");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">

        
        <h2 className="text-3xl font-bold text-center mb-8">
          Checkout
        </h2>

       
        <div className="space-y-4 max-h-72 overflow-y-auto mb-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">

              
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-20 object-cover rounded-lg shadow-sm"
                  />
                ) : (
                  <div className="w-14 h-20 bg-gray-200 rounded-lg" />
                )}

             
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">Book</p>
                </div>
              </div>

              
              <p className="font-semibold text-orange-600">
                ₹{item.price}
              </p>
            </div>
          ))}

        </div>


        <div className="border-t pt-5 mb-8 flex justify-between items-center">
          <span className="text-lg font-semibold">Total Amount</span>
          <span className="text-3xl font-bold text-green-600">
            ₹{amount}
          </span>
        </div>

        
        <button
          onClick={handlePayment}
          className="w-full bg-green-600 hover:bg-green-800 text-white py-4 rounded-2xl text-lg font-semibold transition shadow-md hover:shadow-lg"
        >
          Pay Securely with Razorpay →
        </button>

        {/* footer part */}
        <p className="text-center text-xs text-gray-400 mt-5">
           100% Secure Payment • Powered by Razorpay
        </p>

        <button
          onClick={() => navigate("/cart")}
          className="block mx-auto mt-4 text-sm text-black  hover:text-[#ed5236] "
        >
          ← Back to Cart
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

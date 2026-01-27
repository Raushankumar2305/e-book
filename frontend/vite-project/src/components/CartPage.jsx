import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">

        {/* header part  */}
        <h2 className="text-3xl font-bold text-center mb-8">
           Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-6">Your cart is empty</p>

            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              Browse Books
            </button>
          </div>
        ) : (
          <>
            
            <div className="space-y-4 max-h-80 overflow-y-auto mb-6">

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
                      <p className="text-sm text-orange-600 font-semibold">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

              
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>

            
            <div className="border-t pt-6 space-y-3">

              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span className="text-green-600">₹{total}</span>
              </div>

              
              <button
                onClick={() =>
                  navigate("/payment", {
                    state: {
                      amount: total,
                      items: cartItems,
                    },
                  })
                }
                className="w-full mt-6 bg-green-600 hover:bg-green-800 text-white py-4 rounded-2xl text-lg font-semibold transition shadow-md"
              >
                Proceed to Payment →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;

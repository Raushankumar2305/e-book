import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage"; 
import BooksPage from "./components/Bookspage";
import BookDetails from "./components/BookDetails";
import CartPage from "./components/CartPage";
import PaymentPage from "./components/PaymentPage";
import Register from "./components/Register";
import Login from "./components/Login";
import VerifyOtp from "./components/Otp_Verify";
import Homepage2 from "./components/Homepage2 copy";
import Homepage3 from "./components/Homepage3";
import { CartProvider } from "./components/CartContext";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Blog from "./components/Blog";
import MyPurchases from "./components/MyPurchases";



function App() {
  return (
     <CartProvider>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/homepage2" element={<Homepage2 />} />
      <Route path="/homepage3" element={<Homepage3 />} />

      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/otp-verify" element={<VerifyOtp />} />

      <Route path="/bookspage" element={<BooksPage />} />
      <Route path="/aboutus" element={<Aboutus />} />

        <Route path="/contactus" element={<Contactus />} />
         <Route path="/blog" element={<Blog/>} />

     

      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
       <Route path="/my-books" element={<MyPurchases />} />
    </Routes>

    </CartProvider>





  );
}

export default App;

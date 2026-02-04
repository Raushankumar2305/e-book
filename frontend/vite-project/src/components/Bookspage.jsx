import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa6";
import Bookcard from "./Bookcard";

import img2 from "../assets/images/img2.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [showSidebar, setShowSidebar] = useState(true);
    const [loading, setLoading] = useState(true);

   
    const [purchased, setPurchased] = useState([]);

    useEffect(() => {
        fetchBooks();
        fetchMyPurchases(); 
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await axios.get("http://localhost:8000/books");
            setBooks(res.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMyPurchases = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                "http://localhost:8000/purchase/my-books",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const ids = res.data.map((b) => b.id);
            setPurchased(ids);
        } catch (err) {
            console.error(err);
        }
    };

    
    const buyBook = async (bookId) => {
        try {
            const token = localStorage.getItem("token");

            await axios.post(
                `http://localhost:8000/purchase/${bookId}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            alert("Purchased successfully ✅");
            fetchMyPurchases();
        } catch {
            alert("Purchase failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <div className="bg-[#393280] text-white">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
                    <span>+91 8374902234</span>

                    <div className="flex gap-4 text-lg">
                        <BiLogoFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>

            {/* header */}
            <div>
                <div className="bg-gradient-to-r from-[#FFE5E5] to-[#F5FFFE] shadow p-4 flex justify-center items-center">
                    <h2 className="text-lg font-semibold text-gray-700">
                        <Link to="/homepage" className="hover:underline">
                            Homepage
                        </Link>{" "}
                        / PRODUCTS
                    </h2>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="px-4 py-2 bg-orange-500 hover:bg-[#ED553B] text-white rounded text-sm"
                    >
                        {showSidebar ? "Hide Filters" : "Show Filters"}
                    </button>
                </div>
            </div>

            {/* main content */}
            <div className="flex flex-1 gap-6 p-6">

                {showSidebar && (
                    <aside className="w-64 bg-white shadow rounded p-4">
                        <h4 className="text-[#393280] font-medium mb-3">Filters</h4>
                        <p className="text-sm text-gray-500">
                            (Filter options can be added here)
                        </p>
                    </aside>
                )}

                <main className="flex-1">
                    {loading ? (
                        <p className="text-center text-gray-500">Loading books...</p>
                    ) : books.length === 0 ? (
                        <p className="text-center text-gray-500">No books found</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* ⭐ FIXED: button moved INSIDE map */}
                            {books.map((book) => (
                                <div key={book.id}>

                                    <Bookcard
                                        id={book.id}
                                        title={book.title}
                                        price={book.price}
                                        image={
                                            book.image
                                                ? `http://localhost:8000/public/${book.image}`
                                                : "/placeholder.png"
                                        }
                                    />

                                    <div className="text-center mt-2">
                                        {purchased.includes(book.id) ? (
                                            <span className="bg-green-600 text-white px-3 py-1 rounded text-xs">
                                                Purchased ✅
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => buyBook(book.id)}
                                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 text-xs"
                                            >
                                                Buy Now
                                            </button>
                                        )}
                                    </div>

                                </div>
                            ))}

                        </div>
                    )}
                </main>
            </div>

            {/* footer (UNCHANGED) */}
            <footer className="bg-[#ED553B] text-white mt-20">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <img src={img2} className="w-12 h-12" />
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default BooksPage;

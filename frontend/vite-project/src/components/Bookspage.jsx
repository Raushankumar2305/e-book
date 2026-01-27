import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// 
// import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


import Bookcard from "./Bookcard";

import img2 from "../assets/images/img2.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [showSidebar, setShowSidebar] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
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

    return (


        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="bg-[#393280] text-white">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
                    <span>+91 8374902234</span>

                    <div className="flex gap-4 text-lg">
                        <BiLogoFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        {/* <FaLinkedinIn /> */}
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




                <div className="flex justify-end  ">
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
                {/* siderbar use here*/}
                {showSidebar && (
                    <aside className="w-64 bg-white shadow rounded p-4">
                        <h4 className="text-[#393280] font-medium mb-3">Filters</h4>
                        <p className="text-sm text-gray-500">
                            (Filter options can be added here)
                        </p>
                    </aside>
                )}

                {/* books desgin */}
                <main className="flex-1">
                    {loading ? (
                        <p className="text-center text-gray-500">Loading books...</p>
                    ) : books.length === 0 ? (
                        <p className="text-center text-gray-500">No books found</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {books.map((book) => (
                                <Bookcard
                                    key={book.id}
                                    id={book.id}
                                    title={book.title}
                                    price={book.price}
                                    image={
                                        book.image
                                            ? `http://localhost:8000/public/${book.image}`
                                            : "/placeholder.png"
                                    }
                                />
                            ))}
                        </div>
                    )}
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-[#ED553B] text-white mt-20">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Left Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={img2} alt="Logo" className="w-12 h-12" />

                        </div>

                        <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet.
                        </p>

                        <div className="flex gap-4 text-xl">
                            <BiLogoFacebook className="cursor-pointer hover:scale-110 transition" />
                            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
                            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
                            <IoLogoYoutube className="cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>

                    {/* page links*/}
                    <div>
                        <h3 className="font-semibold mb-6 uppercase tracking-wide">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-white/90">

                            <div className="text-white cursor-pointer">

                                {/* <li className="text-[#ED553B] cursor-pointer">HOME</li> */}
                                <Link to="/homepage">Home</Link>
                            </div>
                            {/* <li className="hover:underline cursor-pointer">Home</li> */}

                            <li className="hover:underline cursor-pointer">About Us</li>

                            <li className="hover:underline cursor-pointer">New Release</li>
                            <li className="hover:underline cursor-pointer">Contact Us</li>
                            <li className="hover:underline cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    {/* links */}
                    <div>
                        <h3 className="font-semibold mb-6 uppercase tracking-wide">
                            Important Links
                        </h3>
                        <ul className="space-y-3 text-sm text-white/90">
                            <li className="hover:underline cursor-pointer">Privacy Policy</li>
                            <li className="hover:underline cursor-pointer">FAQs</li>
                            <li className="hover:underline cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 py-6">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
                        <p>© CopyRight 2022 . All Rights Reserved.</p>
                        <div className="flex gap-4">
                            <span className="hover:underline cursor-pointer">Privacy</span>
                            <span>|</span>
                            <span className="hover:underline cursor-pointer">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    );
};

export default BooksPage;

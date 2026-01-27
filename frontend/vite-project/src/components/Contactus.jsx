
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contactus = () => {
    return (

        <div className="w-full">
            {/* <nav className="hidden lg:block bg-white border-t">
                <ul className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-xs tracking-widest font-semibold">

                    <div className="text-[#ED553B] cursor-pointer">


                        <Link to="/homepage2">HOME</Link>
                    </div>



                    <div className="hover:text-[#ED553B] text-black cursor-pointer">


                        <Link to="/Aboutus">ABOUTUS</Link>
                    </div>



                    <div className="hover:text-[#ED553B]">
                        <Link to="/Bookspage">BOOKS</Link>
                    </div>


                    <div className="hover:text-[#ED553B]">
                        <Link to="/Bookspage">NEW RELEASE</Link>
                    </div>

                    <div className="hover:text-[#ED553B] text-black">
                        <Link to="/Contactus">CONTACT US    </Link>
                    </div>


                    <div className="hover:text-[#ED553B] text-black">
                        <Link to="/blog">BLOG    </Link>
                    </div>
                </ul>
            </nav> */}

            <nav className="hidden lg:block bg-[#393280] border-t">
                <ul className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-xs tracking-widest font-semibold">


                    <div className="text-white hover:text-[#ED553B]  cursor-pointer">


                        <Link to="/homepage3">HOME   |</Link>
                    </div>

                    <div className="hover:text-[#ED553B] text-white cursor-pointer">

                        {/* <li className="text-[#ED553B] cursor-pointer">HOME</li> */}
                        <Link to="/Aboutus">ABOUTUS   |</Link>
                    </div>

                    <div className="text-amber-50 hover:text-[#ED553B]">
                        <Link to="/Bookspage">BOOKS   |</Link>
                    </div>


                    <div className="hover:text-[#ED553B] text-white">
                        <Link to="/Bookspage">NEW RELEASE   |</Link>
                    </div>



                    <div className="hover:text-[#ED553B] text-white">
                        <Link to="/blog">BLOG   | </Link>
                    </div>

                </ul>
            </nav>

            {/* herosection */}
            <div className="bg-gradient-to-r from-[#ffe5e5] via-[#f5fffe] to-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#393280]">
                    Contact Us
                </h1>
                <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                    Have questions about books, orders, or recommendations?
                    We'd love to hear from you
                </p>
            </div>


            {/* info card use */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
                    <FaPhoneAlt className="mx-auto text-3xl text-[#ED553B] mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-gray-500">+91 98765 43210</p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
                    <FaEnvelope className="mx-auto text-3xl text-[#ED553B] mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-500">support@bookstore.com</p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
                    <FaMapMarkerAlt className="mx-auto text-3xl text-[#ED553B] mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-gray-500">ahmedabad, Gujarat, India</p>
                </div>

            </div>


            {/* Contact -us form */}
            <div className="bg-[#F9FAFB] py-20 hover:shadow-xl">
                <div className="max-w-4xl mx-auto px-6 ">

                    <div className="bg-white rounded-2xl shadow-xl p-10 ">
                        <h2 className="text-3xl font-bold text-[#393280] mb-8 text-center">
                            Send us a Message
                        </h2>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED553B]"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED553B]"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="border p-3 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#ED553B]"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="border p-3 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#ED553B]"
                            ></textarea>

                            <button
                                type="submit"
                                className="md:col-span-2 bg-[#ED553B] text-white py-3 rounded-lg font-semibold hover:bg-[#d9442b] transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>


            {/*use map for location*/}
            <div className="w-full h-72">
                <iframe
                    title="map"
                    className="w-full h-full"
                    src="https://maps.google.com/maps?q=ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </div>

        </div>

    );
};
export default Contactus;


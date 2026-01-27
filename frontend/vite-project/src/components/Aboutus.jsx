import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { SlFire } from "react-icons/sl";
import { GrSecure } from "react-icons/gr";

const Aboutus = () => {
    return (
        <div className="min-h-screen bg-gray-50">


            <nav className="hidden lg:block bg-[#393280] border-t">
                <ul className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-xs tracking-widest font-semibold">


                    <div className="text-white hover:text-[#ED553B]  cursor-pointer">


                        <Link to="/homepage3">HOME   |</Link>
                    </div>

                 

                    <div className="text-amber-50 hover:text-[#ED553B]">
                        <Link to="/Bookspage">BOOKS   |</Link>
                    </div>


                    <div className="hover:text-[#ED553B] text-white">
                        <Link to="/Bookspage">NEW RELEASE   |</Link>
                    </div>


                    <div className="hover:text-[#ED553B] text-white">
                        <Link to="/Contactus">CONTACT US   | </Link>
                    </div>


                    <div className="hover:text-[#ED553B] text-white">
                        <Link to="/blog">BLOG   | </Link>
                    </div>

                </ul>
            </nav>




            {/* Header */}
            <div className="bg-gradient-to-r from-[#FFE5E5] to-[#F5FFFE] py-12 text-center">
                <h1 className="text-4xl font-bold text-[#393280]">About Us</h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Discover stories, knowledge, and imagination — all in one place.
                </p>
            </div>

            {/* content */}
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Who we are
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Welcome to <span className="font-semibold text-[#ED553B]">E-Books</span>,
                        your one-stop destination for books that inspire, educate, and entertain.
                        We believe books have the power to change lives, spark creativity, and
                        open doors to new perspectives.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our platform brings together a wide collection of books across genres —
                        from fiction and education to comics and travel — all designed to give
                        readers a smooth and enjoyable reading experience.
                    </p>
                </div>

                {/* Right */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our mission is simple: make books accessible, affordable, and enjoyable
                        for everyone. We combine modern technology with a love for reading to
                        create a seamless online bookstore experience.
                    </p>

                    <ul className="space-y-3 text-gray-600">
                        <div className="">
                            Wide range of books  <IoBookSharp />
                        </div>
                        <li> Easy add-to-cart & checkout</li><FaCartShopping />
                        <li> Fast & responsive design</li><SlFire />
                        <li> Secure user experience</li><GrSecure />
                    </ul>
                </div>
            </div>


            <div className="bg-white py-12 text-center shadow-inner ">

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Star You Reading Journey
                </h3>
                <p className="text-gray-600 mb-6">
                    Explore our collection and find your next favorite book today.
                </p>
                <Link
                    to="/bookspage"
                    className="inline-block bg-orange-500 hover:bg-[#ED553B] text-white px-8 py-3 rounded-lg transition "
                >
                    Get Books
                </Link>

            </div>


        </div>
    );
};

export default Aboutus;

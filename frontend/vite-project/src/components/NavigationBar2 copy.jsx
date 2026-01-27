import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import { BiLogIn } from "react-icons/bi";


// new add
import { Link } from "react-router-dom";




const NavigationBar2 = () => {
  return (
    <header className="w-full relative z-40">

      {/* top bar */}
      <div className=" text-white">
        <div className="text-[#173F5F] max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <span>+91 8374902234</span>

          <div className="flex gap-4 text-lg">
            <BiLogoFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/*middle */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-16 relative">
          {/* logo used here */}
          <div className="w-12 h-12 rounded-full bg-gray-300" />

          {/* Search  */}
          <div className="hidden lg:block flex-1 max-w-xl ml-56 ">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search Books"
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>


          <div className="hidden lg:flex gap-6 text-sm text-gray-600  hover:shadow-xl">
            <div className="flex items-center gap-1 cursor-pointer">
              <FiUser /> <Link to="/auth/register">Account</Link>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <BiLogIn /> <Link to="/auth/login">login</Link>
            </div>



            <div className="flex items-center gap-1 cursor-pointer">
              <FiShoppingCart /> Cart(0)
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FiHeart /> Wishlist
            </div>
          </div>

          {/* hamburger apply  here */}
          <HamburgerMenu />
        </div>
      </div>

      {/* DESKTOP menu  */}
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
            <Link to="/Contactus">CONTACT US   | </Link>
          </div>


           <div className="hover:text-[#ED553B] text-white">
            <Link to="/blog">BLOG   | </Link>
          </div>
          
        </ul>
      </nav>

    </header>
  );
};

export default NavigationBar2;

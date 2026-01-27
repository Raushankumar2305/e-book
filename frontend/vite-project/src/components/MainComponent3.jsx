import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/img1.png";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaArrowRight } from "react-icons/fa";

import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img10 from "../assets/images/img10.png";

import img15 from "../assets/images/img15.png";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import img18 from "../assets/images/img18.png";
import img20 from "../assets/images/img20.png";
import img21 from "../assets/images/img21.png";
import img22 from "../assets/images/img22.png";
import img24 from "../assets/images/img24.png";
import img11 from "../assets/images/img11.png";

import img41 from "../assets/images/img41.png";
import img42 from "../assets/images/img42.png";
import img43 from "../assets/images/img43.png";
import img44 from "../assets/images/img44.png";
import img26 from "../assets/images/img26.png";
import img2 from "../assets/images/img2.png";

import { Link } from "react-router-dom";
import { IoMdArrowDroprightCircle } from "react-icons/io";

import Herosectioncard from "./Herosectioncard";
import Herosectioncard2copy from "./Herosectioncard2copy";

import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const MainComponent3 = () => {
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate("/bookspage");
  };

  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#ffe5e5]/90 via-[#f5fffe]/95 to-white">

        {/* section 1 */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center text-center lg:text-left">
            <div>
              <div className="text-[#393280] text-3xl sm:text-5xl">
                <p>Ipsum Dolor Si</p>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac.
              </p>

              <button className="border border-[#393280] text-[#393280] shadow-md hover:shadow-xl px-10 py-3 rounded-md font-medium hover:bg-[#393280] hover:text-white transition">
                READ MORE →
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img src={img44} alt="Books Collection" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="py-20 bg-[#FCECEC]">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest text-gray-400">
              SOME QUALITY ITEMS
            </p>
            <h2 className="text-3xl font-bold text-[#393280] mt-2">
              New Release Books
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Herosectioncard image={img15} title="Super-Man" author="Armor Ramsey" price="40.00" />
            <Herosectioncard image={img16} title="Great Travel At Desert" author="Sanchit Howdy" price="38.00" />
            <Herosectioncard image={img17} title="Spider-Man" author="Arthur Doyle" price="45.00" />
            <Herosectioncard image={img18} title="DC Marvel" author="Klien Marry" price="35.00" />
          </div>

          {/* api for view all books*/}
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={handleViewAllProducts}
              className="text-[#ED553B] hover:text-orange-600 flex items-center gap-2"
            >
              View all products
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Footer  */}
        <footer className="bg-[#ED553B] text-white mt-10">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={img2} alt="logo" className="w-32 mb-4" />
              <div className="flex gap-4">
                <BiLogoFacebook />
                <FaInstagram />
                <FaTwitter />
                <IoLogoYoutube />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-orange-100">
                <li>Home</li>
                <li>About Us</li>
                <li>Books</li>
                <li>New Release</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Important Links</h3>
              <ul className="space-y-2 text-sm text-orange-100">
                <li>Privacy Policy</li>
                <li>FAQs</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </footer>

      </section>
    </>
  );
};

export default MainComponent3;

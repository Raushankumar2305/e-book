import React from "react";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer2 = () => {
  return (
    <footer className="bg-[#ED553B]  text-white mt-auto">
  
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <img src={img2} alt="logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-700 mb-6">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

         
          <div className="flex gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ED553B] hover:bg-orange-600 text-white cursor-pointer"><BiLogoFacebook /> </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ED553B] hover:bg-orange-600 text-white cursor-pointer"><FaInstagram /></span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ED553B]  hover:bg-orange-600 text-white cursor-pointer">   <FaTwitter />   </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ED553B] hover:bg-orange-600  text-white cursor-pointer">   <IoLogoYoutube />    </span>
          </div>
        </div>

        
        <div>
          <h3 className="font-bold mb-4 text-[#ED553B] uppercase">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#ED553B] cursor-pointer">Home</li>
            <li className="hover:text-[#ED553B] cursor-pointer">About Us</li>
            <li className="hover:text-[#ED553B] cursor-pointer">Books</li>
            <li className="hover:text-[#ED553B] cursor-pointer">Ebooks</li>
            <li className="hover:text-[#ED553B] cursor-pointer">New Release</li>
            <li className="hover:text-[#ED553B] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#ED553B] cursor-pointer">Blog</li>
          </ul>
        </div>

        
        <div className="lg:col-span-2">
          <h3 className="font-bold mb-4 text-[#ED553B] uppercase">Latest News</h3>

          <div className="space-y-4">
            
            <div className="flex gap-4">
              <img src={img3} alt="news" className="w-20 h-20 rounded object-cover" />
              <div>
                <h4 className="font-semibold text-sm hover:text-[#ED553B] cursor-pointer">
                  Nostrud exercitation
                </h4>
                <p className="text-xs text-gray-600">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className="text-xs text-[#ED553B]">15 April 2022</span>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={img4} alt="news" className="w-20 h-20 rounded object-cover" />
              <div>
                <h4 className="font-semibold text-sm hover:text-[#ED553B] cursor-pointer">
                  Nostrud exercitation
                </h4>
                <p className="text-xs text-gray-600">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className="text-xs text-[#ED553B]">15 April 2022</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2022 Arihant. All Rights Reserved.</p>

          <div className="text-sm">
            <span className="text-[#ED553B] cursor-pointer">Privacy</span>
            <span className="mx-2">|</span>
            <span className="hover:text-[#ED553B] cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

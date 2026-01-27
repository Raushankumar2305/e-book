// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import axios from "axios";
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

// new imports
import img26 from "../assets/images/img26.png";
import img34 from "../assets/images/img34.png";
import img35 from "../assets/images/img35.png";
import img36 from "../assets/images/img36.png";
import img37 from "../assets/images/img37.png";
import img38 from "../assets/images/img38.png";
import img39 from "../assets/images/img39.png";
import img40 from "../assets/images/img40.png";
import img41 from "../assets/images/img41.png";
import img42 from "../assets/images/img42.png";
import img43 from "../assets/images/img43.png";

import Herosectioncard2copy from "./Herosectioncard2copy";
import React, { useEffect, useRef, useState } from "react";

// const MainComponent2 = () => {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/books");
//       setBooks(res.data);
//     } catch (error) {
//       console.error("Error fetching books", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log(books)


// 



 const MainComponent2 = () => {

const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const sliderRef = useRef(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books", error);
    } finally {
      setLoading(false);
    }
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  if (loading) return <p className="text-center">Loading...</p>;


  return (
    
    <>
      <section className="w-full  bg-gradient-to-r from-[#ffe5e5]/90 via-[#f5fffe]/95 to-white">

        {/* HERO */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[#393280] text-6xl">Ipsum Dolor Si</h2>
              <p className="text-gray-600 mt-4 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <button className="border border-[#393280] px-10 py-3 mt-6 rounded-md hover:bg-[#393280] hover:text-white">
                READ MORE →
              </button>
            </div>

            <div className="flex justify-end">
              <img src={img1} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* third SECTION */}
        <div className="w-full bg-gradient-to-r from-[#FCECEC] to-[#F6FFFE] py-16 p-">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-20 items-center text-center md:text-left">

            <div>
              <p className="text-orange-500 text-sm font-semibold mb-3">— Comics</p>
              <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
                Access, Read, Practice & Engage with Digital Content
              </h1>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="flex max-w-md mx-auto md:mx-0 bg-white rounded-lg  shadow-md hover:shadow-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-4 py-3 text-sm outline-none"
                />
                <button className="bg-orange-500 text-white px-6 font-medium hover:bg-orange-600 transition">
                  Login
                </button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img src={img38} className="rounded-xl  w-full h-full md:w-96" />
            </div>
          </div>
        </div>


        {/* NEW RELEASE BOOKS */}
        <div className="py-20 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#393280]">
              New Release Books
            </h2>
            <p className="text-gray-400 mt-2">
              1000+ books are published by different authors everyday.
            </p>
          </div>

          {/* all books*/}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => navigate("/bookspage")}
              className="text-[#ED553B] hover:text-orange-600 flex items-center gap-2"
            >
              View all products
              <FaArrowRight />
            </button>
          </div>

         {/* <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto no-scrollbar pb-4">
  {books.map((book) => (
    <div key={book._id || book.id} className="flex-none w-64"> 
      <Herosectioncard2copy
        image={book.image
              ? `http://localhost:8000/public/${book.image}`
              : "/placeholder.png"
          }
        title={book.title}
        author={book.author}
      />
    </div>
  ))}
</div> */}

<div className="relative max-w-7xl mx-auto px-6">
      
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-gray-100 shadow-lg p-3 rounded-full hover:bg-[#ED553B] hover:text-white"
      >
        <FaChevronLeft />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="no-scrollbar flex gap-8 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
      >
        {books.map((book) => (
          <div key={book._id || book.id} className="flex-none w-64">
            <Herosectioncard2copy
              image={
                book.image
                  ? `http://localhost:8000/public/${book.image}`
                  : "/placeholder.png"
              }
              title={book.title}
              author={book.author}
              price={book.price}
            />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                    bg-gray-100 shadow-lg p-3 rounded-full hover:bg-[#ED553B] hover:text-white"
      >
        <FaChevronRight />
      </button>
    </div>


        </div>

        {/* OTHER SECTIONS – UNCHANGED */}
        <div className="py-20 bg-[#F7FCFC]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Herosectioncard2copy image={img41} title="Reading Books Always Makes The Moments Happy" />
            <Herosectioncard2copy image={img42} title="Reading Books Always Makes The Moments Happy" />
            <Herosectioncard2copy image={img43} title="Reading Books Always Makes The Moments Happy" />
          </div>
        </div>

        {/* 5 section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  bg-white px-6 py-16 text-center   lg:text-left">
          <div className="flex justify-center lg:justify-end ">
            <img src={img10} className="max-w-xs sm:max-w-sm rounded-lg shadow-lg  hover:shadow-xl" />
          </div>

          <div>
            <p className="text-[#969595] text-3xl sm:text-4xl mb-2">Featured Book of the week</p>

            <p className="text-[#393280] text-3xl sm:text-4xl mt-4">
              Birds gonna be happy
            </p><br />
            <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0">
              Jump start your book reading by quickly check through the popular book
              categories. 1000+ books are published by different authors everyday. Buy your<br />
              favourite books on TreeBooks Today.
            </p><br />



            <button className="border  shadow-md hover:shadow-xl  border-[#393280] text-[#393280] px-10 py-3 rounded-md font-medium tracking-wide hover:bg-[#393280] hover:text-white transition">
              VIEW MORE →
            </button>
          </div>
        </div>


        {/* Section 6  */}
        <div className="w-full bg-[#CACECF] py-16 flex justify-center  shadow-ld hover:shadow-xl">
          <img
            src={img39}
            alt="Coming Soon"
            className="max-w-7xl w-full object-contain"
          />
        </div>


        {/* Section 7 r */}
        <div className="w-full bg-[#F9FEFE] py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#FAEFEF] ">

            {/* Left Image */}
            <div className="bg-[#FAEFEF]">
              <img
                src={img40}
                alt="Reading"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className=" ">
              <h2 className="text-4xl font-bold mb-4">
                Get over a 100 free books
              </h2>

              <p className="text-gray-500 mb-8 max-w-md">
                Get access by subscribing to our newsletter. Jump start your book reading
                by quickly check through the popular book categories.
              </p>

              <div className="flex items-center bg-white shadow-lg rounded-md overflow-hidden max-w-md  shadow-md hover:shadow-xl">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  className="flex-1 px-4 py-3 text-sm outline-none"
                />
                <button className="bg-[#ED553B] text-white px-6 py-3 text-sm font-semibold hover:bg-[#d94a32] transition">
                  Get free books
                </button>
              </div>
            </div>


          </div><br />
          <div className=" flex items-center justify-center text-[#173F5F] text-3xl" >
            <p> Still not sure? </p><br />
          </div>

          <div className=" flex items-center justify-center text-[#393280] text-1xl">

            <p> Jump start your book reading by quickly check through the popular book categories.<br />
              1000+ books are published by different authors everyday. Buy you favourite books on TreeBooks Today.</p>

          </div><br />
          <div className="flex items-center justify-center">
            <button className="border border-[#393280] text-[#393280]  shadow-md hover:shadow-xl px-10 py-3 rounded-md font-medium tracking-wide hover:bg-[#393280] hover:text-white transition">
              Read FAQ →
            </button>

          </div>









        </div>


        {/* Section 8  */}
        <div className="py-20 text-[#173F5F] bg-[#F7FCFC]">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest text-[#7A7A7A] uppercase">
              Read our articles
            </p>
            <h2 className="text-3xl font-bold text-[#173F5F] mt-2">
              Latest Articles
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Herosectioncard2copy
              image={img41}
              date="2 aug, 2021"
              title="Reading Books Always Makes The Moments Happy"
              description="Jump start your book reading by quickly check through the popular book categories..."
            />

            <Herosectioncard2copy
              image={img42}
              title="Reading Books Always Makes The Moments Happy"
              description="Jump start your book reading by quickly check through the popular book categories..."
            />

            <Herosectioncard2copy
              image={img43}
              title="Reading Books Always Makes The Moments Happy"
              description="Jump start your book reading by quickly check through the popular book categories..."
            />
          </div>

          <div className="text-center mt-14">
            <button className="border border-gray-300 px-6 py-3 text-sm font-semibold hover:bg-[#173F5F] hover:text-white transition text-[#173F5F]">
              READ ALL ARTICLES →
            </button>
          </div>
        </div>



        {/* new added */}




      </section>
    </>
  );
};

export default MainComponent2;







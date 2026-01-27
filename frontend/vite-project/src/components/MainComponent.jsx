import React from "react";
import img1 from "../assets/images/img1.png";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img10 from "../assets/images/img10.png";
import { FaArrowRight } from "react-icons/fa";
import img15 from "../assets/images/img15.png";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import img18 from "../assets/images/img18.png";
import img20 from "../assets/images/img20.png"
import img21 from "../assets/images/img21.png";
import img22 from "../assets/images/img22.png";
import img24 from "../assets/images/img24.png";
import img11 from "../assets/images/img11.png";

import { Link } from "react-router-dom";
import img26 from "../assets/images/img26.png";

import { IoMdArrowDroprightCircle } from "react-icons/io";




import { useNavigate } from 'react-router-dom';


import Herosectioncard from "./Herosectioncard";
import Herosection_grid from "./Herosection_grid";
const MainComponent = () => {



  const Hero = [
    { id: 1, title: "Simple Way Of Piece Life", price: 40, author: "raushan", image: img15 },
    { id: 2, title: "Great Travel At Desert", price: 38, author: "raushan", image: img16 },
    { id: 3, title: "The Lady Beauty Scarlett", price: 45, author: "raushan", image: img17 },
    { id: 4, title: "Hypocrite World", price: 42, author: "raushan", image: img18 },
    { id: 5, title: "Great Travel At Desert", price: 38, author: "raushan", image: img21 },
    { id: 6, title: "The Lady Beauty Scarlett", price: 45, author: "raushan", image: img15 },
  ];


  // const [books, setBooks] = useState([]);
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

  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate("/bookspage");
  };







  return (
    <>
      <section className="w-full bg-linear-to-t:[#FFE5E5] bg-linear-to-r:[#F5FFFE] bg-linear-to-b:[#FFFFFF] bg-linear-to-l:[#FFFF] ">

        {/* herosection added */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center text-center lg:text-left">

            <div>
              <div className="text-[#393280] text-3xl sm:text-4xl">
                <p>Ipsum Dolor Si</p>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac.
                Urna commodo, lacus ut magna velit eleifend.
                Amet, quis urna, a eu.
              </p>

              <button className="border border-[#393280] text-[#393280]  shadow-md hover:shadow-xl px-10 py-3 rounded-md font-medium tracking-wide hover:bg-[#393280] hover:text-white transition">
                READ MORE →
              </button> <br />

              <div className=" "><br />
                <button className="border  shadow-md hover:shadow-xl  border-[#393280] text-[#393280] px-10 py-3 rounded-md font-medium tracking-wide hover:bg-[#393280] hover:text-white transition">
                  <Link to="/homepage2">NEXT PAGE →</Link>
                </button>
              </div>





            </div>









            <div className="flex justify-center lg:justify-end">
              <img
                src={img1}
                alt="Books Collection"
                className="max-w-xs sm:max-w-md lg:max-w-full h-auto rounded-lg "
              />
            </div>
          </div>
        </div>

        {/* first add */}
        <div className="w-full bg-white px-6 py-20">

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-[#ED553B] uppercase tracking-wide font-medium">
                Categories
              </p>

              <h2 className="text-[#393280] text-3xl sm:text-4xl font-semibold">
                Explore our Top Categories
              </h2>

              <div className="flex justify-center lg:justify-start    gap-4 pt-2">
                <FaRegArrowAltCircleLeft className="text-3xl text-gray-300 cursor-pointer" />
                <FaRegArrowAltCircleRight className="text-3xl text-[#ED553B] cursor-pointer" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-[#7A7A9D] text-sm leading-relaxed text-center lg:text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac.
                Urna commodo, lacus ut magna velit eleifend.
                Amet, quis urna, a eu.
              </p>
            </div>
          </div>

          {/* CARDsection */}
          <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">


            <div className="text-center space-y-4">
              <img
                src={img5}
                className="rounded-xl mx-auto w-full max-w-sm object-cover"
              />
              <h3 className="text-[#393280] text-lg font-semibold">
                Higher Education
              </h3>
              <p className="text-sm text-[#7A7A9D] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac.
              </p>
            </div>


            <div className="text-center space-y-4">
              <img
                src={img6}
                className="rounded-xl mx-auto w-full max-w-sm object-cover"
              />
              <h3 className="text-[#393280] text-lg font-semibold">
                Management Books
              </h3>
              <p className="text-sm text-[#7A7A9D] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac.
              </p>
            </div>


            <div className="text-center space-y-4">
              <img
                src={img7}
                className="rounded-xl mx-auto w-full max-w-sm object-cover"
              />
              <h3 className="text-[#393280] text-lg font-semibold">
                Engineering Books
              </h3>
              <p className="text-sm text-[#7A7A9D] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu feugiat amet, libero ipsum enim pharetra hac.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-16">
            <button className="border  shadow-md hover:shadow-xl  border-[#393280] text-[#393280] px-10 py-3 rounded-md font-medium tracking-wide hover:bg-[#393280] hover:text-white transition">
              VIEW MORE →
            </button>
          </div>
        </div>


        {/* third SECTION */}
        <div className="w-full bg-gradient-to-r from-pink-50 to-white py-16 p-">
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
              <img src={img26} className="rounded-xl  w-full h-full md:w-96" />
            </div>
          </div>
        </div>

        {/* 4 section*/}
        <div className="py-20 bg-white">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest text-gray-400">SOME QUALITY ITEMS</p>
            <h2 className="text-3xl font-bold text-[#393280] mt-2">
              New Release Books
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Herosectioncard image={img15} title="Super-Man" author="Armor Ramsey" price="40.00" ></Herosectioncard>
            {/* <Herosectioncard props={Hero}/> */}
            <Herosectioncard image={img16} title="Great Travel At Desert" author="Sanchit Howdy" price="38.00" />
            <Herosectioncard image={img17} title="Spinder-Man" author="Arthur Doyle" price="45.00" />
            <Herosectioncard image={img18} title="Dc-Marvel" author="Klien Marry" price="35.00" />
          </div><br />
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

        {/* 5 section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  bg-[#FBEEEE] px-6 py-16 text-center   lg:text-left">
          <div className="flex justify-center lg:justify-end ">
            <img src={img10} className="max-w-xs sm:max-w-sm rounded-lg shadow-lg  hover:shadow-xl" />
          </div>

          <div>
            <p className="text-[#393280] text-3xl sm:text-4xl mb-2">Featured book</p>
            <p className="text-gray-600">By Timbur Hood</p>
            <p className="text-[#393280] text-3xl sm:text-4xl mt-4">
              Birds gonna be happy
            </p>
            <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-[#ED553B] text-3xl mt-4">$45.00</p><br />


            <button className="border  shadow-md hover:shadow-xl  border-[#393280] text-[#393280] px-10 py-3 rounded-md font-medium tracking-wide hover:bg-[#393280] hover:text-white transition">
              VIEW MORE →
            </button>
          </div>
        </div>

        {/* 6 section */}
        <div className="w-full bg-white py-20 ">
          <div className="max-w-7xl mx-auto px-6 ">
            <div className="bg-[#FCECEC] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left  shadow-md hover:shadow-xl">

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#393280]">
                  All books are 50% off now!
                </h2>
                <p className="text-gray-500 mt-4 max-w-md mx-auto lg:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                  {["768 DAYS", "01 HOUR", "27 MINT", "55 SEC"].map((t, i) => (
                    <div key={i}>
                      <p className="text-[#ED553B] text-2xl font-bold">{t.split(" ")[0]}</p>
                      <p className="text-xs tracking-widest text-gray-500">{t.split(" ")[1]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img src={img11} className="max-w-xs sm:max-w-sm" />
              </div>
            </div>
          </div>
        </div>



        {/* section 7 */}


        <div className="w-full bg-[#F9FEFE] py-24">
          <div className=" ml-56 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2  items-center text-center lg:text-left">
            <h2 className="text-4xl font-bold">
              Subscribe To <br /> Our Newsletter
            </h2>

            <div className="mr-56">
              <p className="text-gray-500 mb-8 max-w-md mx-auto lg:mx-0">
                Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet.
              </p>

              <div className="flex items-center border-b shadow-lg  hover:shadow-xl border-gray-300 max-w-full sm:max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter Your Email Address Here"
                  className="flex-1 py-3 text-sm outline-none bg-transparent"
                />
                <button className="text-[#ED553B] text-sm font-semibold flex items-center gap-2">
                  SEND <IoMdArrowDroprightCircle />
                </button>
              </div>
            </div>
          </div>

        </div>



        {/* section 8 */}

        <div className="py-20 bg-white">
          <div className="text-center mb-12">
            {/* <p className="text-xs tracking-widest text-gray-400">SOME QUALITY ITEMS</p> */}
            <h2 className="text-3xl font-bold text-black mt-2">
              Read our many blogs
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Herosectioncard image={img20} title=" Learn about this week's top author" description="Jump start your book reading by quickly check through the popular book categories..." />
            <Herosectioncard image={img24} title="Why we celebrate readers" description=" Jump start your book reading by quickly check through the popular book categories..." />
            <Herosectioncard image={img22} title="Toddlers can also read" description=" Jump start your book reading by quickly check through the popular book categories..." />
            <Herosectioncard image={img24} title="Get started on your game" description="Jump start your book reading by quickly check through the popular book categories..." />
          </div>

        </div>


        {/* new added */}




      </section>
    </>
  );
};

export default MainComponent;

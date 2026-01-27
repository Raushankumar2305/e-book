import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import img8 from "../assets/images/img8.png";

import img9 from "../assets/images/img9.png";

import img27 from "../assets/images/img27.png";

import img15 from "../assets/images/img15.png";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import img18 from "../assets/images/img18.png";
import img14 from "../assets/images/img14.png"
import img10 from "../assets/images/img10.png";

import img28 from "../assets/images/img28.png";
import img29 from "../assets/images/img29.png";
import img13 from "../assets/images/img13.png";

import img30 from "../assets/images/img30.png";

import img31 from "../assets/images/img31.png";

import img32 from "../assets/images/img32.png";
import img33 from "../assets/images/img33.png";



import { Link } from "react-router-dom";




const books = [
  { id: 1, title: "Simple Way Of Piece Life", price: 40, image: img15 },
  { id: 2, title: "Great Travel At Desert", price: 38, image: img16 },
  // { id: 3, title: "The Lady Beauty Scarlett", price: 45, image: img17 },
  { id: 4, title: "Hypocrite World", price: 42, image: img18 },
  { id: 5, title: "Great Travel At Desert", price: 38, image: 14 },
  { id: 61, title: "The Lady Beauty Scarlett", price: 45, image: img15 },
  { id: 11, title:"happy day",price:500, image: img28} ,
  { id: 6, title:"The lady beauty Scarlett",price:1200, image: img13},
  { id: 7, title:"Sunday",price:400, image: img31},   
  { id: 12, title:"Walt disney's comic",price:500, image:img29 },

  { id: 3, title:"Simple way of piece life",price:200, image:img30 },

  { id: 8, title:"moday",price:500, image:img32 },

  { id: 9, title:"Birds Gonna Be HAPPY",price:499, image:img10 },
  { id: 41, title:" last train",price:500, image:img8 },
  { id: 40, title:"Road Trip",price:500, image:img9 },
   { id: 42, title:"Day Out", price:450, image:img33 },
  { id: 12, title:"Walt disney's comic",price:500, image:img29 },
  { id: 10, title:"A wednesday",price:500, image:img27 },
  
  
];

const BookDetails = () => {
  const { id } = useParams();
   const { addToCart } = useCart();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <h2 className="text-center mt-10">Book Not Found</h2>;
  }


const handleAddToCart = () => {
    console.log ("  book is added "+ book);
    addToCart(book);
  };


  return (
    <div className="max-w-4xl mx-auto p-6">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow rounded p-6">

        <img src={book.image} className="w-full h-80 object-contain" />

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {book.title}
          </h2>

          <p className="text-orange-600 text-xl font-bold mt-3">
            ${book.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mt-4">
             {book.auth}
          </p>

          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded"
              onClick={handleAddToCart}
              
            > 

            {/* add to cart  */}
              <Link to="/cart">Add To Cart </Link> 
          </button><br/>

           <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded">
             <Link to="/Bookspage">Back </Link>
          </button>

        </div>

      </div>
    </div>
  );
};

export default BookDetails;

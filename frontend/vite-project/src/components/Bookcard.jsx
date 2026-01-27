import { Link } from "react-router-dom";

const Bookcard = ({ id, image, title, price }) => {
  return (
    <Link to={`/books/${id}`}>
      <div className="bg-white shadow rounded p-4 hover:shadow-lg transition cursor-pointer">
        <div className="h-48 flex items-center justify-center">
          <img src={image} className="h-48" />
        </div>

        <h3 className="mt-4 font-semibold text-sm text-gray-700 text-center">
          {title}
        </h3>

        <p className="text-orange-600 font-semibold mt-1 text-center">
          ${Number(price).toFixed(2)}
        </p>


        <div className="flex justify-center">
          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded text-sm">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Bookcard;

const Herosectioncard = ( props ) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition rounded-md p-4 text-center">

      {/* bookimages*/}
      <div className="relative group">
        <img
          src={props.image}
          alt={props.title}
          className="mx-auto h-64 object-cover"
        />

        {/* hover button */}
        <button
          className="absolute inset-0 bg-[#ED553B] text-white opacity-0 
          group-hover:opacity-100 transition flex items-center justify-center text-sm font-semibold"
        >
          ADD TO CART
        </button>
      </div>

      {/* ad books */}
      <h3 className="mt-4 text-sm font-semibold text-[#393280]">
        {props.title}
      </h3>

      <p className="text-xs text-gray-400 mt-1">
        {props.author}
      </p>

      <p className="mt-2 text-[#ED553B] font-semibold">
        ${props.price}
      </p>
    </div>
  );
};

export default Herosectioncard;

const Herosection_grid = (props) => {
  return (
    <div className=" grid grid-cols-4 bg-white shadow-md hover:shadow-xl transition rounded-md p-4 text-center">

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
         
        </button>
      </div>

      
      <h3 className="mt-4 text-sm font-semibold text-[#393280]">
        {props.title}

      </h3>

      <h3 className="mt-4 text-sm font-semibold text-black">
        {props.author}
      </h3>
      
    </div>
  );
};

export default Herosection_grid;

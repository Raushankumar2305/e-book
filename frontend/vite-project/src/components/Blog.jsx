import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top 10 Books You Must Read in 2026",
    desc: "Discover the most loved and trending books that readers can’t stop talking about this year.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 2,
    title: "Why Reading Daily Improves Your Life",
    desc: "Reading daily boosts focus, knowledge, and mental clarity. Here’s why you should start today.",
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 3,
    title: "Best Self-Help Books for Students",
    desc: "Hand-picked self-development books to help students grow skills and confidence.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 4,
    title: "How E-Books Are Changing Reading",
    desc: "Digital books are transforming the way we read. Let’s explore the future of reading.",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
];

const Blog = () => {
  return (
    <>
      
      <nav className="hidden lg:block bg-[#393280] border-t">
        <ul className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-xs tracking-widest font-semibold text-white">
          <Link to="/homepage3" className="hover:text-[#ED553B]">HOME |</Link>
          <Link to="/Aboutus" className="hover:text-[#ED553B]">ABOUT US |</Link>
          <Link to="/Bookspage" className="hover:text-[#ED553B]">BOOKS |</Link>
          <Link to="/Bookspage" className="hover:text-[#ED553B]">NEW RELEASE |</Link>
          <Link to="/Contactus" className="hover:text-[#ED553B]">CONTACT US |</Link>
        </ul>
      </nav>

     
      <section className=" bg-gradient-to-r from-[#ffe5e5]/90 via-[#f5fffe]/95 to-white text-black py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Book Blog </h1>
        <p className="text-lg opacity-90">
          Reading tips, book reviews & latest updates from our library
        </p>
      </section>

     
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-3 justify-center">
        {["All", "Reviews", "Self Help", "Fiction", "Technology"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 bg-gray-100 hover:bg-[#ED553B] hover:text-white rounded-full text-sm font-medium transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* blog  */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="font-bold text-lg mb-2 text-[#393280]">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                {blog.desc}
              </p>

              <button className="bg-[#ED553B] text-white px-4 py-2 rounded hover:scale-105 transition">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </section>

    
      <section className="bg-[#f6f6ff] py-16 text-center">
        <h2 className="text-3xl font-bold text-[#393280] mb-4">
          Subscribe to our Newsletter
        </h2>

        <div className="flex justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded w-64"
          />
          <button className="bg-[#393280] text-white px-6 py-2 rounded hover:bg-[#ED553B] transition">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;

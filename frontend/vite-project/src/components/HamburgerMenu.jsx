import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  // 🔒 Lock main page scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // 📱 Close menu automatically on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ☰ HAMBURGER BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden flex flex-col gap-1 z-50"
          aria-label="Open Menu"
        >
          <span className="w-6 h-0.5 bg-[#393280]" />
          <span className="w-6 h-0.5 bg-[#393280]" />
          <span className="w-6 h-0.5 bg-[#393280]" />
        </button>
      )}

      {/* ❌ CANCEL BUTTON */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden fixed top-5 right-6 z-50 text-white text-2xl"
          aria-label="Close Menu"
        >
          <FiX />
        </button>
      )}

      {/* 🌑 BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/*  for phone */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full  bg-[#393280] text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Menu content scrolls */}
        <nav className="h-full px-6 flex flex-col items-center justify-center gap-6 text-sm font-semibold overflow-y-auto">
          <a onClick={() => setOpen(false)} href="/homepage">HOME</a>
          <a onClick={() => setOpen(false)} href="/aboutus">ABOUT US</a>
           <a onClick={() => setOpen(false)} href="/auth/register">Account</a>
          
          <div>
          <a onClick={() => setOpen(false)} href="/bookspage">BOOKS</a>
          {/* 
          <div className="hover:text-[#ED553B] text-black">
            <Link to="/Bookspage">NEW RELEASE</Link>
          </div>
 */}
          </div>
          <a onClick={() => setOpen(false)} href="/bookspage">NEW RELEASE</a>
          <a onClick={() => setOpen(false)} href="/contactus">CONTACT US</a>
          <a onClick={() => setOpen(false)} href="/blog">BLOG</a>
        </nav>


        {/* Extra space to test scrolling */}
        <div className="h-40" />
      
    </div >
    </>
  );
}

export default HamburgerMenu;

import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-ykb py-5 text-neutral-200 relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none flex flex-row items-center justify-between mx-auto text-4xl"
        >
          <span
            className={`transition-transform duration-300 ease-in-out ${
              menuOpen ? "transform rotate-90" : ""
            }`}
          >
            {menuOpen ? (
              <span className="icon-[mdi--arrow-left]"></span>
            ) : (
              <span className="icon-[mdi--hamburger-menu]"></span>
            )}
          </span>
          <h1 className="text-4xl px-10">Jack Kershaw</h1>
        </button>
        <nav
          className={`absolute left-0 right-0 top-full bg-ykb py-4 sm:relative sm:top-0 sm:bg-transparent transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "opacity-100 translate-y-0 "
              : "opacity-0 -translate-y-full"
          } sm:opacity-100 sm:translate-y-0 text-neu sm:slate-600 items-center justify-between text-center text-2xl sm:mx-10 sm:space-y-0 ${
            menuOpen
              ? "flex sm:flex-row flex-col items-center"
              : "hidden sm:flex sm:flex-row justify-between items-center"
          }`}
        >
          <a
            className="hidden sm:block active:text-neu sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
            href="/"
          >
            Jack Kershaw
          </a>
          <div className="flex flex-col justify-between sm:flex-row space-y-10 sm:space-y-0">
            <a
              href="/contact"
              className="active:text-neu sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
            >
              Contact
            </a>
            <a
              href="/coding"
              className="active:text-neu sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
            >
              Coding
            </a>
            <a
              href="/design"
              className="active:text-neu sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
            >
              Design
            </a>
            <a
              href="/blog"
              className="active:text-neu sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
            >
              Blog
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

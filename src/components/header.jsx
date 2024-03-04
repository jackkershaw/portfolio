import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="min-w-100 bg-ykb pt-6 sm:py-4 text-white">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-orangepeel hover:text-white focus:outline-none flex flex-row items-center justify-between mx-auto text-2xl"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
          <h1 className="text-3xl">Menu</h1>
        </button>
        <nav
          className={`pt-8 sm:pt-0 bg-white text-ykb sm:text-white sm:bg-ykb items-center justify-between text-center text-3xl sm:mx-10 space-y-10 sm:space-y-0 ${menuOpen ? "flex sm:flex-row flex-col" : "hidden sm:flex sm:flex-row"}`}
        >
          {" "}
          <a
            href="/"
            className="hover:text-orangepeel active:text-white"
          >
            About Me
          </a>
          <a
            href="/coding"
            className="hover:text-orangepeel active:text-white"
          >
            Coding
          </a>
          <a
            href="/design"
            className="hover:text-orangepeel active:text-white"
          >
            Design
          </a>
          <a
            href="/blog"
            className="hover:text-orangepeel active:text-white"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="hover:text-orangepeel active:text-white"
          >
            Contact
          </a>
          <a
            href="/cv"
            className="hover:text-orangepeel active:text-white"
          >
            CV
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;

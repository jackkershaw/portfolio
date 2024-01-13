function Header({ onHeaderClick }) {
  return (
    <>
      <header className="min-w-100 bg-ykb-500 text-white">
        <navbar className="container flex flex-col items-center justify-between py-4 sm:text-2xl md:mx-5 md:flex-row lg:mx-10 lg:text-3xl">
          <h1
            onClick={() => onHeaderClick("openingPage")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Jack Kershaw
          </h1>
          <button
            id="hamburger-button"
            class="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
          >
            &#9776;
          </button>
          <h1
            onClick={() => onHeaderClick("coding")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Coding
          </h1>
          <h1
            onClick={() => onHeaderClick("design")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Design
          </h1>
          <h1
            onClick={() => onHeaderClick("videos")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Video
          </h1>
          <h1
            onClick={() => onHeaderClick("contact")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Contact
          </h1>
        </navbar>
      </header>
    </>
  );
}

export default Header;

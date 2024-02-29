function Header() {
  return (
    <>
      <header className="min-w-100 bg-ykb py-4 text-white">
        <nav className="container flex flex-col items-center justify-between py-4 text-center text-2xl sm:mx-10 sm:flex-row lg:text-3xl">
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

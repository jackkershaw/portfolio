function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="fixed bottom-0 w-full bg-ykb-500 py-4 text-2xl text-white">
        <navbar className="container flex flex-col items-center justify-between sm:mx-5 sm:flex-row lg:mx-10 ">
          <h2
            onClick={scrollToTop}
            className="cursor-pointer hover:text-ykb-50 active:text-ykb-500"
          >
            {" "}
            back to top ^
          </h2>
        </navbar>
      </footer>
    </>
  );
}

export default Footer;

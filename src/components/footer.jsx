function Footer() {
  return (
    <footer className="relative w-full bottom-0 bg-ykb text-2xl text-neutral-100 py-4">
      <div className="mx-10 h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-row justify-between sm:justify-end items-center space-x-5 text-center">
            <a
              href="https://github.com/jones58"
              target="_blank"
              aria-label="Jack Kershaw Github"
            >
              <span className="icon-[mdi--github] w-20 h-20 cursor-pointer hover:bg-ykbdark active:text-ykblight"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/jackkershaw"
              target="_blank"
              aria-label="Jack Kershaw LinkedIn"
            >
              <span className="icon-[mdi--linkedin] w-20 h-20 cursor-pointer hover:bg-ykbdark active:text-ykblight"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

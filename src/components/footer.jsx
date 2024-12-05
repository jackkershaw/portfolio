function Footer() {
  return (
    <footer className="relative w-full bottom-0 bg-ykb text-neutral-100 py-5 sm:py-2.5">
      <div className="mx-10 h-full">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center h-full rounded-full">
          <a
            href="https://github.com/jones58"
            target="_blank"
            aria-label="Jack Kershaw Github"
            className="flex items-center justify-center rounded-full"
          >
            <span className="icon-[mdi--github] w-20 h-20 cursor-pointer hover:bg-ykbdark active:text-ykblight"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/jackkershaw"
            target="_blank"
            aria-label="Jack Kershaw LinkedIn"
            className="flex items-center justify-center rounded-full"
          >
            <span className="icon-[mdi--linkedin] w-20 h-20 cursor-pointer hover:bg-ykbdark active:text-ykblight"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

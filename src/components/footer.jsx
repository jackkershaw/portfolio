function Footer() {
  return (
    <footer className="bottom-0 bg-ykb py-10 text-2xl text-neutral-200">
      <div className="mx-10">
        <div className="flex-col sm:justify-end flex pt-10 sm:pt-0">
          <div className="flex flex-row justify-center sm:justify-end space-x-5 text-right py-5">
            {" "}
            <a href="https://github.com/jones58" target="_blank">
              <span className="icon-[mdi--github] w-20 h-20 cursor-pointer hover:bg-ykbdark active:text-ykblight"></span>
            </a>
            <a
              href="Jack-Kershaw-CV.pdf"
              target="_blank"
              download="Jack-Kershaw-CV.pdf"
            >
              <span className="icon-[mdi--resume] w-20 h-20 cursor-pointer hover:bg-ykbdark active:text-ykblight"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/jackkershaw"
              target="_blank"
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

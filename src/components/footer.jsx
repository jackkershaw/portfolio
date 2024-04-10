/* NB all SVGs are from Fontawesome: <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */
function Footer() {
  return (
    <div>
      <footer className="sm:fixed bottom-0 w-full bg-ykb py-4 text-2xl text-white sm:max-h-20">
        <navbar className="container flex flex-col items-center justify-between sm:mx-5 sm:flex-row lg:mx-10">
          <div className="flex space-x-6 pt-4 sm:pt-0">
            <a href="https://github.com/jones58" target="_blank">
              <span class="icon-[mdi--github] w-10 h-10 cursor-pointer hover:text-orangepeel active:text-white"></span>
            </a>
            <a
              href="https://www.freecodecamp.com/jones58"
              target="_blank"
            >
              <span class="icon-[simple-icons--freecodecamp] w-11 h-11 cursor-pointer hover:text-orangepeel active:text-white"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/jackkershaw"
              target="_blank"
            >
              <span class="icon-[mdi--linkedin] w-11 h-11 cursor-pointer hover:text-orangepeel active:text-white"></span>
            </a>
          </div>
        </navbar>
      </footer>
    </div>
  );
}

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";

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
          <div className="flex space-x-6 py-6">
            <a href="https://github.com/jones58" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer text-3xl hover:text-ykb-50 active:text-ykb-500 "
              />
            </a>
            <a href="https://www.freecodecamp.com/jones58" target="_blank">
              <FontAwesomeIcon
                icon={faFreeCodeCamp}
                className="cursor-pointer text-3xl hover:text-ykb-50 active:text-ykb-500"
              />
            </a>
            <a href="https://www.linkedin.com/in/jackkershaw" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="cursor-pointer text-3xl hover:text-ykb-50 active:text-ykb-500"
              />
            </a>
          </div>
        </navbar>
      </footer>
    </>
  );
}

export default Footer;

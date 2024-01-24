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
      <footer className="fixed bottom-0 w-full bg-ykb py-4 text-2xl text-white sm:max-h-20">
        <navbar className="container flex flex-col items-center justify-between sm:mx-5 sm:flex-row lg:mx-10">
          <h2
            onClick={scrollToTop}
            className="hover:text-orangepeel  cursor-pointer active:text-white"
          >
            {" "}
            back to top ^
          </h2>
          <div className="flex space-x-6 pt-4 sm:pt-0">
            <a href="https://github.com/jones58" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-orangepeel cursor-pointer  text-3xl active:text-white "
              />
            </a>
            <a href="https://www.freecodecamp.com/jones58" target="_blank">
              <FontAwesomeIcon
                icon={faFreeCodeCamp}
                className="hover:text-orangepeel cursor-pointer  text-3xl active:text-white"
              />
            </a>
            <a href="https://www.linkedin.com/in/jackkershaw" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-orangepeel cursor-pointer  text-3xl active:text-white"
              />
            </a>
          </div>
        </navbar>
      </footer>
    </>
  );
}

export default Footer;

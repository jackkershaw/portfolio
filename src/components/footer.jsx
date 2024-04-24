function Footer() {
  return (
    <footer className="bottom-0 bg-ykb py-10 text-2xl text-neutral-300">
      <div className="mx-10 sm:px-5">
        <div className="sm:grid-cols-2 sm:grid">
          <div>
            <p className="text-2xl">
              Get in touch here or email me directly at{" "}
              <a
                href="mailto:jackkershaw@protonmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                jackkershaw@protonmail.com
              </a>
              .
            </p>
            <form
              action="https://formsubmit.co/jackkershaw@protonmail.com"
              method="POST"
              className="flex flex-col space-y-3 py-5 text-neutral-900"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="input-field p-4 bg-neutral-300"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className="input-field p-4  bg-neutral-300"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                rows="4"
                className="input-field p-4  bg-neutral-300"
              ></textarea>
              <button
                type="submit"
                value="Submit"
                className="submit-button p-4 bg-neutral-300 text-left"
              >
                Submit
              </button>
            </form>
          </div>
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
      </div>
    </footer>
  );
}

export default Footer;

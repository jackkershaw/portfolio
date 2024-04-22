function Footer() {
  return (
    <footer className="bottom-0 bg-ykb py-10 text-2xlsm:max-h-20">
      <div className="mx-10">
        <div className="sm:grid-cols-2 sm:grid">
          <div>
            <p className="text-2xl text-white">
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
              className="flex flex-col space-y-3 py-5"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="input-field p-4"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className="input-field p-4"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                rows="4"
                className="input-field p-4"
              ></textarea>
              <button
                type="submit"
                value="Submit"
                className="submit-button p-4 bg-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

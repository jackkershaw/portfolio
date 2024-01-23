function Contact() {
  return (
    <div className="mx-5 mb-10 py-14 ">
      <div className="space-between mb-10 flex flex-col">
        <p className="text-2xl  md:mx-5">
          Get in touch here or email me directly on {""}
          <a
            href="mailto:jkershaw986@gmail.com"
            target="_blank"
            className="hover:underline"
          >
            jkershaw986@gmail.com
          </a>
        </p>
      </div>
      <form
        action="https://formsubmit.co/jcode689@gmail.com"
        method="POST"
        className="my-10 flex flex-col space-y-3 border-2 border-black p-10 hover:shadow-md hover:shadow-ykb-500 md:mx-10"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="rounded border-2 p-4 text-xl focus:border-ykb focus:shadow-md sm:p-10"
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          className=" rounded border-2 p-4  text-xl focus:border-ykb focus:shadow-md sm:p-10"
        />
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          rows="4"
          className=" rounded border-2 p-4 text-xl focus:border-ykb focus:shadow-md sm:p-10"
        ></textarea>
        <br />
        <button
          type="submit"
          value="Submit"
          className="rounded border-4 border-ykb p-4 py-10 text-left text-xl font-bold hover:shadow-md hover:shadow-black focus:border-ykb focus:shadow-md sm:p-10"
        >
          Submit
        </button>
        <br />
      </form>
    </div>
  );
}

export default Contact;

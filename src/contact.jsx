function Contact() {
  return (
    <div className="mb-10 pb-10">
      <div className="space-between mx-5 mb-10 flex flex-col pt-10">
        <p className="text-2xl  md:mx-5 md:py-4 lg:w-1/3">
          I'm currently looking for new projects. If you'd like to work with me,
          please reach out below.
        </p>
      </div>
      <form
        action="https://formsubmit.co/jcode689@gmail.com"
        method="POST"
        className="mx-5 flex flex-col space-y-2 border-black sm:w-1/3 md:mx-10"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className=" rounded border-2 p-4 focus:border-ykb focus:shadow-md"
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          className=" rounded border-2 p-4  focus:border-ykb focus:shadow-md"
        />
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          rows="4"
          className=" rounded border-2 p-4 focus:border-ykb focus:shadow-md"
        ></textarea>
        <br />
        <button
          type="submit"
          value="Submit"
          className=" rounded border-4 border-ykb p-4 text-left shadow-md focus:border-ykb focus:shadow-md"
        >
          Submit
        </button>
        <br />
      </form>
    </div>
  );
}

export default Contact;

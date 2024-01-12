function OpeningPage() {
    return (
        <>
    <div className="page" id="about-me">
      <h4 id="big-introduction">
        Hi there! I'm Jack, a London-based designer and developer.
      </h4>
    </div>
    <div id="contact-me">
      <form
        action="https://formsubmit.co/jcode689@gmail.com"
        method="POST"
      >
        <h4>Want to send me a message? Get in touch below.</h4>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        /><br /><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
        /><br /><br />
        <textarea
          id="message"
          name="message"
          placeholder="How can I help?"
          required
          rows="4"
        ></textarea
        ><br /><br />
        <button type="submit" value="Submit">Submit</button
        ><br /><br />
      </form>
    </div>
    </>
    )
}

export default OpeningPage

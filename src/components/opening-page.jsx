function OpeningPage() {
  return (
    <div>
      <div className="flex sm:flex-row justify-start flex-col py-10">
        <img
          src="./public/opening-page/jackkershaw.jpg"
          className="sm:w-[30vw] h-auto object-cover object-center rounded-lg"
        ></img>
        <div className="sm:px-14 flex flex-col justify-between sm:max-w-[40vw]">
          <p className="text-3xl py-14 sm:py-0">
            Hi! I'm a developer and designer from London. I have been
            designing for over ten years, and developing websites for
            the past two years.
          </p>
          <div className="flex flex-col justify-between space-y-4">
            <a
              href="/contact"
              className=" bg-ykb hover:bg-ykbdark active:bg-ykblight text-neutral-200 rounded-lg py-5 px-4 no-underline text-center"
            >
              Get In Touch
            </a>
            <a
              href="/coding"
              className=" bg-ykb hover:bg-ykbdark active:bg-ykblight text-neutral-200 rounded-lg py-5 px-4 no-underline text-center"
            >
              See Recent Work
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default OpeningPage;

function OpeningPage() {
  return (
    <div>
      <div className="flex sm:flex-row justify-start flex-col space-y-6 pb-10">
        <img
          src="public/opening-page/jackkershaw.jpg"
          className="w-96 h-auto object-cover rounded-lg"
        ></img>
        <p className="text-4xl sm:max-w-[40vw] sm:p-10 prose">
          Hi! I'm a developer and designer from London. I have been
          designing for over ten years, and developing websites for the
          past two years.
        </p>
      </div>{" "}
    </div>
  );
}

export default OpeningPage;

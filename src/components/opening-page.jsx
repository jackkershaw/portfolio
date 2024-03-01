import MyTechStack from "./my-tech-stack";

function OpeningPage() {
  return (
    <div className="mx-5 mb-10 pb-10 sm:py-10 md:mx-10 lg:grid lg:grid-cols-3">
      <div className="mt-10 h-auto border-2 border-black p-5 hover:shadow-md hover:shadow-ykb sm:mt-0">
        <img
          src="/opening-page/jackkershaw.jpg"
          alt="a photo of me. I'm wearing a blue jumper and headphones."
          className="h-auto max-w-full"
        />
      </div>
      <div className="mb-10 py-5 text-2xl text-ykb sm:col-span-2 sm:mx-5 sm:mb-0 sm:mt-10 sm:py-10 sm:text-3xl md:mx-10 md:text-5xl">
        <p>
          Hi there! I'm Jack, a London-based developer and designer.
          I've spent the last two years learning the fundamentals of
          development, including taking part in a twelve-week bootcamp.
          So far I've learnt:
        </p>
        <MyTechStack />
      </div>
    </div>
  );
}

export default OpeningPage;

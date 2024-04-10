import MyTechStack from "./my-tech-stack";

function OpeningPage() {
  return (
    <div className="mx-5 mb-10 pb-10 sm:py-10 md:mx-10 lg:grid lg:grid-cols-3">
      <div className="mt-10 h-[40vh] w-auto sm:h-auto rounded-lg overflow-hidden sm:mt-0">
        <img
          src="/opening-page/jackkershaw.jpg"
          alt="a photo of me. I'm wearing a blue jumper and headphones."
          className="h-auto max-w-full"
        />
      </div>
      <div className="mb-10 py-5 text-2xl text-ykb sm:col-span-2 sm:mx-5 sm:mb-0 sm:mt-10 sm:py-10 sm:text-2xl md:mx-10 md:text-3xl">
        <p>
          Jack Kershaw is a developer and designer from London. He has
          been designing for over ten years, and developing websites
          for the past two years. Depending on the project, his tech
          stack includes:
        </p>
        <MyTechStack />
      </div>
    </div>
  );
}

export default OpeningPage;

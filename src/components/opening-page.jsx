import MyTechStack from "./my-tech-stack";
import CodingContent from "./codingContent";

function OpeningPage() {
  return (
    <div>
      <div className="flex sm:flex-row justify-between flex-col space-y-6">
        <img
          src="/opening-page/jackkershaw.jpg"
          className="sm:max-w-[10vw] h-auto rounded-lg object-cover h-auto"
        />
        <p className="text-3xl sm:max-w-[30vw] sm:ml-5">
          Jack Kershaw is a developer and designer from London. He has
          been designing for over ten years, and developing websites
          for the past two years.
        </p>
        <MyTechStack />
      </div>
      <div className="w-full h-20 py-10" />
      <CodingContent />
    </div>
  );
}

export default OpeningPage;

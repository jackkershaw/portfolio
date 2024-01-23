import ReactTypingEffect from "react-typing-effect";

function OpeningPage() {
  return (
    <div className="mx-10 mb-10 py-10 text-2xl text-ykb-700 md:text-5xl">
      <ReactTypingEffect
        text={[
          "Hi there! I'm Jack, a London-based designer and developer.",
          "I've spent the past year and a half learning the fundamentals of development,",
          "including taking part in Just IT's highly selective twelve-week bootcamp.",
          "So far I've learnt HTML, CSS, Javascript, Python, React, and Tailwind CSS.",
        ]}
      />
    </div>
  );
}

export default OpeningPage;

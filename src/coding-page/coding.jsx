function Coding() {
  return (
    <>
      <div className="space-between bottom-20 mx-5 flex w-full flex-col">
        <p className="max-w-max text-2xl sm:text-3xl">
          You can follow my progress{" "}
          <a
            href="https://progress.jackkershaw.net"
            target="_blank"
            className="hover:underline"
          >
            here
          </a>{" "}
          and see some of my favorite learning resources{" "}
          <a
            href="https://github.com/jones58/Learning-Resources"
            target="_blank"
            className="hover:underline"
          >
            here
          </a>
          .
        </p>
        <section>
          <iframe
            src="https://spiekerfann.jackkershaw.net/"
            className="flex-grow"
          ></iframe>
          <h3>Hobby Page</h3>
          <p>What, you don't know Erik Spiekermann?</p>
          <iframe
            src="https://spiekerfann.jackkershaw.net/"
            className="flex-grow"
          ></iframe>
          <a href="https://spiekerfann.jackkershaw.net/" target="_blank">
            <p>Click here to view full site</p>
          </a>
        </section>
        <section>
          <h3>Daily challenges</h3>
          <div>
            <iframe
              src="https://dailychallenges.jackkershaw.net"
              className="flex-grow"
            ></iframe>
          </div>
          <p>
            My partner and I both like to play Wordle adjacent games so I made
            this website.
          </p>
          <a href="https://dailychallenges.jackkershaw.net" target="_blank">
            <p>Click here to view full site</p>
          </a>
        </section>
        <div className="flex-grow"></div>
        <div className="flex-grow"></div>
        <section>
          <h3>Game</h3>
          <div>
            <iframe
              src="https://typespotting.jackkershaw.net/"
              className="flex-grow"
            ></iframe>
          </div>
          <p>Can you tell I like fonts?</p>
          <a href="https://typespotting.jackkershaw.net/" target="_blank">
            <p>Click here to view full site</p>
          </a>
        </section>
        <section>
          <h3>Where next?</h3>
        </section>
      </div>
    </>
  );
}

export default Coding;

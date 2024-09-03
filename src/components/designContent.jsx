function DesignContent() {
  const designs = [
    {
      id: "fete2022",
      description:
        "Poster designed as part of the broader identity and logo design I completed for Fête de L'Humanité 2022 - a festival drawing crowds of over 500,000 in France.",
    },
    {
      id: "leaves",
      description:
        "Self-initiated poster made by gathering leaves, scanning and manipulating them in Photoshop.",
    },
    {
      id: "cpc",
      description:
        "Logo and brand identity for the Centre for Progressive Change.",
    },

    {
      id: "peoplesvaccine",
      description:
        "Poster design for the People's Vaccine campaign, advocating for global access to COVID-19 vaccines.",
    },
    {
      id: "safesickpay",
      description:
        "Designs for Safe Sick Pay, a policy research project to raise the rate of statuory sick pay.",
    },
    {
      id: "scotland-tuc",
      description:
        "Leaflet, beer mat and pins for Scotland TUC, an organisation in Scotland providing guidance to workers and employers on how to return to work after the COVID-19 lockdowns.",
    },
    {
      id: "fete2023",
      description:
        "Poster designed as part of the broader identity and logo design I completed for Fête de L'Humanité 2023 - a festival drawing crowds of over 600,000 in France.",
    },
    {
      id: "screenburn",
      description:
        "Logo and brand identity for Screenburn, an organisation researching the implications of excessive screen use.",
    },
    {
      id: "fairwork",
      description:
        "Billboard designs for Fairwork, a research group at the Oxford Internet Institute.",
    },
    {
      id: "pelicula",
      description:
        "An open-source typeface inspired by Poster Collective posters at May Day Rooms.",
    },
  ];

  return (
    <div className="flex flex-col ">
      <p className="text-2xl sm:max-w-2xl">
        I have achieved international recognition for my design work,
        including a double-page spread in{" "}
        <a
          className="hover:text-ykb active:text-ykblight"
          href="https://www.theguardian.com/artanddesign/gallery/2022/aug/20/anonymous-street-art-with-a-political-message-in-pictures"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Guardian
        </a>
        , and articles in{" "}
        <a
          className="hover:text-ykb active:text-ykblight"
          href="https://www.vice.com/en/article/889j95/show-these-rent-strike-posters-to-your-landlord-or-hang-them-on-your-wall"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vice
        </a>
        , and{" "}
        <a
          className="hover:text-ykb active:text-ykblight"
          href="https://www.itsnicethat.com/features/radical-poster-graphic-design-250522"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's Nice That
        </a>
        . I designed posters, websites and social media branding for a
        host of clients around the world, including Oxford University,
        Common Knowledge and Autonomy. I led the brand design for La
        Fête de L’Humanité in 2022 and 2023, significantly contributing
        to the event's success in attracting over 500,000 attendees.
      </p>
      <div className="flex flex-wrap justify-center gap-4 py-4 pb-10 sm:pb-0">
        {designs.map((design) => (
          <section
            key={design.id}
            className="max-w-xs py-5 relative group"
          >
            <img
              src={`/design-page/${design.id}/${design.id}.jpg`}
              alt={design.id}
              className="h-auto w-full"
            />
            <p className=" absolute -bottom-10 left-0 right-0 bg-neutral-100 text-neutral-900 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {design.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
export default DesignContent;

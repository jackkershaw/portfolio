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
      id: "pelicula",
      description:
        "An open-source typeface inspired by Poster Collective posters at May Day Rooms.",
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
  ];

  return (
    <div className="mb-10 flex flex-col sm:px-5">
      <p className="text-2xl">
        Jack's graphic design work has been featured in{" "}
        <a
          className="hover:text-ykb active:text-ykblight"
          href="https://www.theguardian.com/artanddesign/gallery/2022/aug/20/anonymous-street-art-with-a-political-message-in-pictures"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Guardian
        </a>
        ,{" "}
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
        . He used Adobe Photoshop, Illustrator, InDesign and Bridge to
        create bold, colourful designs for a host of clients around the
        world, including Oxford University, Fête de L'Humanité and
        Autonomy.
      </p>
      <div className="flex flex-wrap justify-center gap-4 py-4 pb-10 sm:pb-0">
        {designs.map((design) => (
          <section
            key={design.id}
            className="max-w-xs overflow-hidden py-5 "
          >
            <img
              src={`/design-page/${design.id}/${design.id}.jpg`}
              alt={design.id}
              className="h-auto w-full"
            />
          </section>
        ))}
      </div>
    </div>
  );
}

export default DesignContent;

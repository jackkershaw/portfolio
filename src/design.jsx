function Design() {
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
    <div className="space-between mx-5 mb-10 flex flex-col py-10">
      <p className="py-4 text-2xl lg:mx-5 lg:w-1/3">
        Designs I created in my time at Tapir Studio Limited. I used Adobe
        Photoshop, Illustrator, InDesign and Bridge to create bold, colourful
        designs for a host of clients around the world.
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {designs.map((design) => (
          <section
            key={design.id}
            className="max-w-xs overflow-hidden border-2 border-black p-5 hover:shadow-lg hover:shadow-ykb"
          >
            <img
              src={`/design-page/${design.id}/${design.id}.jpg`}
              alt={design.id}
              className="h-auto w-full"
            />
            <p className="p-4">{design.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Design;

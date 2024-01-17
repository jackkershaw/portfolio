function Design() {
  const designs = [
    {
      id: "fete2022",
      description: "design",
    },
    {
      id: "leaves",
      description: "design ",
    },
    {
      id: "fflondon",
      description: "design ",
    },
    { id: "cpc", description: "design " },
    { id: "pelicula", description: "design " },
    { id: "peoplesvaccine", description: "design " },
    { id: "safesickpay", description: "design " },
    { id: "scotland-tuc", description: "design " },
    {
      id: "fete2023",
      description: "design",
    },
    { id: "screenburn", description: "design " },
  ];

  return (
    <div className="space-between mx-5 mb-10 flex flex-col py-10">
      <p className="py-4 text-2xl lg:mx-5 lg:w-1/3">
        Designs I created in my time at Tapir Studio Limited.
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
            <p>{design.id}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Design;

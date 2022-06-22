import React from "react";

const CardData = () => {
  const cardinfo = [
    {
      Title: "Pantera",
      BtnLabel: "Ver mas Panteras",
      ImgUrl:
        " https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG/800px-Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG",
      Description:
        "La pantera negra es una variación negra (melanismo) de varias especies de grandes félinos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.",
    },
    {
      Title: "Gato",
      BtnLabel: "Ver mas Gatos",
      ImgUrl:
        " https://upload.wikimedia.org/wikipedia/commons/6/64/Collage_of_Six_Cats-02.jpg",
      Description:
        "El gato se comunica a través de vocalizaciones. Las más populares son su característico maullido y el ronroneo, pero puede aullar, gemir, gruñir y bufar.",
    },
    {
      Title: "Perro",
      BtnLabel: "Ver mas Perros",
      ImgUrl:
        " https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Poligraf_Poligrafovich.JPG/800px-Poligraf_Poligrafovich.JPG",
      Description:
        "El perro doméstico proviene de un grupo ancestral común que data de hace aproximadamente treinta mil años, y desde entonces se ha extendido a todas partes del mundo.",
    },
    {
      Title: "Mono",
      BtnLabel: "Ver mas Monos",
      ImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Portrait_of_a_father.jpg",
      Description:
        "Muchas especies de monos viven en los árboles, aunque hay especies que viven principalmente en el suelo, como los babuinos. La mayoría de las especies son principalmente activas durante el día. ",
    },
  ];
  const getcardinfo = cardinfo.map((info, i) => (
    <div className="card  m-2 border rounded-3 " key={i}>
      <img
        className="card-img-top cardStyle"
        src={info.ImgUrl}
        alt="Card image cap"
      />
      <div className="card-body flex-column d-flex ">
        <h5 className="card-title">{info.Title} </h5>
        <p className="card-text">{info.Description}</p>
        <a href={info.BtnURL} className="btn btn-primary mt-auto">
          {info.BtnLabel}{" "}
        </a>
      </div>
    </div>
  ));
  return getcardinfo;
};

export default CardData;

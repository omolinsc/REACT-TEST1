import React, { useState } from "react";
import Gallery from "./Gallery";
import Section from "./Section";

export const Main = () => {
  // INICIALIZACIÓN DE ESTADOS - va sumando 1 en cada click en el DIV
  const [numero, setNumero] = useState(0);
  const sumar = () => {
    setNumero(numero + 1);
  };

  const [bgColor, setBgColor] = useState("red");
  const toggleColor = () => {
    if (bgColor === "red") setBgColor("blue");
    if (bgColor === "blue") setBgColor("red");
  };

  return (
    <main>
      <Section name="first" />
      <Section name="second" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Gallery
          title="TechnicalViper"
          image="https://media.babolat.com/image/upload/v1617537261/Product_Media/2022/Padel_Rackets/150101-Technical_Viper-100-1-Face.png"
          color="red"
          description="Una pala en formato diamante fabricada 100% en carbono cuyo núcleo está compuesta por dos gomas EVA en forma de Sándwich siendo las dos caras externas más duras que la interna para dotarla de una mayor explosividad en los golpeos de potencia."
        />
        <Gallery
          title="AirViper"
          image="https://media.babolat.com/image/upload/v1617537261/Product_Media/2022/Padel_Rackets/150102-Air_Viper-100-1-Face.png"
          color="blue"
          description="Potencia explosiva con una manejabilidad extrema: es lo que necesitas para ser un atacante aéreo. Con la Air Viper, podrás ser el que aprovecha cada oportunidad para subir a la red, el que utiliza su velocidad para generar potencia. Además, su diseño exclusivo hace cada pala única. Sé un AIR STRIKER. Usa tu rapidez para superar a tus adversarios. Elegida mejor pala 2021 en los premios World Padel Awards de la revista Padel Spain.

"
        />
        <Gallery
          title="CounterViper"
          image="https://media.babolat.com/image/upload/v1617537263/Product_Media/2022/Padel_Rackets/150103-Counter_Viper-100-1-Face.png"
          color="yellow"
          description="Núcleo fabricado a modo de sándwich, con tres capas EVA diferentes adaptadas a cada pala. Una mayor explosividad en golpes potentes gracias a las dos capas exteriores más rígidas mientras que la capa interior más blanda proporciona más tolerancia y confort en golpes más lentos."
        />
      </div>

      {/* ESTADOS - cambia el valor en cada click segun la función de arriba */}
      <div className="App" onClick={sumar}>
        {numero}
      </div>

      <div
        className="App"
        onClick={toggleColor}
        style={{ backgroundColor: bgColor }}
      >
        <p>Pepeeeee</p>
      </div>
    </main>
  );
};

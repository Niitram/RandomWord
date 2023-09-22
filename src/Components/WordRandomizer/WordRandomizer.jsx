import { useState } from "react";
import "./WordRandomizer.css";

const WordRandomizer = () => {
  const data = [
    {
      word: "Mentalismo",
      image: "algo.jpg",
      phrase:
        "Corriente de la psicología que tiene por objeto el estudio de los diferentes estados de la conciencia a través de la introspección.",
    },
    {
      word: "Momentum",
      image: "algo.jpg",
      phrase:
        "Fuerza o impulso que se adquiere tras un esfuerzo continuo o una serie de hechos y circunstancias favorables.",
    },
    {
      word: "Sincronicidad",
      image: "algo.jpg",
      phrase:
        "Sincronicidad (sin-, del griego συν-, unión, y χρόνος, tiempo) es el término elegido por Carl Gustav Jung para aludir a «la simultaneidad de dos sucesos vinculados por el sentido pero de manera acausal». «Así pues, emplearé el concepto general de sincronicidad en el sentido especial de una coincidencia temporal de dos o más sucesos relacionados entre sí de una manera no causal, cuyo contenido significativo sea igual o similar». Para evitarse malentendidos «lo diferenciaré del término sincronismo, que constituye la mera simultaneidad de dos sucesos»",
    },
  ];

  const [randomWord, setRandomWord] = useState(null);

  const handleRandomize = () => {
    let lastWord = "";
    if (randomWord && randomWord.word) {
      lastWord = randomWord.word;
    }
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomWordData = data[randomIndex];

    console.log(randomWordData);
    if (lastWord === randomWordData.word) {
      handleRandomize();
    } else {
      setRandomWord(randomWordData);
    }
  };
  const chooseWord = "Elige tu palabra";

  return (
    <div className="container">
      <div>
        <h2 className="randomWord">
          {randomWord ? randomWord.word : chooseWord}
        </h2>
        {/* {randomWord && randomWord.image && (
          <img src={randomWord.image} alt={randomWord.word} />
        )} */}
        {randomWord && randomWord.phrase && <p>{randomWord.phrase}</p>}
      </div>
      <button className="btnRandom" onClick={handleRandomize}>
        Generar Palabra
      </button>
    </div>
  );
};

export default WordRandomizer;

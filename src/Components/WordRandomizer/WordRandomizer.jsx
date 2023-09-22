import { useState } from "react";
import "./WordRandomizer.css";

const WordRandomizer = () => {
  const data = [
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
    {
      word: "El Kybalion",
      image: "algo.jpg",
      phrase:
        "El Kybalion es un libro que resume los principios herméticos, incluyendo la idea de que como es arriba, es abajo y otros principios fundamentales de la filosofía hermética.",
    },
    {
      word: "Las 7 Leyes Espirituales",
      image: "algo.jpg",
      phrase:
        " Estas leyes se refieren a los principios espirituales que gobiernan la vida y la conciencia, y fueron popularizadas por Deepak Chopra en su libro Las Siete Leyes Espirituales del Éxito.",
    },
    {
      word: "Las 7 Leyes de las Personas Altamente Efectivas",
      image: "algo.jpg",
      phrase:
        " Estas leyes provienen del libro de Stephen Covey, Los 7 Hábitos de las Personas Altamente Efectivas, que abordan principios para el liderazgo personal y profesional.",
    },
    {
      word: "Intuición",
      image: "algo.jpg",
      phrase:
        "  La intuición es la capacidad de comprender o percibir algo sin necesidad de razonamiento lógico, a menudo asociada con la toma de decisiones basada en la corazonada.",
    },
    {
      word: "Intuición",
      image: "algo.jpg",
      phrase:
        "  La intuición es la capacidad de comprender o percibir algo sin necesidad de razonamiento lógico, a menudo asociada con la toma de decisiones basada en la corazonada.",
    },
    {
      word: "Ley de la Proactividad",
      image: "algo.jpg",
      phrase:
        "  Esta ley enfatiza la importancia de tomar control sobre tu propia vida y acciones. Las personas proactivas reconocen que son responsables de sus propias elecciones y comportamientos.",
    },
    {
      word: "Ley de Fin en Mente",
      image: "algo.jpg",
      phrase:
        "   Se refiere a la importancia de tener un propósito y objetivos claros en la vida. Define tu visión y luego trabaja hacia ella de manera constante.",
    },
    {
      word: "Ley de Fin en Mente",
      image: "algo.jpg",
      phrase:
        "    Sugiere que debes enfocarte en las tareas y actividades que son verdaderamente importantes y contribuyen a tus objetivos a largo plazo, en lugar de simplemente ocuparte de lo urgente.",
    },
    {
      word: "Ley de Ganar-Ganar",
      image: "algo.jpg",
      phrase:
        "   Esta ley promueve la idea de buscar soluciones y acuerdos en las que todas las partes involucradas se beneficien mutuamente. Busca relaciones y soluciones en las que todos ganen",
    },
    {
      word: "Ley de la Búsqueda de Entender Antes de Ser Entendido",
      image: "algo.jpg",
      phrase:
        "   Implica la importancia de escuchar activamente a los demás antes de intentar expresar tus propios puntos de vista. Comprender a los demás construye relaciones más sólidas.",
    },
    {
      word: "Ley de la Sinergia",
      image: "algo.jpg",
      phrase:
        "   Se trata de trabajar en colaboración y aprovechar las fortalezas de cada individuo para lograr resultados superiores a los que podrían lograrse individualmente.",
    },
    {
      word: "Ley de la Renovación Equilibrada",
      image: "algo.jpg",
      phrase:
        "   Promueve el equilibrio y el cuidado de todos los aspectos de tu vida, incluyendo físico, mental, emocional y espiritual, para mantener una efectividad sostenible.",
    },
    {
      word: "Ley de la Potencialidad Pura",
      image: "algo.jpg",
      phrase:
        "   Esta ley habla de la infinita posibilidad que reside en cada uno de nosotros y cómo podemos acceder a nuestro potencial a través de la meditación y la conexión con la conciencia universal.",
    },
    {
      word: "Ley del Dar",
      image: "algo.jpg",
      phrase:
        "   Se enfoca en la importancia de dar con amor y generosidad, reconociendo que el acto de dar crea abundancia en tu vida.",
    },
    {
      word: "Ley del Karma o Causa y Efecto",
      image: "algo.jpg",
      phrase:
        "   Esta ley sostiene que cada acción tiene una reacción, y nuestras acciones pasadas y presentes afectan nuestro futuro. Siempre cosecharás lo que siembras",
    },
    {
      word: "Ley de la Mínima Resistencia",
      image: "algo.jpg",
      phrase:
        "   Esta ley sugiere que fluyendo con la vida, en lugar de resistirse a ella, puedes lograr tus objetivos de manera más eficiente y sin esfuerzo.",
    },
    {
      word: "Ley de la Intención y el Deseo",
      image: "algo.jpg",
      phrase:
        "   Habla de la importancia de establecer intenciones claras y alinear tus deseos con la ley del universo para manifestar lo que deseas.",
    },
    {
      word: "Ley del Desapego",
      image: "algo.jpg",
      phrase:
        "   Implica liberar la necesidad de aferrarse a las cosas materiales y confiar en el universo para proveer lo que necesitas.",
    },
    {
      word: "Ley del Dharma o Propósito en la Vida",
      image: "algo.jpg",
      phrase:
        "  Se centra en descubrir y vivir de acuerdo con tu propósito o misión en la vida, lo que lleva a una sensación de plenitud y realización.",
    },
    {
      word: "Principio del Mentalismo",
      image: "imagen1.jpg",
      phrase:
        "Todo es mente; el universo es mental. Este principio sugiere que todo en el universo es una manifestación de la mente.",
    },
    {
      word: "Principio de la Correspondencia",
      image: "imagen2.jpg",
      phrase:
        "Como es arriba, es abajo; como es abajo, es arriba. Este principio implica que hay una correspondencia entre los planos físicos y mentales del universo.",
    },
    {
      word: "Principio de la Vibración",
      image: "imagen3.jpg",
      phrase:
        "Nada está inmóvil; todo se mueve; todo vibra. Este principio se refiere a que todo está en constante movimiento y vibración.",
    },
    {
      word: "Principio de la Polaridad",
      image: "imagen4.jpg",
      phrase:
        "Todo es dual; todo tiene polos; todo tiene su par de opuestos. Este principio sugiere que todo tiene un opuesto y que los opuestos son dos aspectos de la misma cosa.",
    },
    {
      word: "Principio del Ritmo",
      image: "imagen5.jpg",
      phrase:
        "Todo fluye y refluye; todo tiene sus períodos de avance y retroceso, todo asciende y desciende. Este principio se relaciona con los ciclos y ritmos en el universo.",
    },
    {
      word: "Principio de la Causa y Efecto",
      image: "imagen6.jpg",
      phrase:
        "Toda causa tiene su efecto; todo efecto tiene su causa. Este principio enfatiza la relación de causa y efecto en todo lo que sucede.",
    },
    {
      word: "Principio de Generación",
      image: "imagen7.jpg",
      phrase:
        "La generación existe en todo; todo tiene su principio masculino y femenino. Este principio se refiere a la dualidad presente en la creación y la regeneración continua en el universo.",
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

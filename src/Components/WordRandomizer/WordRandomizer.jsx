import { useState } from "react";
import "./WordRandomizer.css";

const WordRandomizer = () => {
  const data = [
    {
  "word": "Momentum",
  "image": "algo.jpg",
  "phrase": "Fuerza o impulso que se adquiere tras un esfuerzo continuo o una serie de hechos y circunstancias favorables.",
},
{
  "word": "Sincronicidad",
  "image": "algo.jpg",
  "phrase": "Sincronicidad (sin-, del griego συν-, unión, y χρόνος, tiempo) es el término elegido por Carl Gustav Jung para aludir a «la simultaneidad de dos sucesos vinculados por el sentido pero de manera acausal». «Así pues, emplearé el concepto general de sincronicidad en el sentido especial de una coincidencia temporal de dos o más sucesos relacionados entre sí de una manera no causal, cuyo contenido significativo sea igual o similar». Para evitarse malentendidos «lo diferenciaré del término sincronismo, que constituye la mera simultaneidad de dos sucesos»",
},
{
  "word": "El Kybalion",
  "image": "algo.jpg",
  "phrase": "El Kybalion es un libro que resume los principios herméticos, incluyendo la idea de que como es arriba, es abajo y otros principios fundamentales de la filosofía hermética.",
},
{
  "word": "Las 7 Leyes Espirituales",
  "image": "algo.jpg",
  "phrase": "Estas leyes se refieren a los principios espirituales que gobiernan la vida y la conciencia, y fueron popularizadas por Deepak Chopra en su libro Las Siete Leyes Espirituales del Éxito.",
},
{
  "word": "Las 7 Leyes de las Personas Altamente Efectivas",
  "image": "algo.jpg",
  "phrase": "Estas leyes provienen del libro de Stephen Covey, Los 7 Hábitos de las Personas Altamente Efectivas, que abordan principios para el liderazgo personal y profesional.",
},
{
  "word": "Intuición",
  "image": "algo.jpg",
  "phrase": "La intuición es la capacidad de comprender o percibir algo sin necesidad de razonamiento lógico, a menudo asociada con la toma de decisiones basada en la corazonada.",
},
{
  "word": "Intuición",
  "image": "algo.jpg",
  "phrase": "La intuición es la capacidad de comprender o percibir algo sin necesidad de razonamiento lógico, a menudo asociada con la toma de decisiones basada en la corazonada.",
},
{
  "word": "Ley de la Proactividad",
  "image": "algo.jpg",
  "phrase": "Esta ley enfatiza la importancia de tomar control sobre tu propia vida y acciones. Las personas proactivas reconocen que son responsables de sus propias elecciones y comportamientos.",
},
{
  "word": "Ley de Fin en Mente",
  "image": "algo.jpg",
  "phrase": "Se refiere a la importancia de tener un propósito y objetivos claros en la vida. Define tu visión y luego trabaja hacia ella de manera constante.",
},
{
  "word": "Ley de Fin en Mente",
  "image": "algo.jpg",
  "phrase": "Sugiere que debes enfocarte en las tareas y actividades que son verdaderamente importantes y contribuyen a tus objetivos a largo plazo, en lugar de simplemente ocuparte de lo urgente.",
},
{
  "word": "Ley de Ganar-Ganar",
  "image": "algo.jpg",
  "phrase": "Esta ley promueve la idea de buscar soluciones y acuerdos en las que todas las partes involucradas se beneficien mutuamente. Busca relaciones y soluciones en las que todos ganen",
},
{
  "word": "Ley de la Búsqueda de Entender Antes de Ser Entendido",
  "image": "algo.jpg",
  "phrase": "Implica la importancia de escuchar activamente a los demás antes de intentar expresar tus propios puntos de vista. Comprender a los demás construye relaciones más sólidas.",
},
{
  "word": "Ley de la Sinergia",
  "image": "algo.jpg",
  "phrase": "Se trata de trabajar en colaboración y aprovechar las fortalezas de cada individuo para lograr resultados superiores a los que podrían lograrse individualmente.",
},
{
  "word": "Ley de la Renovación Equilibrada",
  "image": "algo.jpg",
  "phrase": "Promueve el equilibrio y el cuidado de todos los aspectos de tu vida, incluyendo físico, mental, emocional y espiritual, para mantener una efectividad sostenible.",
},
{
  "word": "Ley de la Potencialidad Pura",
  "image": "algo.jpg",
  "phrase": "Esta ley habla de la infinita posibilidad que reside en cada uno de nosotros y cómo podemos acceder a nuestro potencial a través de la meditación y la conexión con la conciencia universal.",
},
{
  "word": "Ley del Dar",
  "image": "algo.jpg",
  "phrase": "Se enfoca en la importancia de dar con amor y generosidad, reconociendo que el acto de dar crea abundancia en tu vida.",
},
{
  "word": "Ley del Karma o Causa y Efecto",
  "image": "algo.jpg",
  "phrase": "Esta ley sostiene que cada acción tiene una reacción, y nuestras acciones pasadas y presentes afectan nuestro futuro. Siempre cosecharás lo que siembras",
},
{
  "word": "Ley de la Mínima Resistencia",
  "image": "algo.jpg",
  "phrase": "Esta ley sugiere que fluyendo con la vida, en lugar de resistirse a ella, puedes lograr tus objetivos de manera más eficiente y sin esfuerzo.",
},
{
  "word": "Ley de la Intención y el Deseo",
  "image": "algo.jpg",
  "phrase": "Habla de la importancia de establecer intenciones claras y alinear tus deseos con la ley del universo para manifestar lo que deseas.",
},
{
  "word": "Ley del Desapego",
  "image": "algo.jpg",
  "phrase": "Implica liberar la necesidad de aferrarse a las cosas materiales y confiar en el universo para proveer lo que necesitas.",
},
{
  "word": "Ley del Dharma o Propósito en la Vida",
  "image": "algo.jpg",
  "phrase": "Se centra en descubrir y vivir de acuerdo con tu propósito o misión en la vida, lo que lleva a una sensación de plenitud y realización.",
},
{
  "word": "Principio del Mentalismo",
  "image": "imagen1.jpg",
  "phrase": "Todo es mente; el universo es mental. Este principio sugiere que todo en el universo es una manifestación de la mente.",
},
{
  "word": "Principio de la Correspondencia",
  "image": "imagen2.jpg",
  "phrase": "Como es arriba, es abajo; como es abajo, es arriba. Este principio implica que hay una correspondencia entre los planos físicos y mentales del universo.",
},
{
  "word": "Principio de la Vibración",
  "image": "imagen3.jpg",
  "phrase": "Nada está inmóvil; todo se mueve; todo vibra. Este principio se refiere a que todo está en constante movimiento y vibración.",
},
{
  "word": "Principio de la Polaridad",
  "image": "imagen4.jpg",
  "phrase": "Todo es dual; todo tiene polos; todo tiene su par de opuestos. Este principio sugiere que todo tiene un opuesto y que los opuestos son dos aspectos de la misma cosa.",
},
{
  "word": "Principio del Ritmo",
  "image": "imagen5.jpg",
  "phrase": "Todo fluye y refluye; todo tiene sus períodos de avance y retroceso, todo asciende y desciende. Este principio se relaciona con los ciclos y ritmos en el universo.",
},
{
  "word": "Principio de la Causa y Efecto",
  "image": "imagen6.jpg",
  "phrase": "Toda causa tiene su efecto; todo efecto tiene su causa. Este principio enfatiza la relación de causa y efecto en todo lo que sucede.",
},
{
  "word": "Principio de Generación",
  "image": "imagen7.jpg",
  "phrase": "La generación existe en todo; todo tiene su principio masculino y femenino. Este principio se refiere a la dualidad presente en la creación y la regeneración continua en el universo.",
},
  {
    "word": "11 pasos de la magia: Paso 1: La Preparación",
    "image": "algo.jpg",
    "phrase": "En el primer paso, La Preparación, se trata de crear un ambiente propicio. Preparar el espacio y la mente es esencial para la práctica mágica, estableciendo las bases sólidas para el trabajo por venir."
  },
  {
    "word": "11 pasos de la magia: Paso 2: La Purificación",
    "image": "algo.jpg",
    "phrase": "En el segundo paso, La Purificación, el objetivo es limpiar y purificar tanto el entorno como el cuerpo. Esto elimina las energías negativas y asegura que el canal esté limpio y listo para la magia."
  },
  {
    "word": "11 pasos de la magia: Paso 3: La Invocación",
    "image": "algo.jpg",
    "phrase": "El tercer paso, La Invocación, implica conectar con las energías o seres con los que se desea trabajar. Es un acto de llamado a estas fuerzas para que participen en el ritual mágico."
  },
  {
    "word": "11 pasos de la magia: Paso 4: La Visualización",
    "image": "algo.jpg",
    "phrase": "En el cuarto paso, La Visualización, se busca crear una imagen mental clara y vívida del objetivo deseado. Esto ayuda a concentrar la energía en la manifestación de ese objetivo."
  },
  {
    "word": "11 pasos de la magia: Paso 5: La Concentración",
    "image": "algo.jpg",
    "phrase": "El quinto paso, La Concentración, implica mantener la atención enfocada exclusivamente en el objetivo. Esto evita distracciones y potencia la magia."
  },
  {
    "word": "11 pasos de la magia: Paso 6: La Canalización",
    "image": "algo.jpg",
    "phrase": "El sexto paso, La Canalización, es el proceso de dirigir y canalizar la energía hacia el objetivo. Se trata de enfocar la intención y la energía en el resultado deseado."
  },
  {
    "word": "11 pasos de la magia: Paso 7: La Manifestación",
    "image": "algo.jpg",
    "phrase": "En el séptimo paso, La Manifestación, se permite que el resultado deseado se manifieste en la realidad. Es el punto culminante de la magia."
  },
  {
    "word": "11 pasos de la magia: Paso 8: La Celebración",
    "image": "algo.jpg",
    "phrase": "El octavo paso, La Celebración, implica celebrar el éxito de la magia realizada. Es un acto de gratitud y alegría por la manifestación de los deseos."
  },
  {
    "word": "11 pasos de la magia: Paso 9: La Agradecimiento",
    "image": "algo.jpg",
    "phrase": "El noveno paso, La Agradecimiento, consiste en mostrar gratitud a las fuerzas o seres invocados. Es un acto de respeto y reconocimiento por su ayuda."
  },
  {
    "word": "11 pasos de la magia: Paso 10: La Despedida",
    "image": "algo.jpg",
    "phrase": "En el décimo paso, La Despedida, se cierra el contacto con las energías invocadas y se finaliza el ritual. Es importante hacerlo de manera adecuada para mantener el equilibrio."
  },
  {
    "word": "11 pasos de la magia: Paso 11: La Reflexión",
    "image": "algo.jpg",
    "phrase": "El último paso, La Reflexión, implica mirar hacia atrás en la experiencia y aprender de ella. Es una oportunidad para evaluar el trabajo mágico y crecer como practicante."
  },
    {
    "word": "Los 4 Acuerdos: Acuerdo 1 - Sé impecable con tus palabras",
    "image": "algo.jpg",
    "phrase": "El primer acuerdo, 'Sé impecable con tus palabras', se trata de la importancia de usar el lenguaje de manera honesta y positiva. Evitar la mentira y el chisme, y usar las palabras para crear amor y armonía."
  },
  {
    "word": "Los 4 Acuerdos: Acuerdo 2 - No te tomes nada personalmente",
    "image": "algo.jpg",
    "phrase": "En el segundo acuerdo, 'No te tomes nada personalmente', se enfatiza que lo que los demás dicen o hacen no es un reflejo de ti. Libérate de la necesidad de buscar aprobación externa y mantén tu paz interior."
  },
  {
    "word": "Los 4 Acuerdos: Acuerdo 3 - No hagas suposiciones",
    "image": "algo.jpg",
    "phrase": "El tercer acuerdo, 'No hagas suposiciones', nos insta a comunicarnos de manera clara y abierta. Evita asumir lo que otros piensan o sienten y busca la verdad a través del diálogo y la comprensión."
  },
  {
    "word": "Los 4 Acuerdos: Acuerdo 4 - Haz siempre lo máximo que puedas",
    "image": "algo.jpg",
    "phrase": "En el cuarto acuerdo, 'Haz siempre lo máximo que puedas', se nos recuerda que debemos esforzarnos al máximo en todo lo que hacemos. No importa el resultado, lo importante es el esfuerzo y la dedicación que ponemos en cada acción."
  },
    {
    "word": "Autodisciplina",
    "image": "algo.jpg",
    "phrase": "La autodisciplina es la capacidad de controlar y dirigir tus acciones y comportamientos hacia metas y objetivos específicos, incluso cuando enfrentas distracciones o tentaciones."
  },
  {
    "word": "Ikigai",
    "image": "algo.jpg",
    "phrase": "El ikigai es un concepto japonés que se refiere a la razón de ser, la pasión o el propósito en la vida de una persona. Es la intersección de lo que amas, lo que eres bueno haciendo, lo que el mundo necesita y lo que puedes ser remunerado por hacer."
  },
    {
    "word": "Las 7 Leyes del Bushido, Ley de Gi (Rectitud)",
    "image": "bushido_gi.jpg",
    "phrase": "La Ley de Gi, o Rectitud, exige que un samurái actúe con honestidad y justicia en todas las situaciones. Esto implica hacer lo correcto, incluso cuando es difícil o desafiante."
  },
  {
    "word": "Las 7 Leyes del Bushido, Ley de Yu (Valor)",
    "image": "bushido_yu.jpg",
    "phrase": "La Ley de Yu, o Valor, requiere que un samurái muestre valentía y determinación en todo momento. Deben enfrentar el peligro y las adversidades con coraje."
  },
  {
    "word": "Las 7 Leyes del Bushido, Ley de Jin (Compasión)",
    "image": "bushido_jin.jpg",
    "phrase": "La Ley de Jin, o Compasión, implica mostrar compasión y empatía hacia los demás. Los samuráis deben cuidar y ayudar a los necesitados."
  },
  {
    "word": "Las 7 Leyes del Bushido, Ley de Rei (Cortesía)",
    "image": "bushido_rei.jpg",
    "phrase": "La Ley de Rei, o Cortesía, exige que los samuráis sean respetuosos y corteses en todas sus interacciones. Deben mostrar respeto hacia los demás."
  },
  {
    "word": "Las 7 Leyes del Bushido, Ley de Makoto (Sinceridad)",
    "image": "bushido_makoto.jpg",
    "phrase": "La Ley de Makoto, o Sinceridad, significa decir siempre la verdad y ser sincero en todas las palabras y acciones."
  },
  {
    "word": "Las 7 Leyes del Bushido, Ley de Meiyo (Honor)",
    "image": "bushido_meiyo.jpg",
    "phrase": "La Ley de Meiyo, o Honor, implica mantener la integridad y el honor en todas las acciones. Los samuráis deben actuar con honor en todo momento."
  },
  {
    "word": "Las 7 Leyes del Bushido, Ley de Chugi (Lealtad)",
    "image": "bushido_chugi.jpg",
    "phrase": "La Ley de Chugi, o Lealtad, requiere que los samuráis sean leales y fieles a sus principios y a quienes sirven. Deben mantener la lealtad en todas las circunstancias."
  },
    {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de Control",
    "image": "control.jpg",
    "phrase": "La Ley de Control nos enseña que tenemos el poder de controlar nuestras acciones y reacciones. Podemos elegir cómo respondemos a las circunstancias."
  },
  {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de Causa y Efecto",
    "image": "causa_efecto.jpg",
    "phrase": "La Ley de Causa y Efecto establece que cada acción tiene una consecuencia. Lo que sembramos en nuestras vidas es lo que cosechamos."
  },
  {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de la Creencia",
    "image": "creencia.jpg",
    "phrase": "La Ley de la Creencia sostiene que nuestras creencias y pensamientos influyen en nuestra realidad. Creer en algo con convicción puede manifestarse en nuestra vida."
  },
  {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de las Expectativas",
    "image": "expectativas.jpg",
    "phrase": "La Ley de las Expectativas nos recuerda que lo que esperamos a menudo se cumple. Nuestras expectativas pueden dar forma a nuestras experiencias."
  },
  {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de la Atracción",
    "image": "atraccion.jpg",
    "phrase": "La Ley de la Atracción postula que atraemos a nuestras vidas lo que pensamos y sentimos. Nuestras energías atraen experiencias y personas similares."
  },
  {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de Correspondencia",
    "image": "correspondencia.jpg",
    "phrase": "La Ley de Correspondencia sugiere que lo que está arriba se refleja abajo, y viceversa. Hay un patrón y equilibrio en el universo."
  },
  {
    "word": "Las 7 Leyes del Universo Seminario Fenix, Ley de Equivalencia Mental",
    "image": "equivalencia_mental.jpg",
    "phrase": "La Ley de Equivalencia Mental explica que nuestras acciones deben estar en armonía con nuestros pensamientos y deseos. Debemos alinear nuestra mente con nuestras metas."
  },
    {
  "word": "Logosofía",
  "image": "logosofia.jpg",
  "phrase": "La Logosofía es una disciplina filosófica y espiritual que se centra en el conocimiento de uno mismo y en el desarrollo de la conciencia. Busca el entendimiento de las leyes universales y propone una forma de vivir más consciente y en armonía con el mundo que nos rodea. La Logosofía ofrece herramientas y técnicas para el crecimiento interior, la autorreflexión y el autodescubrimiento."
},
    {
  "word": "Amor a uno mismo",
  "image": "amor_uno_mismo.png",
  "phrase": "El amor a uno mismo es la base para una vida plena. Implica cuidar de nuestras necesidades emocionales, físicas y espirituales, reconociendo nuestro valor y cultivando una relación positiva con nosotros mismos.",
},
{
  "word": "Respeto al prójimo",
  "image": "respeto_projimo.png",
  "phrase": "El respeto al prójimo es fundamental para una convivencia armoniosa. Significa reconocer la dignidad y los derechos de los demás, tratando a cada individuo con consideración y empatía.",
},
{
  "word": "Equilibrio Interior",
  "image": "equilibrio_interior.png",
  "phrase": "El equilibrio interior es la armonía entre cuerpo, mente y espíritu. Buscar este equilibrio nos permite enfrentar los desafíos de la vida con calma y claridad, manteniendo nuestra paz interna.",
},
{
  "word": "Fluidez",
  "image": "fluidez.png",
  "phrase": "La fluidez es la capacidad de adaptarse y fluir con los cambios de la vida. Nos permite estar abiertos a nuevas experiencias y situaciones, sin resistencia ni rigidez.",
},
{
  "word": "Conexión Universal",
  "image": "conexion_universal.png",
  "phrase": "La conexión universal es la comprensión de que todo en el universo está interconectado. Nos recuerda que nuestras acciones y pensamientos tienen un impacto en el mundo que nos rodea.",
},
{
  "word": "Serenidad",
  "image": "serenidad.png",
  "phrase": "La serenidad es la calma interior que nos permite enfrentar el caos externo. Nos ayuda a mantener la paz mental y emocional, incluso en momentos de turbulencia.",
},
{
  "word": "Claridad Mental",
  "image": "claridad_mental.png",
  "phrase": "La claridad mental es la capacidad de pensar con enfoque y precisión. Nos permite tomar decisiones informadas y ver con claridad el camino hacia nuestros objetivos.",
},
{
  "word": "Resiliencia",
  "image": "resiliencia.png",
  "phrase": "La resiliencia es la capacidad de recuperarse de las adversidades. Nos permite superar los obstáculos y crecer a partir de las experiencias difíciles, saliendo más fuertes y sabios.",
},
{
  "word": "Autenticidad",
  "image": "autenticidad.png",
  "phrase": "La autenticidad es ser fiel a uno mismo y a nuestros valores. Nos anima a expresarnos genuinamente, sin miedo al juicio externo, creando conexiones más profundas y significativas.",
},
{
  "word": "Empatía",
  "image": "empatia.png",
  "phrase": "La empatía es la capacidad de ponerse en el lugar del otro y comprender sus sentimientos. Nos permite construir relaciones sólidas y contribuir a un mundo más compasivo y comprensivo.",
},
{
  "word": "Gratitud",
  "image": "gratitud.png",
  "phrase": "La gratitud es reconocer y apreciar las bendiciones de la vida. Nos ayuda a enfocarnos en lo positivo, cultivando una actitud de alegría y generosidad.",
},
{
  "word": "Equidad",
  "image": "equidad.png",
  "phrase": "La equidad es la justicia y la imparcialidad en nuestras interacciones. Nos impulsa a tratar a todos con igualdad de oportunidades y derechos, promoviendo la inclusión y la diversidad.",
},
{
  "word": "Abundancia",
  "image": "abundancia.png",
  "phrase": "La abundancia es la creencia en la suficiencia y la prosperidad. Nos permite ver el mundo como un lugar lleno de oportunidades y posibilidades, cultivando una mentalidad de plenitud y generosidad.",
},
{
  "word": "Armonía",
  "image": "armonia.png",
  "phrase": "La armonía es el equilibrio y la coexistencia pacífica. Nos inspira a buscar la paz tanto dentro de nosotros mismos como en nuestras relaciones con los demás y el mundo que nos rodea.",
},
{
  "word": "Conciencia Plena",
  "image": "conciencia_plena.png",
  "phrase": "La conciencia plena es estar presente en el momento presente con atención y aceptación. Nos ayuda a reducir el estrés, mejorar la concentración y experimentar la vida con mayor claridad y serenidad.",
},
{
  "word": "Mejora Continua",
  "image": "mejora_continua.png",
  "phrase": "Implica asumir que siempre hay espacio para crecer y mejorar, perfeccionando cada aspecto de ti mismo. Ya sea en tus habilidades profesionales o en tus relaciones personales, busca ser una mejor versión de ti cada día.",
},
{
  "word": "Conciencia en el Ahora",
  "image": "conciencia_ahora.png",
  "phrase": "En lugar de quedarte atrapado en pensamientos del pasado o preocupaciones por el futuro, practica estar plenamente presente en lo que ocurre en este momento. Esto te permite vivir de manera más consciente, apreciando cada detalle de la vida.",
},
{
  "word": "Visualización Abundante",
  "image": "visualizacion_abundante.png",
  "phrase": "Al imaginar vívidamente la abundancia que deseas, envías una señal clara al universo sobre lo que quieres atraer. Visualizar regularmente tus metas con emoción y certeza te ayuda a manifestar esa abundancia en tu vida.",
},
{
  "word": "Gratitud Diaria",
  "image": "gratitud_diaria.png",
  "phrase": "Practicar la gratitud diaria eleva tu vibración y te conecta con la energía de la abundancia. Agradecer tanto lo grande como lo pequeño te permite ver el lado positivo en cualquier circunstancia.",
},
{
  "word": "Alineación con Propósito",
  "image": "alineacion_proposito.png",
  "phrase": "Descubrir tu propósito significa conectar con aquello que te da sentido y motivación en la vida. Cuando vives alineado con tu propósito, tus acciones son coherentes y te mueves en la dirección correcta.",
},
{
  "word": "Ley de Atracción",
  "image": "ley_atraccion.png",
  "phrase": "Reconocer que tus pensamientos y emociones crean tu realidad te permite ser más consciente de lo que eliges atraer. Al mantener una mentalidad positiva y emociones elevadas, puedes manifestar experiencias más deseables.",
},
{
  "word": "Autoconocimiento",
  "image": "autoconocimiento.png",
  "phrase": "Conocerte a ti mismo es clave para tu crecimiento personal. Al identificar tus fortalezas y debilidades, puedes trabajar en ellas conscientemente y tomar decisiones más alineadas con tu verdadero ser.",
},
{
  "word": "Responsabilidad Personal",
  "image": "responsabilidad_personal.png",
  "phrase": "Tomar responsabilidad total por tu vida implica aceptar que eres el creador de tus experiencias. Esto te empodera para cambiar lo que no te gusta y mejorar continuamente tu realidad.",
},
{
  "word": "Mente Abierta",
  "image": "mente_abierta.png",
  "phrase": "Mantener una mentalidad abierta te permite aprender de cada experiencia y persona que encuentres. Estar dispuesto a cambiar tus creencias y aceptar nuevas ideas fomenta un crecimiento más rápido y profundo.",
},
{
  "word": "Visualización Creativa",
  "image": "visualizacion_creativa.png",
  "phrase": "Al usar la imaginación para crear escenarios ideales en tu mente, comienzas a sentir y vibrar con esos deseos, lo que facilita su manifestación. Es una herramienta poderosa para diseñar la vida que deseas.",
},
{
  "word": "Compasión y Amor Propio",
  "image": "compasion_amor_propio.png",
  "phrase": "Tratarte con amabilidad y aceptación te permite sanar, crecer y enfrentar la vida con más confianza. El amor propio es la base para construir relaciones saludables y alcanzar tus metas.",
},
{
  "word": "Vibración Elevada",
  "image": "vibracion_elevada.png",
  "phrase": "Mantener una vibración alta significa enfocarte en emociones positivas como el amor, la alegría y la gratitud. Estas emociones elevadas te alinean con experiencias y personas que vibran en la misma frecuencia.",
},
{
  "word": "Ley del Espejo",
  "image": "ley_espejo.png",
  "phrase": "Las personas y situaciones en tu vida reflejan tu estado interior. Al observar tus interacciones, puedes identificar aspectos de ti mismo que necesitan sanación o ajuste para mejorar tu entorno.",
},
{
  "word": "Desapego",
  "image": "desapego.png",
  "phrase": "Soltar lo que ya no sirve en tu vida, ya sea una idea, una relación o una situación, te permite hacer espacio para lo nuevo. Al confiar en el proceso, te abres a recibir lo que es verdaderamente adecuado para ti.",
},
{
  "word": "Intención Clara",
  "image": "intencion_clara.png",
  "phrase": "Definir metas claras y trabajar en ellas con determinación te ayuda a canalizar tu energía de manera eficiente. El universo responde a las intenciones claras y te brinda oportunidades para alcanzar lo que deseas.",
},
{
  "word": "Meditación Consciente",
  "image": "meditacion_consciente.png",
  "phrase": "La meditación es una herramienta poderosa para calmar la mente y conectarte con tu ser interior. Al practicarla regularmente, desarrollas una mayor claridad mental y emocional, lo que facilita la toma de decisiones alineadas.",
},
{
  "word": "Sincronicidades",
  "image": "sincronicidades.png",
  "phrase": "Prestar atención a las coincidencias significativas en tu vida te permite reconocer el flujo natural del universo. Estas señales te guían hacia oportunidades y personas clave en tu camino de crecimiento.",
},
{
  "word": "Autodisciplina",
  "image": "autodisciplina.png",
  "phrase": "La autodisciplina es la capacidad de mantenerte comprometido con tus metas, incluso cuando la motivación fluctúa. Esta consistencia te lleva más cerca de tus sueños y fortalece tu carácter.",
},
{
  "word": "Empatía y Conexión",
  "image": "empatia_conexion.png",
  "phrase": "Desarrollar una conexión auténtica con los demás a través de la empatía fomenta relaciones más profundas y enriquecedoras. Al comprender a los demás, también te entiendes mejor a ti mismo.",
},
{
  "word": "Confianza en el Proceso",
  "image": "confianza_proceso.png",
  "phrase": "Confiar en que cada experiencia, sea positiva o negativa, tiene un propósito en tu evolución te permite fluir mejor con la vida. Esto reduce la ansiedad y te ayuda a mantener una actitud positiva.",
},
{
  "word": "Servicio Desinteresado",
  "image": "servicio_desinteresado.png",
  "phrase": "Actuar desde el servicio desinteresado te conecta con los demás y te recuerda que somos parte de un todo. Al dar sin esperar nada a cambio, creas un flujo natural de retorno positivo en tu vida.",
},
{
  "word": "Sincronicidad y Propósito",
  "image": "sincronicidad_proposito.png",
  "phrase": "Las coincidencias significativas no son simples casualidades; son mensajes del universo que te guían hacia tu propósito. Estar atento a estas sincronicidades te ayuda a reconocer oportunidades valiosas y a confiar en que estás en el camino correcto.",
},
{
  "word": "Conciencia Plena",
  "image": "conciencia_plena.png",
  "phrase": "Observar tus pensamientos y emociones sin apegarte a ellos te permite vivir con mayor claridad y paz interior. Esta práctica te ayuda a no identificarte con los juicios o las reacciones automáticas, creando espacio para responder de manera más consciente.",
},
{
  "word": "Aplicar las Leyes Universales",
  "image": "leyes_universales.png",
  "phrase": "Vivir según los principios universales como la ley de la vibración y causa-efecto te alinea con el flujo natural de la vida. Al reconocer que todo tiene una causa y una consecuencia, puedes tomar decisiones más conscientes y coherentes.",
},
{
  "word": "Presencia Total",
  "image": "presencia_total.png",
  "phrase": "Practicar la presencia total significa enfocarte completamente en el aquí y el ahora, sin distracciones de preocupaciones futuras o recuerdos pasados. Esta práctica te ayuda a experimentar la vida plenamente y a reducir el estrés.",
},
{
  "word": "Honra tus Acuerdos",
  "image": "honra_acuerdos.png",
  "phrase": "Ser impecable con tus palabras y mantener tus compromisos es fundamental para crear relaciones de confianza y autenticidad. Al actuar con responsabilidad y verdad, cultivas un entorno de respeto y coherencia.",
},
{
  "word": "Visualiza tus Sueños",
  "image": "visualiza_suenos.png",
  "phrase": "La visualización es una herramienta poderosa para manifestar lo que deseas. Al imaginar con detalle tus sueños, generas la energía y la emoción necesarias para atraer esas experiencias a tu vida.",
},
{
  "word": "Conexión Espiritual",
  "image": "conexion_espiritual.png",
  "phrase": "Conectar con lo divino a través de la meditación y la autoexploración fortalece tu sentido de propósito y paz interior. Esta conexión te ayuda a trascender el ego y a encontrar sentido en tu vida diaria.",
},
{
  "word": "Mentalidad de Abundancia",
  "image": "mentalidad_abundancia.png",
  "phrase": "Cambiar tus creencias limitantes te abre a recibir la prosperidad que el universo tiene para ti. Una mentalidad de abundancia te permite ver oportunidades en lugar de limitaciones y atraer más riqueza a tu vida.",
},
{
  "word": "Liberación de Creencias Tóxicas",
  "image": "liberacion_creencias_toxicas.png",
  "phrase": "Identificar y liberar creencias autodestructivas te permite avanzar sin las limitaciones mentales que frenan tu crecimiento. Al dejar atrás estos pensamientos tóxicos, puedes crear una mentalidad más empoderadora y positiva.",
},
{
  "word": "Simplificación",
  "image": "simplificacion.png",
  "phrase": "Simplificar tu entorno físico y mental te ayuda a enfocarte en lo esencial y a eliminar distracciones innecesarias. Un espacio más ordenado y limpio también facilita la claridad mental y emocional.",
},
{
  "word": "Busca tu Leyenda Personal",
  "image": "leyenda_personal.png",
  "phrase": "Escuchar a tu corazón y perseguir tus sueños te alinea con tu propósito más profundo. Confiar en que el universo te apoya en el camino hacia tu leyenda personal te impulsa a seguir adelante, incluso en momentos de duda.",
},
{
  "word": "Reflexiona en el Espejo",
  "image": "reflexiona_espejo.png",
  "phrase": "Las relaciones y las situaciones que vives son reflejos de tu mundo interior. Al observar lo que se te presenta, puedes identificar áreas en las que necesitas trabajar para crecer y evolucionar personalmente.",
},
{
  "word": "Despierta tu Potencial",
  "image": "despierta_potencial.png",
  "phrase": "Encontrar el héroe dentro de ti implica reconocer tu poder y actuar desde tu mejor versión, incluso en situaciones difíciles. Esto te empodera para tomar decisiones alineadas con tu verdadera esencia.",
},
{
  "word": "Intención Consciente",
  "image": "intencion_consciente.png",
  "phrase": "Establecer intenciones claras y actuar con propósito te ayuda a dirigir tu energía hacia lo que realmente importa. Al mantener el enfoque en lo que deseas, aumentas la probabilidad de manifestar tus objetivos.",
},
{
  "word": "Crea tu Propia Realidad",
  "image": "crea_realidad.png",
  "phrase": "Reconocer que eres el creador de tu realidad te otorga poder para transformar tu vida. Tus pensamientos, emociones y acciones son las herramientas con las que moldeas tu experiencia, por lo que usarlas de manera consciente te permite crear lo que deseas.",
},
{
  "word": "Negociación Empática",
  "image": "negociacion_empatica.png",
  "phrase": "La empatía es clave para una comunicación efectiva, especialmente en situaciones difíciles. Al escuchar y comprender las necesidades del otro, puedes llegar a acuerdos que beneficien a ambas partes, generando armonía y resolución.",
},
{
  "word": "Crea Riqueza con Mente Positiva",
  "image": "riqueza_mente_positiva.png",
  "phrase": "Los pensamientos positivos y las acciones coherentes son la base para atraer prosperidad y éxito financiero. Al mantener una actitud positiva hacia la riqueza, alineas tu energía con la abundancia.",
},
{
  "word": "Ser Auténtico",
  "image": "ser_autentico.png",
  "phrase": "Vivir desde la autenticidad implica aceptarte completamente tal como eres, sin necesidad de máscaras. Al ser fiel a ti mismo, creas relaciones más genuinas y te liberas del peso de las expectativas externas.",
},
{
  "word": "Desarrolla el Éxito Espiritual",
  "image": "exito_espiritual.png",
  "phrase": "Practicar leyes espirituales como la intención, el desapego y el servicio te permite alcanzar el éxito tanto material como espiritual. Al integrar estas prácticas en tu vida diaria, te alineas con un flujo de bienestar más profundo.",
},
{
  "word": "Conversación Interna Positiva",
  "image": "conversacion_interna.png",
  "phrase": "Cultivar un diálogo interno positivo te ayuda a mantener una actitud optimista y amorosa hacia ti mismo. Al reprogramar tus pensamientos con amor y sabiduría, creas una mentalidad más fuerte y resiliente.",
},
{
  "word": "Rompe el Miedo al Rechazo",
  "image": "miedo_rechazo.png",
  "phrase": "Liberarte del miedo al rechazo te permite actuar con valentía y seguir tus convicciones sin depender de la aprobación externa. Al ser fiel a ti mismo, avanzas con seguridad hacia tus metas, sin importar lo que piensen los demás.",
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

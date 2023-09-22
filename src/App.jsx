import WordRandomizer from "./Components/WordRandomizer/WordRandomizer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.tittle}>Horizon</h1>
      <WordRandomizer />
      <div className={styles.imagenFlotante} />
    </div>
  );
}

export default App;

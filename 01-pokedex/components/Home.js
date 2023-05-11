import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function Home() {
  const [dataPokedex, setDataPokedex] = useState([]);

  useEffect(() => {
    for (let i = 1; i < 152; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => setDataPokedex((prevState) => [...prevState, data]));
    }
  }, []);

  console.log(dataPokedex);

  const allPokemon = dataPokedex.map((data, i) => <Card key={i} data={data} />);

  return (
    <div className={styles.main}>
      <div className={styles.title}>Pokedex</div>
      <div className={styles.cardsArray}>{allPokemon}</div>
    </div>
  );
}

export default Home;

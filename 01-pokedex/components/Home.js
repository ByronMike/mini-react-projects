import styles from "../styles/Home.module.css";
import {useEffect, useState} from 'react';
import Card from "./Card";

function Home() {
  const [dataPokedex, setDataPokedex] = useState([]);
  useEffect( () => {
      for(const i = 1; i < 152; i++){
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then(response => response.json())
          .then(data => setDataPokedex(data))
      }
  },[])
  // const allPokemon.map(dataPokedex, i) => {
  // }

  return (
    <>
      <div className={styles.title}>Pokedex</div>
      <Card data={dataPokedex}/>
    </>
  );
}

export default Home;

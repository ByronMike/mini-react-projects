import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function Home() {
  const [dataPokedex, setDataPokedex] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const promises = [];

    for (let i = 1; i < 152; i++) {
      const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
        (response) => response.json()
      );

      promises.push(promise);
    }

    const results = await Promise.all(promises);
    setDataPokedex(results);
    setFilteredData(results); // Initialize filteredData with all Pokémon initially
  };

  const allPokemon = filteredData.map((data, i) => (
    <Card key={i} data={data} />
  ));

  // Create a function to search Pokémon by name
  const searchPokemon = (event) => {
    const search = event.target.value.toLowerCase();

    if (search === "") {
      // If the search bar is empty, display all Pokémon
      setFilteredData(dataPokedex);
    } else {
      // Filter Pokémon based on the search term
      const filteredPokemon = dataPokedex.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search);
      });
      setFilteredData(filteredPokemon);
    }
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.header}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "50px",
          top: 0,
        }}
      >
        <div className={styles.title}>Pokedex</div>
        <input className={styles.input} onChange={searchPokemon}></input>
      </div>
      <div
        className={styles.cardsList}
        style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}
      >
        <div
          className={styles.cardsArray}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "1200px",
            padding: "20px",
            gap: "20px",
            marginTop: "100px",
          }}
        >
          {allPokemon}
        </div>
      </div>
    </div>
  );
}

export default Home;

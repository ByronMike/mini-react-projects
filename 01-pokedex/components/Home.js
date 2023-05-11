import styles from '../styles/Home.module.css';
import Card from './Card';

function Home() {
  return (
    <div className={styles.title}>Pokedex</div>
    <Card/>
  );
}

export default Home;

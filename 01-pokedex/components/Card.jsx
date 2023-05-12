import style from '../styles/Cards.module.css';


function Card( {data}) {
    /* Creat different colors for different types of pokemon */
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    }
    /* Set the background color of the card based on the type of pokemon */
    const main_types = Object.keys(colors);
    const type = data.types[0].type.name;
    const color = colors[type];
    
    return (
        
        <div style={{backgroundColor: color}}  className={style.main}>
            <div className={style.title}>{data.name}</div>
            <img src={data.sprites.front_default}></img>
            <div className={style.type}>{type}</div>
            <div className={style.number}>#{data.id}</div>
        </div>
    )
}

export default Card;
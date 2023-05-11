import style from '../styles/Cards.module.css';


function Card( {data}) {
    
    return (
        <div className={style.main}>
            <div className={style.title}>{data.name}</div>
            <img src={data.sprites.front_default}></img>
        </div>
    )
}

export default Card;
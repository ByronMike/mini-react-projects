import style from '../styles/Cards.module.css';


function Card( {data}) {
    
    return (
        <div className={style.main}>{data.name}</div>
    )
}

export default Card;
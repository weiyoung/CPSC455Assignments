import '../css/Card.css'

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className="card-name">{card.name}</div>
            <img className="card-img" src={card.url} alt={card.name} />
            <div className="card-desc">{card.desc}</div>
        </div>
    )
}

export default Card

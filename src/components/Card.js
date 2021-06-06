import '../css/Card.css'
import Popup from '../components/Popup'
import { useState } from 'react'

const Card = ({ card }) => {
    const [popupOpen, setPopupOpen] = useState(false)

    return (
        <div className="card">
            <div className="card-name">{card.name}</div>
            <img className="card-img" src={card.url} alt={card.name} />
            <div className="card-desc">{card.desc}</div>

            <button onClick={() => setPopupOpen(true)} className="card-popup-btn">More</button>
            <Popup content={card} open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default Card

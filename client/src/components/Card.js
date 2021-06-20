import '../css/Card.css'
import Popup from '../components/Popup'
import { CardsContext } from '../contexts/CardsContext'
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Card = ({ card }) => {
    const { setCards } = useContext(CardsContext)
    const [popupOpen, setPopupOpen] = useState(false)

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/cards/${card.id}`).then(res => setCards(res.data))
    }

    return (
        <div className="card">
            <div className="card-name">{card.name}</div>
            <img className="card-img" src={card.url} alt={card.name} />
            <div className="card-desc">{card.desc}</div>

            <button onClick={() => setPopupOpen(true)} className="card-btn">More Info</button>
            <button onClick={handleDelete} className="card-btn-red">Delete</button>

            <Popup content={card} open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default Card

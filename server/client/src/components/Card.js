import '../css/Card.css'
import Popup from '../components/Popup'
import Star from '../components/Star'
import { CardsContext } from '../contexts/CardsContext'
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Card = ({ card }) => {
    const { updateCards } = useContext(CardsContext)
    const [popupOpen, setPopupOpen] = useState(false)

    const handleDelete = () => {
        axios.delete(`http://${window.location.hostname}:5000/cards/${card._id}`).then(updateCards)
    }

    return (
        <div className="card">
            <div className="card-name">{card.name}</div>
            <img className="card-img" src={card.url} alt={card.name} />
            <div className="card-desc">{card.desc}</div>

            <div className="card-btn-div">
                <Star {...card} className="card-star"/>
                <button onClick={() => setPopupOpen(true)} className="card-btn">More Info</button>
                <button onClick={handleDelete} className="card-btn-red">Delete</button>
            </div>

            <Popup content={card} open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default Card

import '../css/App.css'
import Form from '../components/Form'
import Card from '../components/Card'
import { CardsContext } from '../contexts/CardsContext'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [cards, setCards] = useState([])
    const updateCards = () => {
        axios.get(`http://localhost:5000/cards`).then(res => setCards(res.data))
    }

    useEffect(updateCards, [])

    const [cardsVisible, setCardsVisible]= useState(true)

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/cards`).then(updateCards)
    }

    return (
        <CardsContext.Provider value={{ cards, setCards, updateCards }}>
            <div className="container">
                <h1>Add a card to the collection!</h1>
                <Form />
            </div>
            
            <div className="container">
                <h1>Card collection</h1>
                <div className="card-buttons">
                    <button onClick={() => setCardsVisible(true)} className="button">Show All</button>
                    <button onClick={() => setCardsVisible(false)} className="button">Hide All</button>
                    <button onClick={handleDelete} className="button-red">Delete All</button>
                </div>
                <div className="card-collection">
                    { cardsVisible && cards.map((card, id) => <Card key={id} card={card} />) }
                </div>
            </div>
        </CardsContext.Provider>
    )
}

export default Home

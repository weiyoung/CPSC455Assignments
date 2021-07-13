import '../css/App.css'
import Form from '../components/Form'
import Card from '../components/Card'
import { CardsContext } from '../contexts/CardsContext'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [cards, setCards] = useState([])
    const [cardsVisible, setCardsVisible]= useState(true)
    const [showEverything, setShowEverything] = useState(true)

    const updateCards = () => {
        axios.get(`http://${window.location.hostname}:5000/cards`).then(res => setCards(res.data))
        setShowEverything(true)
    }

    useEffect(updateCards, [])

    const handleShowStarred = () => {
        if (showEverything)
            axios.get(`http://${window.location.hostname}:5000/starred`).then(res => setCards(res.data))
        else
            updateCards()

        setShowEverything(!showEverything)
    }

    const handleDelete = () => {
        axios.delete(`http://${window.location.hostname}:5000/cards`).then(updateCards)
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
                    <button onClick={handleShowStarred} className="button">{showEverything ? "Show Starred" : "Show Everything"}</button>
                    <button onClick={() => setCardsVisible(x => !x)} className="button">{cardsVisible ? "Collapse" : "Expand"}</button>
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

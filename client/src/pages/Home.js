import '../css/App.css'
import Form from "../components/Form"
import Card from '../components/Card'
import useLocalStorage from '../hooks/useLocalStorage'
import { useState } from 'react'
import useAxios from 'axios-hooks'

let cardDeck = [] // collection of cards

const Home = () => {
    const [{data, loading, error, response}, execute, manualCancel] = useAxios({
        method: 'GET',
        url: "http://localhost:5000/cards"
    })

    console.log(data)

    const [cards, setCards, clearCards] = useLocalStorage('MyCards', [
        {
            name: "(Example) Pikachu",
            url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            desc: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."
        },
        {
            name: "(Example) Charizard",
            url: "https://cdn2.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png",
            desc: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
        }
    ])

    const [cardsVisible, setCardsVisible]= useState(true)

    return (
        <>
            <div className="container">
                <h1>Add a card to the collection!</h1>
                <Form setCards={setCards} cardDeck={cardDeck}/>
            </div>
            
            <div className="container">
                <h1>Card collection</h1>
                <div className="card-buttons">
                    <button onClick={() => setCardsVisible(true)} className="button">Show All</button>
                    <button onClick={() => setCardsVisible(false)} className="button">Hide All</button>
                    <button onClick={() => {
                        clearCards()
                        cardDeck = []
                    }} className="button">Delete All</button>
                </div>
                <div className="card-collection">
                    { cardsVisible && cards.map((card, id) => <Card key={id} card={card} />) }
                </div>
            </div>
        </>
    )
}

export default Home
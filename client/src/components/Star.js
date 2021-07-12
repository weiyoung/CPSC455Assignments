import { useState } from 'react'
import { CardsContext } from '../contexts/CardsContext'
import { useContext } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import axios from 'axios'

const Star = ({ _id, star, ...otherProps }) => {
    const { updateCards } = useContext(CardsContext)
    const [starred, setStarred] = useState(star)

    const toggleStar = () => {
        setStarred(currentStarred => {
            axios.patch(`http://${window.location.hostname}:5000/cards/${_id}`, { star: !currentStarred }).then(updateCards)
            return !currentStarred})
    }

    return (
        <div {...otherProps}>
            {starred ? <BsStarFill onClick={toggleStar}/> : <BsStar onClick={toggleStar}/>}
        </div>
    )
}

export default Star
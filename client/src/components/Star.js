import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CardsContext } from '../contexts/CardsContext'
import { BsStar, BsStarFill } from 'react-icons/bs'
import axios from 'axios'

const Star = ({ _id, star, ...otherProps }) => {
    const { updateCards } = useContext(CardsContext)
    const [starred, setStarred] = useState(star)

    useEffect(() => {
        setStarred(star)
    }, [star])

    const toggleStar = () => {
        setStarred(currentStarred => {
            axios.patch(`/cards/${_id}`, { star: !currentStarred }).then(updateCards)
            return !currentStarred})
    }

    return (
        <div {...otherProps}>
            {starred ? <BsStarFill onClick={toggleStar}/> : <BsStar onClick={toggleStar}/>}
        </div>
    )
}

export default Star

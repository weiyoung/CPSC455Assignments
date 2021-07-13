import '../css/Popup.css'
import '../css/Form.css'
import Star from '../components/Star'
import { CardsContext } from '../contexts/CardsContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

const Popup = ({ content, open, onClose }) => {
    const { updateCards } = useContext(CardsContext)
    const [editMode, setEditMode] = useState(false)
    const { register, handleSubmit } = useForm()

    const onSubmit = (data, e) => {
        axios.patch(`http://${window.location.hostname}:5000/cards/${content._id}`, { desc: data.desc }).then(updateCards)
        setEditMode(false)
    }

    if (!open) return null

    return (
        <>
            <div className="popup-overlay" />
            <div className="popup">
                <img className="popup-img" src={content.url} alt={content.name} />
                <div className="popup-details">
                    <div className="popup-details-name">{content.name}</div>
                    <div className="popup-details-id">ID: {content._id}</div>
                    <Star {...content} />
                    {!editMode && <div className="popup-details-desc">{content.desc}</div>}
                    {!editMode && <button onClick={() => setEditMode(true)} className="popup-details-edit-btn">Edit Description</button>}
                    {editMode && 
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <textarea type="text" placeholder="New Description" className="popup-details-edit-form" {...register('desc', { required: true })} />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input type="submit" value="Update Description" className="popup-details-edit-btn" />
                            <button onClick={() => setEditMode(false)} className="popup-details-edit-btn">Back</button>
                        </div>
                    </form>}
                </div>
                <button onClick={onClose} className="popup-close-btn">&#10006;</button>
            </div>
        </>
    )
}

export default Popup

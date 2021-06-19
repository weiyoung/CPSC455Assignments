import '../css/App.css'
import '../css/Form.css'
import { useForm } from 'react-hook-form'

const Form = ({ setCards, cardDeck }) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data, e) => {
        const newCard = {
            name: data.name,
            url: data.url,
            desc: data.desc
        }
        const newDeck = [...cardDeck, newCard] // need to setCards with a new deck so useState will actually update the cards
        setCards(newDeck)
        cardDeck.push(newCard)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label htmlFor="name" className="form-label">Card Name</label>
            <input type="text" placeholder="Name" {...register('name', { required: true })} className="form-input" />

            <label htmlFor="url" className="form-label">Image URL</label>
            <input type="text" placeholder="URL" {...register('url', { required: true })} className="form-input" />

            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" placeholder="Description" {...register('desc', { required: true })} className="form-input" />
            
            <div className="form-buttons">
                <input type="submit" value="Add Card" className="button" />
                <input type="reset" value="Clear Form" className="button" />
            </div>
        </form>
    )
}

export default Form

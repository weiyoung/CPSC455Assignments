import '../css/App.css';
import '../css/Form.css';
import { useForm } from 'react-hook-form'

const Form = () => {
    const {input, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label for="name" className="form-label">Card Name</label>
            <input type="text" placeholder="Name" name="name" ref={input} className="form-input" />

            <label for="url" className="form-label">Image URL</label>
            <input type="text" placeholder="URL" name="url" ref={input} className="form-input" />

            <label for="desc" className="form-label">Description</label>
            <input type="text" placeholder="Description" name="desc" ref={input} className="form-input" />
            
            <input type="submit" value="Add Card" className="button" />
            <input type="reset" value="Clear Form" className="button" />
        </form>
    )
}

export default Form

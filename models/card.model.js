const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('mongoose-type-url')

dotenv.config()

mongoose.connect(process.env.MONGODB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => console.log('MongoDB connection ready!'))

const cardSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    url: { 
        type: mongoose.SchemaTypes.Url, 
        required: true 
    },
    desc: { 
        type: String, 
        required: true 
    },
    star: {
        type: Boolean,
        required: true
    }
}, { 
    collection: 'cards' 
})

exports.CardModel = mongoose.model('CardModel', cardSchema)

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.cwhgngk.mongodb.net/mindx')

const songSchema = new mongoose.Schema({
    name: String,
    author: String
})

const songModel = mongoose.model('songs', songSchema)

module.exports = { songModel }
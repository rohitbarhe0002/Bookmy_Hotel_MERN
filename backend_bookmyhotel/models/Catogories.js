const mongoose = require('mongoose')

const catogoriesSchema = new mongoose.Schema({
    catogories: { type: Array, required: true, unique: true },

}, { timestamps: true })

module.exports = mongoose.model("Catogory",catogoriesSchema )
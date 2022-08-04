const mongoose = require('mongoose')

const HotelsSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location:{type:String,required:true,},
    image:{type:String,required:true,},

}, { timestamps: true })

module.exports = mongoose.model("Hotel", HotelsSchema)
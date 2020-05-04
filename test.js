const mongoose = require('mongoose')
const Item = require('./database/models/Item')

mongoose.connect('mongodb://localhost/DollarStore')

Item.find({},(error,items)=>{
    console.log(error,items)
})
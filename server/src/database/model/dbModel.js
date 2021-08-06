const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:Number,
    productName: String,
    productCode: String,
    releaseDate: String,
    description: String,
    price: Number,
    starRating: Number,
    imageUrl: String,
})

const ProductModel = mongoose.model('Product', productSchema)
module.exports = { ProductModel }

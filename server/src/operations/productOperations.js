const { ProductModel }  = require("../database/model/dbModel")


const readProducts = (callback)=>{
    ProductModel.find(callback)

}

const readProduct = (ID,callback)=>{
    ProductModel.findOne({productId: ID}, callback)

}
const writeProducts = (data, callback)=>{
    const newProduct = new ProductModel(data)
    newProduct.save(callback)
}

const removeProduct = (ID, callback)=>{
    ProductModel.deleteOne({productId: ID}, callback)
}

const updateProduct = (ID, data, callback)=>{
    ProductModel.updateOne({productId: ID}, {$set: data}, callback)
}

module.exports = { 
    writeProducts,
    readProduct,
    readProducts,
    removeProduct,
    updateProduct
}
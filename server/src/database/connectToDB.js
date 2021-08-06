const mongoose = require('mongoose')
const {logger} = require('../logAndTrace/logger')
const URL = 'mongodb+srv://products-db:database@123@product-db.9pxza.mongodb.net/products-db?retryWrites=true&w=majority'

const connectDb = () => {
    mongoose.connect(URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
            (error) => {
                if (error)
                   logger.error('NOT connected to mongoDB - ' + error)
                else
                    logger.info('connected to mongoDB')
            })
}

module.exports = { connectDb}
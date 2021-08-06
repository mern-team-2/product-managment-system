const { Router } = require('express')
const { getProductHandler, getProductsHandler, editProductHandler, deleteProductHandler, addProductHandler } = require( "../controller/controller")

const routerMW = Router()
const baseURI = '/productservice'

routerMW.get(baseURI, getProductsHandler)

routerMW.get(`${baseURI}/:productId`, getProductHandler)

routerMW.post(baseURI, addProductHandler)
routerMW.put(baseURI, editProductHandler)
routerMW.delete(`${baseURI}/:productId`, deleteProductHandler)

module.exports = { routerMW }
const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const ProductsController = require('./controllers/ProductsController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
        AuthenticationController.register),

    app.post('/login',
        AuthenticationController.login),

    app.get('/products',
        ProductsController.index),

    app.post('/products',
        ProductsController.post)
}

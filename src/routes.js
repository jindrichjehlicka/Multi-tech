const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const ProductsController = require('./controllers/ProductsController')
const UsersController = require('./controllers/UsersController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
        AuthenticationController.register),
    app.post('/login',
        AuthenticationController.login),

    app.get('/products',
        ProductsController.index),

    app.put('/products/:productId',
        ProductsController.put),


    app.post('/products',
        ProductsController.post),

    app.get('/products/:productId',
        ProductsController.show)

        app.get('/users',
        UsersController.index),

    app.put('/users/:userId',
        UsersController.put),


    app.post('/users',
    UsersController.post),

    app.get('/users/:userId',
    UsersController.show)
    }
       

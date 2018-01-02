const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ProductsController = require('./controllers/ProductsController')
const UsersController = require('./controllers/UsersController')
const ManualsController = require('./controllers/ManualsController')
const AdminManualController = require('./controllers/AdminManualController')
const EmailController = require('./controllers/EmailController')
const isAuthenticated = require('./policies/isAuthenticated')

var mcache = require('memory-cache');
var cache = (duration) => {
    return (req, res, next) => {
        let key = '__express__' + req.originalUrl || req.url
        let cachedBody = mcache.get(key)
        if (cachedBody) {
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}



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

    app.get('/manuals',
        isAuthenticated,
        AdminManualController.index),

        app.get('/manual',
            isAuthenticated,
            ManualsController.index),

        app.post('/manuals',
           
            ManualsController.post),
        app.delete('/manuals/:manualId',
           
            ManualsController.delete)

    app.post('/send',
        isAuthenticated,
        EmailController.post)
}
const AuthenticationController = require('./controllers/AuthenticationController')
const JoiValidation = require('./AuthMiddlewares/JoiValidation')
const ProductsController = require('./controllers/ProductsController')
const UsersController = require('./controllers/UsersController')
const ManualsController = require('./controllers/ManualsController')
const AdminManualController = require('./controllers/AdminManualController')
const EmailController = require('./controllers/EmailController')
const EmailRegisterController = require('./controllers/EmailRegisterController')
const PassportValidation = require('./AuthMiddlewares/PassportValidation')

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
        JoiValidation.register,
        AuthenticationController.register),

        app.post('/login',
            AuthenticationController.login),

        app.get('/products',
        PassportValidation,
            ProductsController.index),

        app.put('/products/:productId',
        PassportValidation,
            ProductsController.put),
        app.post('/products',
        PassportValidation,
            ProductsController.post),
        app.get('/products/:productId',
        PassportValidation,
            ProductsController.show)

    app.get('/users',
    PassportValidation,
        UsersController.index),
        PassportValidation,
        app.put('/users/:userId',
        PassportValidation,
            UsersController.put),
        app.post('/users',
        PassportValidation,
            UsersController.post),
        app.get('/users/:userId',
        PassportValidation,
            UsersController.show)

    app.get('/manuals',
    PassportValidation,
        AdminManualController.index),

        app.get('/manual',cache(900),
        PassportValidation,
            ManualsController.index),
        //my product are cached for 15 min,
        app.post('/manuals',

            ManualsController.post),
        app.delete('/manuals/:manualId',

            ManualsController.delete)

    app.post('/support',
    PassportValidation,
        EmailController.post),

        app.post('/email',
            EmailRegisterController.post)
}
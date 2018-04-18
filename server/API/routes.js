const AuthenticationController = require('./controllers/AuthenticationController')
const JoiValidation = require('./AuthMiddlewares/JoiValidation')
const ProductsController = require('./controllers/ProductsController')
const UsersController = require('./controllers/UsersController')
const PasswordController = require('./controllers/PasswordController')
const ManualsController = require('./controllers/ManualsController')
const AdminManualController = require('./controllers/AdminManualController')
const EmailController = require('./controllers/EmailController')
const EmailRegisterController = require('./controllers/EmailRegisterController')
const PassportValidation = require('./AuthMiddlewares/PassportAdmin')





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
        
        app.put('/users/:userId',
        PassportValidation,
            UsersController.put),
            app.put('/password/:userId',
        PassportValidation,
            PasswordController.put),
        app.post('/users',
        PassportValidation,
            UsersController.post),
        app.get('/users/:userId',
        PassportValidation,
            UsersController.show)

    app.get('/manuals',
    PassportValidation,
        AdminManualController.index),

        app.get('/manual',
       
        PassportValidation,
            ManualsController.index),
      
        app.post('/manuals',
        PassportValidation,
            ManualsController.post),
        app.delete('/manuals/:manualId',
        PassportValidation,
            ManualsController.delete)

    app.post('/support',
    PassportValidation,
        EmailController.post),

        app.post('/email',
            EmailRegisterController.post)
}
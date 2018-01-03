const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,128}$')
            ),
            mine: Joi.string().empty('').optional(),
            admin:Joi.number().integer().min(0).max(1)
        }

        const { error, value } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address!'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Password can only contain upper case,lower case and numbers and it must be minimum 6 characters!                  
                    `
                    })
                    break


                default:
                    res.status(400).send({
                        error: 'Wrong information!'
                    })

            }
        } else {
            next()
        }
    }
}
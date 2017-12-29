const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
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
                        error: `The password can only contain uppr case,lower case,provided failed to match the following rules:
                    <br>
                    1.It must contain ONLY the following characters : Upper case, lower case and numerics
                    <br>
                    2. It must be minimum 8 characters and maximum 32 characters
                    `
                    })
                    break


                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })

            }
        } else {
            next()
        }
    }
}
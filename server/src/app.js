const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {
    sequelize
} = require('./models')
const config = require('./config/config')
const nodemailer = require('nodemailer');
const path = require('path')

const app = express()

app.use(express.static('client'));

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors())

require('./routes')(app)
//ROUTES





sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port` + config.port)
    })
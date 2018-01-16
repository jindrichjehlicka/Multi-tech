const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const {
  User
} = require('../models')




module.exports = {




  async put(req, res) {
    var password = req.body.password;
    req.body.password = bcrypt.hashSync(password);  
    
    try {
      await User.update(req.body, {        
        where: {
          id: req.params.userId
        }
      })     
      res.send(req.body)     
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change the password'
      })
    }
  }
}
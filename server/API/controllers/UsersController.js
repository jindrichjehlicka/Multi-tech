const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const {
  User
} = require('../models')




module.exports = {
  async index(req, res) {
    try {
      let users = null
      const search = req.query.search
      if (search) {
        users = await User.findAll({
          where: {
            $or: [
              'email', 'id'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        users = await User.findAll()
      }

      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the user'
      })
    }
  },

  async show(req, res) {
    try {
      const user = await User.findById(req.params.userId)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the user'
      })
    }
  },

  async post(req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create user'
      })
    }
  },
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
        error: 'An error has occured trying to update the user'
      })
    }
  }
}
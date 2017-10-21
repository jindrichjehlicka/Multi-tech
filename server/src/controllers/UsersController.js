const {User} = require('../models')




module.exports = {
async index (req, res) {
    try {
      let users = null
      const search = req.query.search
      if (search) {
      users = await User.findAll({
        where: {
         $or: [
           'email'
            ].map(key =>({
              [key]: {
            $like: `%${search}%`
           }
         }))
        }
      })
      } else{
         users = await User.findAll({
          limit:20
        })
      }
     
     res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the user'
      })
    }
  },

  async show (req, res) {
    try {
     const users = await User.findById(req.params.userId)  
     res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the user'
      })
    }
  },

    async post (req, res) {
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
        try {
          await User.update(req.body, {
            where: {
              id: req.params.userId
           }
         })
         res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to update the product'
          })
        }
      }
    }

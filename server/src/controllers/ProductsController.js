const { Product} = require('../models')




module.exports = {

  async index (req, res) {
    try {
     const product = await Product.findAll({
       limit:20
     })
     res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the product'
      })
    }
  },

  async show (req, res) {
    try {
     const product = await Product.findById(req.params.productId)  
     res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the product'
      })
    }
  },

    async post (req, res) {
        try {
         const product = await Product.create(req.body)
         res.send(product)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to create products'
          })
        }
      }
    }

const {Product} = require('../models')




module.exports = {
async index (req, res) {
    try {
      let products = null
      const search = req.query.search
      if (search) {
      products = await Product.findAll({
        where: {
         $or: [
           'companyName', 'model'
            ].map(key =>({
              [key]: {
            $like: `%${search}%`
           }
         }))
        }
      })
      } else{
         products = await Product.findAll({
          limit:20
        })
      }
     
     res.send(products)
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
            error: 'An error has occured trying to create product'
          })
        }
      },
      async put(req, res) {
        try {
          await Product.update(req.body, {
            where: {
              id: req.params.productId
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

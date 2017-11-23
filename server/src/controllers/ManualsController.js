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

  
    }

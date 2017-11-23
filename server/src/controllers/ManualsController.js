const {Manual} = require('../models')

module.exports = {
async index (req, res) {
    try {
    
      const {productId, userId} = req.query

      const manual = await Manual.findOne({
          where: {
              ProductId: productId,
              UserId: userId
          }
      })
   
     
     res.send(manual )
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the product'
      })
    }
  },

  
    }

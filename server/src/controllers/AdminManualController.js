const {
  Manual,
  Product,
  User
} = require('../models')


module.exports = {

  async index(req, res) {
    try {
      const userId = req.user.id
      const {
        productId
      } = req.query
      const all = {}
      if (productId) {
        all.ProductId = productId,
        all.UserId = userId
      }
      const manuals = await Manual.findAll({
        all: all,
        include: [{
          //return User and Product info.. model: Product - returns  only product info
          all: true 
        }]
      })
      
      res.send(manuals)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the manual'
      })
    }
  },
 


}
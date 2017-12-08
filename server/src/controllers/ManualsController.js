const {Manual, Product, User} = require('../models')


module.exports = {
 
  async index (req, res) {
    try {    
      const {productId, userId} = req.query
      const where = {
        UserId: userId
      }
      if (productId) {
        where.ProductId = productId
      }
      const manuals = await Manual.findAll({
          where: where,
          include: [
            {model: Product}
          ]
      }) 
      .map(manual => manual.toJSON())
      .map(manual => Object.assign({
        manualId: manual.id
      },manual.Product))
         res.send(manuals)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the manual'
      })
    }
  },

  async post (req, res) {
    try {    
      const {productId, userId} = req.body
      const manual = await Manual.findOne({
        where: {
          ProductId: productId,
          UserId: userId
        }
      })
      if (manual){
        return res.status(400).send({
          error:"This manual has been already added"
        })
      }
        const newManual = await Manual.create({
          ProductId: productId,
          UserId: userId
        }) 

         res.send(newManual)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add the manual'
      })
    }
  },

  async delete (req, res) {
    try {    
      const {manualId} = req.params
      const manual = await Manual.findById(manualId)
      await manual.destroy()
         res.send(manual)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the manual'
      })
    }
  },

  
    }

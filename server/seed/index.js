const{
    sequelize,
    Product,
    User
} = require ('../src/models')

const Promise = require ('bluebird') //makes  sure it inserts before any other action
const products = require ('./products.json')
const users = require ('./users.json')
// const manuals = require ('./manuals.json')


sequelize.sync({force:true})
.then(async function (){
    await Promise.all(
        users.map(user => {
            User.create(user)
        })
    )


await Promise.all(
    products.map(product => {
        Product.create(product)
        })
    )
})

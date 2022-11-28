const {Brand} = require('../models/models')

class BrandController {
  async create(req, res) {
    const {name} = req.body
    const type = await Brand.create({name})
    return res.json(type)

  }

  async getAll(req,res) {

    const brand = await Brand.findAll()
    return res.json(brand)
  }
}


module.exports = new BrandController()
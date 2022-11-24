const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
  async create(req, res) {
    const {name} = req.body

  }

  async getAll(req,res) {

  }
}


module.exports = new TypeController()
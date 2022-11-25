const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const { json } = require('sequelize')

class TypeController {
  async create(req, res) {
    const {name} = req.body
    const type = await Type.create({name})
    return res.json(type)
  }

  async getAll(req,res) {

  }
}


module.exports = new TypeController()
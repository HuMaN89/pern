const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, Basket } = require('../models/models')
class UserController {
  async registration(req, res) {
    const { email, password, role} = req.body
    if(!email || !password) {
      return next(ApiError.badRequest('Некоректный email или password'))
    }
    const candidat = await User.findOne({where: {email}})
    if (candidat) {
      return next(ApiError.badRequest('Email уже зарегистрирован'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    const basket = await Basket.create({userId: user.id})
    const token = jwt.sign({id: user.id,email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})

    return res.json(token)
  }

  async login(req,res) {

  }
  async check(req, res,next) {
    const {id} = req.query
    if(!id) {
      return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
  }
}


module.exports = new UserController()
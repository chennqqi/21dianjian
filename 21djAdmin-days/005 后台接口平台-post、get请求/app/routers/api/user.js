const router = require('koa-router')()
const userController = require('../../controllers/user')
const routers = router
    .get('/', userController.getUserInfo)
    .post('/', userController.checkUser)

module.exports = routers
const router = require('koa-router')()
const userController = require('../../controllers/user')
const routers = router
    .get('/', userController.getToken)

module.exports = routers
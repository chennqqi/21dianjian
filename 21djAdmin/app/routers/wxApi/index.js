const router = require('koa-router')()
const wxController = require('../../controllers/wxApi')
const routers = router
    .get('/getWxConfig', wxController.getWxConfig)
    .get('/authLogin', wxController.authLogin)

module.exports = routers
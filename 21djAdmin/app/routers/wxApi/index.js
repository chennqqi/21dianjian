const router = require('koa-router')()
const wxController = require('../../controllers/wxApi')
const routers = router
    .get('/getWxConfig', wxController.getWxConfig)
    .get('/authLogin', wxController.authLogin)
    .get('/authRedirect', wxController.authRedirect)

module.exports = routers
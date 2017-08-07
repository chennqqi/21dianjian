const router = require('koa-router')()

const api = require('./api/index')
const admin = require('./admin/index')
const wxApi = require('./wxApi/index')

router.get('/', function(ctx) {
    ctx.body = 'ok'
})
router.use('/api', api.routes(), api.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/wxapi', wxApi.routes(), wxApi.allowedMethods())

module.exports = router
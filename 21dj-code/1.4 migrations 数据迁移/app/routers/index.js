const router = require('koa-router')()

const api = require('./api/index')
const admin = require('./admin/index')

router.use('/api', api.routes(), api.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())

module.exports = router
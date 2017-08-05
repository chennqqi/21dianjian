const router = require('koa-router')()
const user = require('./user')
const test = require('./test')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/test', test.routes(), test.allowedMethods())

module.exports = router
const router = require('koa-router')()

const routers = router
    .get('/', function(ctx, next) {
        ctx.body = "get  admin/user"
    })
    .post('/', function(ctx, next) {
        ctx.body = "post  admin/user"
    })

module.exports = routers
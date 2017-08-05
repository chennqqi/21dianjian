const router = require('koa-router')()

const routers = router
    .get('/', function(ctx, next) {
        ctx.body = "get  api/user"
    })
    .post('/', function(ctx, next) {
        ctx.body = "post  api/user"
    })

module.exports = routers
const Koa = require('koa');
const app = new Koa();
const config = require('./config/config')
const routers = require('./app/routers/index')

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
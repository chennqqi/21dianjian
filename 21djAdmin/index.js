const Koa = require('koa');
const app = new Koa();
const config = require('./config/config')
const routers = require('./app/routers/index')
const models = require('./app/models')
const Umzug = require('umzug');
const koaBody = require('koa-body')
const jwt = require('koa-jwt')

//数据库表的校验
var umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: models.sequelize // here should be a sequelize instance, not the Sequelize module
    },
    migrations: {
        params: [
            models.sequelize.getQueryInterface(),
            models.Sequelize // Sequelize constructor - the required module
        ],
        path: './app/migrations',
        pattern: /\.js$/
    }
});

umzug.up().then(function(migrations) {
    console.log("执行了migrations up");
}).catch(error => {
    console.log(error)
})

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});

app.use(jwt({ secret: 'shared-secret' }).unless({ path: [/^\/admin|\/api\/test|\/wxapi|\//] }));

// 使用ctx.body解析中间件
app.use(koaBody());

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
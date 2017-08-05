const Koa = require('koa');
const app = new Koa();
const config = require('./config/config')
const routers = require('./app/routers/index')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('21dj', 'cldy', 'cldy', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: 'user',
});

User
    .findOrCreate({ where: { name: 'test' }, defaults: { phone: '18312312321' } })
    .spread((user, created) => {
        console.log(user.get({
            plain: true
        }))
        console.log(created)
    })


// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
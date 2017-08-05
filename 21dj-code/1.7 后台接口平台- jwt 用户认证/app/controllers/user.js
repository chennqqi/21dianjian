const jwt = require('jsonwebtoken')


module.exports = {

    async getUserInfo(ctx) {

        console.log("ctx.state.user:" + JSON.stringify(ctx.state.user));

        let url = ctx.url

        // 从上下文的request对象中获取
        let request = ctx.request
        let req_query = request.query
        let req_querystring = request.querystring

        // 从上下文中直接获取
        let ctx_query = ctx.query
        let ctx_querystring = ctx.querystring

        ctx.body = {
            url,
            req_query,
            req_querystring,
            ctx_query,
            ctx_querystring
        }
    },

    async checkUser(ctx) {
        ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    },

    async getToken(ctx) {
        const token = jwt.sign({ 'id': 123 }, 'shared-secret')
        ctx.body = token;
    }
}
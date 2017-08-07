const config = require('../../config/config')
const constant = require('../constant')

const wxApi = {

    async getWxConfig(ctx) {
        ctx.body = 'getWxConfig....'
    },

    async authLogin(ctx) {

        const appID = config.wxAppID
        const redirect_uri = ctx.request.redirect_uri || 'http%3a%2f%2fwww.yuqianedu.com'
        const scope = 'snsapi_userinfo'
        const state = constant.AUTH_LOIGN_STATE
        const authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appID + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect'
        ctx.redirect(authUrl);
    }
}

module.exports = wxApi
const config = require('../../config/config')
const constant = require('../constant')
const fetch = require('node-fetch');

const wxApi = {

    async getWxConfig(ctx) {
        ctx.body = 'getWxConfig....'
    },

    async authLogin(ctx) {

        const appID = config.wxAppID
        const redirect_uri = config.wxRedirectUri
        const state = encodeURI(ctx.query.uri)
        const scope = 'snsapi_userinfo'
        const authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appID + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect'
        ctx.redirect(authUrl);
    },

    async getWxUserInfo(ctx, access_token, openid, redirect_url) {
        console.log("1111111");
        const url = 'https://api.weixin.qq.com/sns/userinfo?access_token=' + access_token + '&openid=' + openid + '&lang=zh_CN'
        const fetchResult = await fetch(url);
        const result = await fetchResult.json()
        console.log("result.." + JSON.stringify(result))
        if (result.errcode) {
            ctx.body = await JSON.stringify(result);
        } else {
            //获得个人信息，根据openid查询是否有该用户，如果有，返回userId, 如果没有，则插入数据
            ctx.body = await JSON.stringify(result);
        }
    },

    async authRedirect(ctx) {
        const code = ctx.query.code;
        const state = ctx.query.state;

        const url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + config.wxAppID + '&secret=' + config.wxAppSecret + '&code=' + code + '&grant_type=authorization_code'

        const fetchResult = await fetch(url);
        const result = await fetchResult.json()

        if (result.errcode) {
            ctx.body = JSON.stringify(result);
        } else {
            //获得 access_token
            const access_token = result.access_token
            const openid = result.openid
            wxApi.getWxUserInfo(ctx, access_token, openid, state)
        }
    },


}

module.exports = wxApi
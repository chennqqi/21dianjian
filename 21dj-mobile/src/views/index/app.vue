<template>
<span> {{msg}} {{msg2}} </span>
</template>
<script>
export default {
    data: function(){
        return {
            'msg': 'Hello world',
            'msg2': '222'
        }
    },
    mounted(){
        console.log("mounted.....")

        location.href = 'http://localhost:3001/wxapi/authLogin'
        

        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: '12213', // 必填，公众号的唯一标识
            timestamp: '12', // 必填，生成签名的时间戳
            nonceStr: '12', // 必填，生成签名的随机串
            signature: '12',// 必填，签名，见附录1
            jsApiList: ['as'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        
        wx.ready(() => {
            console.log("配置成功!!!");
        });
        
        wx.error((err) => {
            console.log("玛德，配置失败:::" + err);
        });

    }
}
</script>

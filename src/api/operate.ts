export default {
    //接口
    api: function () {
        let version = wx.getAccountInfoSync().miniProgram.envVersion;
        switch (version) {
            case 'develop': //开发预览版
                return 'https://www.baidu.com/';
            case 'trial': //体验版
                return 'https://www.baidu.com/';
            case 'release': //正式版
                return 'https://www.baidu.com/';
            default:
                return 'http://www.baidu.com/';
        }
    }
};

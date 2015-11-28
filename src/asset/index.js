(function (window) {

    var $ = require('jq');
    require('base');
    //require('ui');
    //require('customalert');
    //require('scroll');

    var document = window.document,
        $doc = $(document);

    var pname = 'toyota/20151102';
    //全局变量
    var global = window.global = {
        //项目标识
        ptype: pname.split('/').join('_'),
        //接口
        api  : 'http://app.gd.sohu.com/minisite/' + pname + '/',

        //分享相关
        urlShare: location.href,
        picShare: 'http://img.gd.sohu.com/norefer/' + pname + '/0.jpg',
        txtShare: document.title
    };

    //alert方法
    window.alert = function (str) {
        $.customalert({
            content: str
        });
    };


    ////面板显示回调函数
    //$.panelLoaded = function ($this, isInit) {
    //    var load = loader[$this.attr('id')];
    //    typeof load === 'function' && load($this, isInit);
    //};
    ////面板隐藏回调函数
    //$.panelUnloaded = function ($this) {
    //    var unload = (loader[$this.attr('id')] || {}).unload;
    //    typeof unload === 'function' && unload($this);
    //};


    ////proxy配置
    //(function (defaults) {
    //    //授权码
    //    defaults.code = 'aa1c9153608a7755b7c20e97c0eade27';
    //
    //    //全局设置网络请求开始结束调用函数
    //    defaults.onStart = function () {
    //        $.toggleMask(1);
    //    };
    //    defaults.onEnd = function () {
    //        $.toggleMask(0);
    //    };
    //})(require('jtool').proxy.defaults);



    //页面模块加载对象
    var loader = {
        carousel: require('./page/carousel.js')
    };


    //微信分享配置
    var wxapi = require('wxapi');
    wxapi.shareToPYQ.opts = wxapi.sendToPY.opts = {
        img_url: global.picShare,
        link   : global.urlShare,
        title  : document.title,
        desc   : global.txtShare
    };

})(window);
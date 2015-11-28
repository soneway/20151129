//焦点图特效
(function (window, $) {

    require('carousel');

    var document = window.document,
        $doc = $(document);


    //隐藏二维码
    $.isShowQrcode = false;


    //焦点图特效
    var carouselEl = $('#carousel').carousel({
        isVertical      : true,
        isShowPager     : false,
        isShowTitle     : false,
        isAutoPlay      : false,
        removeClassDelay: 300,
        initIndex       : 0
    })[0];


    //上下切换按钮
    $doc.on('keyup', function (evt) {
        var keyCode = evt.keyCode;

        //按下
        if (keyCode === 40) {
            carouselEl.next();
        }
        //按上
        if (keyCode === 38) {
            carouselEl.prev();
        }
    });


    (function (partSel) {
        var $part = $(partSel);

        $doc.on('click', partSel + ' h3', function () {
            var $is = $(this).find('i');
            $is.hasClass('visible') ? $is.removeClass('visible') : $is.addClass('visible');
        });

    })('.part1');

    //module.exports = function ($this, isInit) {
    //    if (isInit) {
    //
    //
    //    }
    //};

})(window, $);
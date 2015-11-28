//焦点图特效
(function (window, $) {

    require('carousel');

    var document = window.document,
        $doc = $(document);


    //隐藏二维码
    $.isShowQrcode = false;


    //焦点图特效
    var carouselEl = $('#carousel').carousel({
        isVertical : true,
        isShowPager: false,
        isShowTitle: false,
        isAutoPlay : false,
        initIndex  : 0
    })[0];


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
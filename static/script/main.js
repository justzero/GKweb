// @fileOverview: static/script/main.js @ 2012年11月21日 星期三 22时44分01秒
// @description: 主函数
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

(function ($) {
    'use strict';
    $.module('ACE', [], function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<[');
        $interpolateProvider.endSymbol(']>');
    });
}(angular));

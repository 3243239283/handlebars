/**
 * Created by Administrator on 2016/5/8.
 */
define(function(require,exprots,moudle){
    var $=require('jquery');
    var handlebars=require('handlebars');
    var stylecss=require('stylecss');

    /*// 异步加载一个模块，在加载完成时，执行回调
    require.async(['layer','laycss'], function(b) {
        $('#laybtn').click(function(){
            layer.open('ss');
        });
    });*/


    //用jquery获取模板
    $.getJSON("js/json/laytpl.json",function(data){
        ////注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        var source   = $("#entry-template").html();
        var template = handlebars.compile(source);
        var context = {title: "标题", body: "我是字符串!"}
        var html= template(context);
    });


});
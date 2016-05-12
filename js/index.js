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



    $.getJSON("js/json/each.json",function(data){
        ////注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        var myTemplate = Handlebars.compile($("#table-template").html()); 
        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#tableList').html(myTemplate(data));
    });


});
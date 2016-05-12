/**
 * Created by Administrator on 2016/5/12.
 */
define(function(require,exprots,moudle){
    require('jquery');
    require('handlebars');
    require('style');

    /*// 异步加载一个模块，在加载完成时，执行回调
     require.async(['layer','laycss'], function(b) {
     $('#laybtn').click(function(){
     layer.open('ss');
     });
     });*/



    $.getJSON("js/json/eachmore.json",function(data){
        //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        //$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
        var myTemplate = Handlebars.compile($("#table-template").html());

        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#dataList').html(myTemplate(data));
    });

    /*
    * 循环嵌套在稍微复杂点的页面设计中即会涉及，Handlebars.js完全支持each嵌套，可以在each中使用each。
     上边的例子演示了两个关键点：each嵌套的可实现性、如何在each嵌套中读取父each中的数据。
     例子很简单，info本身是一个信息列表，是属于某个人的，我们先用each遍历所有的人，然后再遍历每个人的info信息，这样就形成了each嵌套。但是我们想在内层each中获取外层each的数据，达到“谁的什么”这样的显示效果。
     显然，如果直接在内层each中使用{{name}}，是取不到任何数据的，因为内层each的上下文是info，而name属性在表示人的上下文中。
     此时，可以用{{../name}}从内层each获取上一级each的name属性，语法和html的路径表示一样，简单吧？
    * */


});


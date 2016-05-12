/**
 * Created by Administrator on 2016/5/8.
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



    $.getJSON("js/json/if.json",function(data){
        ////注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        var myTemplate = Handlebars.compile($("#table-template").html()); 
        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#tableList').html(myTemplate(data));
    });

    /*
    * 在遍历student时，由于数据缺失，并不是每一个学生都有name属性，我们不想显示没有name属性的学生，这时就需要if来做判断。
     {{#if name}}可以用来判断当前上下文中有没有name属性，实际上，它是尝试去读取name属性，如果返回的为undefined、null、""、[]、false任意一个，
     都会导致最终结果为假。
     if还支持多层次读取，例如：{{#if name.xxx}}，这样写就假设name属性是一个map，检测name属性中是否包含xxx属性。
     */


});
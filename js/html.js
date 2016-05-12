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



    $.getJSON("js/json/html.json",function(data){
        ////注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        var myTemplate = Handlebars.compile($("#table-template").html());

        //注册一个比较大小的Helper,判断v1是否大于v2
        Handlebars.registerHelper("compare",function(v1,v2,options){
            if(v1>v2){
                //满足添加继续执行
                return options.fn(this);
            }else{
                //不满足条件执行{{else}}部分
                return options.inverse(this);
            }
        });

        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#tableList').html(myTemplate(data));
    });

    /*
    * 通过{{ }}取出来的内容，都会经过编码，也就是说，如果取出的内容中包含html标签，会被转码成纯文本，不会被当成html解析，
     实际上就是做了类似这样的操作：把<用&lt;替代。
     这样做是很好的，既可以显示html代码，又可以避免xss注入。这个功能在做代码展示的时候是非常有用的。
     但是有时候我们可能需要解析html，不要转码，很简单，把{{}}换成{{{}}}就可以啦。
     本例中，年龄大于20的童鞋个人主页被编码，直接展示出来；而年龄小于20的童鞋，个人主页被当成html解析，显示的是一个超链接。
     */


});
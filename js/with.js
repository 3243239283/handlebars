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



    $.getJSON("js/json/with.json",function(data){
        ////注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        var myTemplate = Handlebars.compile($("#table-template").html()); 
        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#tableList').html(myTemplate(data));
    });

    /*
    *  在循环每名学生时，学生的favorite属性并不是一个普通的字符串，而又是一个json对象，确切的说是一个list，我们需要把学生的爱好全部取出来。
     这时候就需要with命令，这个命令可以让当前的上下文进入到一个属性中，{{#with favorite}}表示进入到favorite属性的上下文中，而favorite属性中
     又是一个list，因此可以用{{#each this}}进行遍历，表示遍历当前上下文环境，对于每次遍历，都是map结构，取name属性，最终拿到所有兴趣爱好。
     */


});
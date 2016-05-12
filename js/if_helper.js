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



    $.getJSON("js/json/if_helper.json",function(data){
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
    * 很多时候，我们需要更加复杂的if判断逻辑，显然默认的if不能满足我们的需求。

     本例中，利用Handlebars.js中Helper强大的扩展性，定义了一个compare，它用来比较两个数的大小，如果第一个数大于第二个数，满足条件继续执行，否则执行{{else}}部分。

     Handlebars.registerHelper用来定义Helper，它有两个参数，第一个参数是Helper名称，第二个参数是一个回调函数，用来执行核心业务逻辑。本例中的函数，有三个参数，其中前两个参数是需要比较的两个数，第三个参数是固定的，就叫options，如果加了该参数，就说明这个Helper是一个Block，块级别的Helper，有一定的语法结构，调用的时候加#号，就像if那样。

     关于options的使用，小菜所了解的就是这种用法，return options.fn(this);表示满足条件继续执行，也就是执行{{#compare }}和{{else}}之间的代码；return options.inverse(this);表示不满足条件，也就是执行{{else}}和{{/compare}}之间的代码。

     由于这是一个块级别的Helper，所以调用要加#，例如：{{#compare age 20}}，其中的age就是当前上下文中读取到的年龄，20是小菜随便写的值，意思是只要age比20大，就显示，否则全显示?。

     读者可以看出，Helper中写的可以是任何js代码，现在想想，就知道Handlebars有多灵活了吧！！
     */


});
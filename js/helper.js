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



    $.getJSON("js/json/helper.json",function(data){
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

        //注册一个翻译用的Helper，0翻译成男，1翻译成女
        Handlebars.registerHelper("transformat",function(value){
            if(value==0){
                return "男";
            }else if(value==1){
                return "女";
            }
        });

        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#tableList').html(myTemplate(data));
    });

    /*
    * 小菜刚刚提到过，带options参数的Helper是块级别的，而不带的，相当于行内级别的Helper。
     从例子一开始，性别就是用0、1代码表示的，但实际情况下我们需要转换成汉字，transformat这个Helper需要一个参数，
     根据不同的代码，返回男女，这样调用{{transformat sex}}，其中sex是从当前上下文中读取的性别代码。
     */


});
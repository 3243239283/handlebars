/**
 * Created by Administrator on 2016/5/12.
 */
define(function(require,exprots,moudle){
    require('jquery');
    require('handlebars');
    require('style');

    $.getJSON("js/json/eachIndexes.json",function(data){
        //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
        //$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
        var myTemplate = Handlebars.compile($("#table-template").html());

        Handlebars.registerHelper("addOne",function(index,options){
            return parseInt(index)+1;
        });

        //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
        $('#tableList').html(myTemplate(data));
    });
    /*
    * 序号是指：在循环过程中，当前循环的索引，说白了，就是当前为第几次循环，一般从0开始，Handlebars.js中也是如此。
     有什么用呢？最常见的是在显示table的时候，给每行加一个序号，清晰的展示出页面上共有多少条记录，如上边的例子。
     除此之外，小菜为了在循环中区分不同的id，恰好需要一个序号，确保id不重复，用过bootstrap的童鞋应该知道，好多事件可以通过id定位，例如Listgroup控件。
     废话少说，在Handlebars.js中，可以通过{{@index}}来获取当前的索引，也就是说@index这个变量就代表了当前索引。
     在上边的例子里，table的序号从0开始不太好，于是注册了一个Helper，将索引+1。





     使用Handlebars.js过程中，难免会使用循环，比如构造数据表格。而使用循环，又经常会用到索引，也就是获取当前循环到第几次了，一般会以这个为序号显示在页面上。

     Handlebars.js中获取循环索引很简单，只需在循环中使用{{@index}}即可。

     0、
     1、
     2、


     虽然用{{@index}}可以获取到索引，但遗憾的是，索引是从0开始的。。。这样让人看起来很不舒服。因此，我们可以使用一个Helper来让索引+1，变成从1开始。

     1、
     2、
     3、




     不要以为这就完事了，这只是一般情况，小菜还要介绍一个非常特殊的场景。

     假如循环中套了一个循环，在内层循环中如何获取外层循环的索引呢？

     我们已经知道，可以用类似{{../name}}这种语法访问父级循环中的属性，但是这样访问父级索引是不可以的，例如：{{../@index}}，这样写是不正确的。

     我们可以通过一个小手段来获取。

     写例子之前，小菜多废话几句，其实这个非常实用，可以创建分级的索引，比如1.1、1.2等，也可以用作特殊的标识，理解成分组。

     1、
     1.0、
     1.1、
     2、
     2.0、
     3、
     3.0、
     3.1、
     3.2、


     * */

});


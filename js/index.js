/**
 * Created by Administrator on 2016/5/11.
 */
define(function(require,exprots,moudle){
    var $=require('jquery');
    var handlebars=require('handlebars');

    //handlebars的简单示例
    $.ajax({
        url:"js/json/tpl.json",
        dataType:"json",
        type:"get",
        success:function(data){
            var source   = $("#entry-template").html();
            var source2   = $("#entry2").html();
            var template = Handlebars.compile(source);
            var template2 = Handlebars.compile(source2);

            var html    = template(data);
            var html2    = template2(data);
            document.getElementById("div1").innerHTML = html;
            document.getElementById("div2").innerHTML = html2;
        }
    });


});

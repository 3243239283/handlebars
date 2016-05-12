/**
 * Created by Administrator on 2016/5/8.
 */
// seajs 的简单配置
seajs.config({
    base:'../',
    alias: {
        'jquery': 'handlebars/plugin/jquery/jquery',
        'handlebars':'handlebars/plugin/handlebars/handlebars',
        'index': 'handlebars/js/index',
        'each':'handlebars/js/each',
        'eachthis':'handlebars/js/eachthis',
        'eachmore':'handlebars/js/eachmore',
        'eachIndexes':'handlebars/js/eachIndexes',
        'with':'handlebars/js/with',
        'withthis':'handlebars/js/withthis',
        'if':'handlebars/js/if',
        'if_helper':'handlebars/js/if_helper',
        'helper':'handlebars/js/helper',
        'html':'handlebars/js/html',
        'style': 'handlebars/css/style.css'
    }
});
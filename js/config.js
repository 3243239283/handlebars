// seajs 的简单配置
seajs.config({
	base:'../',
	alias: {
		'jquery': 'handlebars/plugin/jquery/jquery',
		'handlebars':'handlebars/plugin/handlebars/handlebars',
		'stylecss': 'css/index.css',

		//页面对应的js
		'index':'handlebars/js/index'
	}
});
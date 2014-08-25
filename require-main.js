//require-main
require({
	appDir : "/",
	baseUrl : "lib/",
	paths : {
		jquery : "jquery-2.0.3.min",
		//bootstrap: "bootstrap.min",
		//jpanelmenu : "jquery.jpanelmenu.min"
	},
	shim : {
		//"jquery.backstretch.min" : ["jquery-2.0.3.min"],
		//"bootstrap" : ["jquery"],
		//"jpanelmenu" :  ["jquery"]
	}
});
//
require(["jquery"
	, "jquery-1.6.4.min"
	//, "underscore-min"
	//, "modernizr-2.5.3-min"
	//, "bootstrap"
    //, "less-1.6.1.min"
    //, "lib/json2.js"
	], function () {
	

$(function() {
	console.log("REQUIREJS-LOADED");	
});

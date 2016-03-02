// JavaScript Document
var main = function () {
	"use strict";
	
	$(".tabs span").toArray().forEach(function (element) {
			$(element).on("click", function () {
			// make all tabs inactive
			$(".tabs span").removeClass("active");
			
			// make the first tab active
			$(element).addClass("active");
			
			// empty main content so that we can re-create it
			$("main .content").empty();
			
			return false;
	
			});
	});
	
	
};
	
$(document).ready(main);



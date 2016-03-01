// JavaScript Document
var main = function () {
	"use strict";
	
	$(".tabs a:nth-child(1)").on("click", function () {
		// make all tabs inactive
		$(".tabs span").removeClass("active");
		
		// make the first tab active
		$(".tabs a:nth-child(1) span").addClass("active");
		
		// empty main content so that we can re-create it
		$("main .content").empty();
		
		//return false so we don't follow the link
		return false;
	});
	
	$(".tabs a:nth-child(2)").on("click", function () {
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(2) span").addClass("active");
		$("main .content").empty();
		return false;
	});
	
	$(".tabs a:nth-child(3)").on("click", function () {
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(3) span").addClass("active");
		$("main .content").empty();
		return false;
	});
};
	
$(document).ready(main);
	
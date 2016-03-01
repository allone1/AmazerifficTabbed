// JavaScript Document
var main = function () {
	"use strict";
	
	var makeTabActive = function (tabNumber) {
		// construct the selector from the tabNumber
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
		
		// make all tabs inactive
		$(".tabs span").removeClass("active");
		
		// make the first tab active
		$(tabSelector).addClass("active");
		
		// empty main content so that we can re-create it
		$("main .content").empty();
		
	};
	
	$(".tabs a:nth-child(1)").on("click", function () {
		makeTabActive(1);
		return false;
	});
	
	$(".tabs a:nth-child(2)").on("click", function () {
		makeTabActive(2);
		return false;
	});
	
	$(".tabs a:nth-child(3)").on("click", function () {
		makeTabActive(3);
		return false;
	});
	
};
	
$(document).ready(main);
	
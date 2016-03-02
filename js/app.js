// JavaScript Document
var main = function () {
	"use strict";
	
	$(".tabs span").toArray().forEach(function (element) {
			// create a click handler for this element
			$(element).on("click", function () {
				// since we're using the JQuery version of element,
				// we'll go ahead and create a temporary variable
				// so we don't need to keep recreating it
				var $element = $(element);
				
				// make all tabs inactive
				$(".tabs span").removeClass("active");
				
				// make the first tab active
				$(element).addClass("active");
				
				// empty main content so that we can re-create it
				$("main .content").empty();
				
				if ($element.parent().is(":nth-child(1)")) {
					console.log("FIRST TAB CLICKED!");
				} else if ($element.parent().is(":nth-child(2)")) {
					console.log("SECOND TAB CLICKED!");
				} else if ($element.parent().is(":nth-child(3)")) {
					console.log("THIRD TAB CLICKED!");
				}
				
				return false;
	
			});
	});
	
	
};
	
$(document).ready(main);



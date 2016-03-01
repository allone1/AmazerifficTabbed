// JavaScript Document
var main = function () {
	"use strict";
	
	var tabNumber; 	
	
	// construct selector from tabNumber
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
		
	for (tabNumber=1; tabNumber <= 3; tabNumber++) {
		
		// set up click handler
		$(tabSelector).on("click", function (event) {
			// make all tabs inactive
			$(".tabs span").removeClass("active");
			
			// make the first tab active
			$(event.target).addClass("active");
			
			return false;
	
		});
	}
	
		// empty main content so that we can re-create it
		$("main .content").empty();

};
	
$(document).ready(main);



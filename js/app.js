// JavaScript Document
var main = function () {
	"use strict";
	
	var toDos = [
		"Finish writing book",
		"Take Gracie to the park",
		"Answer emails",
		"Prep for Monday's class",
		"Make up some new ToDos",
		"Get Groceries"				
	];
	
	$(".tabs span").toArray().forEach(function (element) {
			// create a click handler for this element
			$(element).on("click", function () {
				// since we're using the JQuery version of element,
				// we'll go ahead and create a temporary variable
				// so we don't need to keep recreating it
				var $element = $(element),
					$content;
				
				// make all tabs inactive
				$(".tabs span").removeClass("active");
				
				// make the first tab active
				$(element).addClass("active");
				
				// empty main content so that we can re-create it
				$("main .content").empty();
				
				if ($element.parent().is(":nth-child(1)")) {
					$content = $("<ul>");
					toDos.forEach(function (toDo) {
							$content.prepend($("<li>").text(toDo));
					});
					$("main .content").append($content);
				} else if ($element.parent().is(":nth-child(2)")) {
					$content = $("<ul>");
					toDos.forEach(function (toDo) {
							$content.append($("<li>").text(toDo));
					});
					$("main .content").append($content);
				} else if ($element.parent().is(":nth-child(3)")) {
					// Create to do input section html structure
					
						console.log("THIRD TAB CLICKED!");
						// create new section
						var $newSection = $("<section>");
						$("main .content").append($newSection);	
						
						// create input button header
						var $newPara = $("<p>").text("Type your next to do item below");
						$newSection.append($newPara);
						
						// create input field
						var $newInput = $("<input type='text'>");
						$newSection.append($newInput);
						
						//create new button
						var $newButton = $("<button>").text("+");
						$newSection.append($newButton);
						
					// Create common function for event listeners to carry out
						var toDoFromInputBox = function () {
							var $new_todo;
		
							if ($newInput.val() !== "") {
								$new_todo = $newInput.val(); //adds new jquery element li and assigns it value user entered in input field.
								toDos.push($new_todo);  //pushes new toDo to the toDo array
								console.log("toDoFromInputBox has been run");
								$newInput.val(""); //clears out text in the input field
		
							} 
							
					// Add event listeners
						$newButton.on("click", function () {
							toDoFromInputBox ();			
				
						});
		
						$newButton.on("keypress", function (event) {
							if (event.keyCode === 13) {
							toDoFromInputBox ();
				
							}
							
						});
							
							
					};
						
													
					
				}
				
			return false;
	
		});
			
	});
			
	$(".tabs a:first-child span").trigger("click");			
			

	
	
};
	
$(document).ready(main);



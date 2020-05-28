var main = function () {
    "use strict";

    var toDos = [
    	"Finish JS homework",
    	"Write paper 1 for WPC",
    	"Write paper 2 for WPC",
    	"Take WPC quizzes",
    	"Begin bike shop year 1"
    ];

    $(".tabs a span").toArray().forEach(function (element) {
    	var $element = $(element);

    	$element.on("click", function () {
    		var $content,
    			$input,
    			$button,
    			i;

    		$(".tabs a span").removeClass("active");
    		$element.addClass("active");
    		$("main .content").empty();

    		if ($element.parent().is(":nth-child(1)")) {
    			console.log("FIRST TAB CLICKED")
    			$content = $("<ul>");
    			for (i=toDos.length-1; i>=0; i--) {
    				$content.append($("<li>").text(toDos[i]));
    			}
    		} else if ($element.parent().is(":nth-child(2)")) {
    			console.log("SECOND TAB CLICKED")
    			$content = $("<ul>");
    			toDos.forEach(function (todo) {
    				$content.append($("<li>").text(todo));
    			});
    			$("main .content").append($content);
    		} else if ($element.parent().is(":nth-child(3)")) {
    			console.log("THIRD TAB CLICKED")
    			$input = $("<input>"),
    			$button = $("<button>").text("+");

    			$button.on("click", function () {
    				if ($input.val() !== "") {
    					toDos.push($input.val());
    					$input.val("");
    				}
    			});

    			$content = $("<div>").append($input).append($button);
    		}
			
			$("main .content").append($content);

    		return false;

    	});

    });
    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
/* Paste bin:
http://malialitman.files.wordpress.com/2014/04/red-x.png
"https://raw.githubusercontent.com/RefactorU/exercise-starters/master/client-js/gold-rush/topo-co.jpg"
*/

$(document).on('ready', function() {
	// set variables used throughout
	var clickCounter = 0;
	
	// remove the appended divs
	$(document).on('click', '.x-image', function(e) {
		e.stopPropagation();
		$(this).remove();
	});


	// Add Xs
	$(document).on('click', function(e) {

		clickCounter++;
		// Pulling x & y courdinates from document and saving to a variable.
	  	var clickPosition = [e.pageX, e.pageY]

	  	// inserting a div with image at the position clicked
	  	$(".main-wrapper").append("<div class='x-image tooltip marker" + clickCounter + "'><img src='http://malialitman.files.wordpress.com/2014/04/red-x.png'></div>");
	  	$(".marker" + clickCounter).css({
	  		"position": "absolute",
	  		"top": clickPosition[1] - 20,
	  		"left": clickPosition[0] - 22
  		});
 	})





});
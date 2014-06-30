/* Paste bin:
http://malialitman.files.wordpress.com/2014/04/red-x.png
"https://raw.githubusercontent.com/RefactorU/exercise-starters/master/client-js/gold-rush/topo-co.jpg"
*/

$(document).on('ready', function() {
	// set variables used throughout
	var clickCounter = 0;
	var submitOpen = false;

	// remove the appended divs
	$(document).on('click', '.x-image', function(e) {
		e.stopPropagation();
		$(this).remove();
	});

	$(document).on('click', 'input', function(e) {
		e.stopPropagation();
	});

	$(document).on('click', 'button', function(e) {
		e.stopPropagation();
	});


	// Enter a marker
	$(document).on('click', function(e) {

		if(!submitOpen){
			clickCounter++;
			// Pulling x & y courdinates from document and saving to a variable.
		  	var clickPosition = [e.pageX, e.pageY]

		  	// inserting an X (div with image) at the position clicked
		  	$(".main-wrapper").append("<div title='fake user text' class='x-image tooltip marker" + clickCounter + "'><img src='http://malialitman.files.wordpress.com/2014/04/red-x.png'></div>");
		  	$(".marker" + clickCounter).css({
		  		"position": "absolute",
		  		"top": clickPosition[1] - 20,
		  		"left": clickPosition[0] - 22
	  		});

		  	//What are we doing here?
		  	$('.main-wrapper').append("<div class='note-input" + clickCounter + "'><input type='textarea' value='Enter your note here...'><button>Submit</button></div>")
		  	$(".note-input" + clickCounter).css({
		  		"position": "absolute",
		  		"top": clickPosition[1] + 25,
		  		"left": clickPosition[0] - 22
	  		});
	  		submitOpen = true;
		}
 	})





});
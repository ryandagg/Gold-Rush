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

	// Hide tooltip on mouse over if no text  entered
	$(document).on('mouseover', '.tooltip', function(e) {
		if($(this).attr('name') === ''){$(this).addClass('hide')}
	})

	// Show tooltip on mouse out if it contains text
	$(document).on('mouseout', '.tooltip', function(e) {
		if($(this).attr('name') !== ''){$(this).removeClass('hide')}
	})

	// Enter a marker
	$(document).on('click', function(e) {

		if(!submitOpen){	// If there is no submit form on the screen...
			clickCounter++;
			// Pulling x & y courdinates from document and saving to a variable.
		  	var clickPosition = [e.pageX, e.pageY]

		  	// inserting an X (div with image) at the position clicked
		  	$(".main-wrapper").append("<div name='' class='x-image tooltip marker" + clickCounter + "'><img src='http://malialitman.files.wordpress.com/2014/04/red-x.png'></div>");
		  	$(".marker" + clickCounter).css({
		  		"position": "absolute",
		  		"top": clickPosition[1] - 20,
		  		"left": clickPosition[0] - 22
	  		});

		  	// Add input form and submit button for note
		  	$('.main-wrapper').append("<div class='note-input" + clickCounter + "'><input type='textarea' placeholder='Enter your note here...'><button>Submit</button></div>")
		  	$(".note-input" + clickCounter).css({
		  		"position": "absolute",
		  		"top": clickPosition[1] + 25,
		  		"left": clickPosition[0] - 22
	  		});

	  		submitOpen = true;	// There is now a submit form open

		  	// Save input to tooltop and close form and button
		  	$(document).on('click', 'button', function(e) {
		  		$('.marker'+ clickCounter).attr('name', $('input').val());
		  		$('.note-input' + clickCounter).remove();
		  		submitOpen = false	// Just closed submit form
			});
		}
 	})

	// Change offset
	// $(document).on('click', 'img', function(e) {
	// 	$("img").offset({top: 50, left:50})
	// })


	// Vertical scroll

	// Messed with reference
	var clicked = false, clickY;
	$(document).on({
	    'mousemove': function(e) {
	        clicked && updateOffset(e);
	    },
	    'mousedown': function(e) {
	        clicked = true;
	        clickY = e.pageY;
	    },
	    'mouseup': function() {
	        clicked = false;
	        $('html').css('cursor', 'auto');
	    }
	});

	var updateOffset = function(e) {
	    $('html').css('cursor', 'move');
	    $('.main-wrapper').scrollTop($('.main-wrapper').scrollTop() + (clickY - e.pageY));
	}

	// Reference
	// var clicked = false, clickY;
	// $(document).on({
	//     'mousemove': function(e) {
	//         clicked && updateScrollPos(e);
	//     },
	//     'mousedown': function(e) {
	//         clicked = true;
	//         clickY = e.pageY;
	//     },
	//     'mouseup': function() {
	//         clicked = false;
	//         $('html').css('cursor', 'auto');
	//     }
	// });

	// var updateScrollPos = function(e) {
	//     $('html').css('cursor', 'row-resize');
	//     $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
	// }



});
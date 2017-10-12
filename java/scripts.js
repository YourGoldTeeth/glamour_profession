// $( "#square-three" ).hover(function() {
//   $( this ).fadeout( 2000 );
// }, function() {
//   $( this ).fadein( 2000 );
// });

// $( ".background" ).hover(function() {
//   $( this ).animate({opacity: 1,}, 2000, function() {
//     // Animation complete.
//   });
// });

$(document).ready(function(){
	//portfolio - show link
	$('#blackbox-one').hover(
		function () {
			$(this).animate({opacity:'.60'},);
			// console.log("all done animating");
		},
		function () {
			$(this).animate({opacity:'0'});
			// console.log("All done un-animating");
		}
	);	
});

$(document).ready(function(){
	//portfolio - show link
	$('#blackbox-two').hover(
		function () {
			$(this).animate({opacity:'.60'},);	
		},
		function () {
			$(this).animate({opacity:'0'});		
		}
	);	
});

$(document).ready(function(){
	//portfolio - show link
	$('#blackbox-three').hover(
		function () {
			$(this).animate({opacity:'.60'},);
			
		},
		function () {
			$(this).animate({opacity:'0'});
			
		}
	);	
});

$(document).ready(function(){
	//portfolio - show link
	$('#blackbox-four').hover(
		function () {
			$(this).animate({opacity:'.60'},);
		},
		function () {
			$(this).animate({opacity:'0'});
		}
	);	
});

// $('#square-one').click(function() {
//   $(this).slideUp(3000);
// });

// $('#square-two').click(function() {
//   alert("Clicked 2");
// });

// $('#square-three').click(function() {
//   alert("Clicked 3");
// });

// $('#square-four').click(function() {
//   alert("Clicked 4");
// });

// $('#square-one').click(function() {
//   $(this).css('width', '400px');
// )}
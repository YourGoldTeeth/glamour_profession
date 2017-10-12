$(document).ready(function(){
	//portfolio - show link
	$('.fdw-background').hover(
		function () {
			$(this).animate({opacity:'1'}, 2000);
			console.log("all done animating");
		},
		function () {
			$(this).animate({opacity:'0'});
			console.log("All done un-animating");
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
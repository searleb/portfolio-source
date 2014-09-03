//= require jquery
//= require velocity
//= require d3
//= require trianglify.min
//= require init-trianglify
//= require count-up
//= require coffee-buyer
//= require_tree .

$(document).ready(function(){
	var height = $(window).height();
		$('#background').css({
			'min-height': height
		});
	$('body').velocity("fadeIn", { duration: 1500 });
});
var svg = svg || {};
svg.t = new Trianglify({
	noiseIntensity: 0,
});

svg.draw = function (){
	svg.width = $(document).width();
	svg.height = $(document).height();
	svg.pattern = svg.t.generate(svg.width, svg.height);
	$('#background').css({
		'background': svg.pattern.dataUrl
	});
	$('#contact').css({
		'background': svg.pattern.dataUrl
	});
};

$(document).ready(function(){
	svg.draw();
});
$(window).resize(function() {
 svg.draw();
});

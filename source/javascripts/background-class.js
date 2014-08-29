// $(document).ready(function() {
// 	if ($.browser.mobile === true) {
// 		console.log('false')
// 		$('#background').addClass('mobile-wrapper');
// 	} else {
// 	console.log('true');
// 	};
// });

$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");

    if (isMobile.matches) {
        $('#background').addClass('mobile-wrapper');
    }
 });

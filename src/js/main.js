$(function() {

	$(".owl").owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		navigation:true,
		pagination: true,
		singleItem : true,
		autoHeight : true,
		slideSpeed : 300
	});

	
	$('.catalogList__item:nth-child(3n+1)').css('marginLeft','0');  

});
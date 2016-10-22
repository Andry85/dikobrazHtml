$(function() {

	/*********************************************************/
						/* Start Slider  */
	/********************************************************/
	$(".owl").owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		navigation:true,
		pagination: true,
		singleItem : true,
		autoHeight : true,
		slideSpeed : 300
	});
	/*********************************************************/
						/* End Slider  */
	/********************************************************/

	
	 
	/*********************************************************/
						/* Start hack for IE8  */
	/********************************************************/
	$('.catalogList li:nth-child(3n+1)').css('marginLeft','0');
	/*********************************************************/
						/* End hack for IE8  */
	/********************************************************/


	/*********************************************************/
						/* Start Tabs  */
	/********************************************************/
	$('#list li a').on('click', function(e){
		e.preventDefault();
		var $tabs = $("#tabs");
		var $tabsList = $tabs.children();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		var $parent = $(this).parent('li');
		var $parentIndex = $parent.index();
		var $current = $tabsList[$parentIndex];
		$($current).addClass('active').siblings().removeClass('active');
	});
	/*********************************************************/
						/* End Tabs  */
	/********************************************************/
	 

});
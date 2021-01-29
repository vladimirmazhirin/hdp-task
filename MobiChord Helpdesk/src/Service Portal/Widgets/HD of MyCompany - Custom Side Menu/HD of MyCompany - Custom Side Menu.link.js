function link(scope, element, attrs, controller) {

	var sideMenu = element.find(".mycompany-sidemenu");
	var sideMenuBtn = element.find(".mycompany-sidemenu-btn");


	$("section.page").click(function(){
		sideMenu.removeClass("show-mycompany-side-menu");
		sideMenuBtn.removeClass("show-mycompany-side-menu-btn");
		element.find(".collapse.in").collapse('hide');
	});

	sideMenuBtn.click(function(event){
		event.stopPropagation();
		$(this).toggleClass("show-mycompany-side-menu-btn");
		sideMenu.toggleClass("show-mycompany-side-menu");
	});
}
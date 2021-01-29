(function() {
	var menu_id = $sp.getValue('sp_rectangle_menu'); // instance sys_id
	var gr = new GlideRecord('sp_instance_menu');
	gr.get(menu_id);
	data.menu = {};
	data.menu.items = $sp.getMenuItems(menu_id);
	
})();
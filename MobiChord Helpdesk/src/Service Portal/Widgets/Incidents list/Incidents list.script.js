(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.fields = options.fields || 'number,short_description,urgency,sys_created_on';
	data.title = options.title || 'Incidents';
	data.template = options.template || 'list-item-default';

	data.items = new HDPUtils().getRecentIncidents($sp);
})();
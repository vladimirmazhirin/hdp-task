(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.newIncident = {
		issue: '',
		urgency: '',
		description: '',
		watchlist: '',
		attachedFiles: [],
	};

	// var currentUser = gs.getUser();
	// gs.info(gs.getUser().getCompanyID());
	// gs.info(currentUser.getCompanyID());


	// var users = new GlideRecord('sys_user');
	// users.addQuery('sys_id', '6816f79cc0a8016401c5a33be04be441');
	// users.query();
	// users.next();

	// data.companyID = gs.getUser().getCompanyID();


	if (input && input.action === 'createIncident') {

		new HDPUtils().createIncident(input.newIncident);
		data.message = 'An Incident has been created';
	}
})();
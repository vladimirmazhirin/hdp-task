var HDPUtils = Class.create();
HDPUtils.prototype = {
	initialize: function () {},

	createIncident: function (incident) {
		var attachment = new GlideSysAttachment();
		var incidentGR = new GlideRecord('x_mobi_help_hd');
		incidentGR.newRecord();
		incidentGR.setValue('caller_id', gs.getUserID());
		incidentGR.setValue('short_description', incident.issue);
		incidentGR.setValue('urgency', incident.urgency);
		incidentGR.setValue('description', incident.description);
		incidentGR.setValue('watch_list', incident.watchlist);
		incidentGR.setValue('contact_type', 'self-service');
		incidentGR.setValue('assignment_group', 'fa9283e807caa410ebecf2ae7c1ed009');
		attachMultiple(incident.attachedFiles);
		incidentGR.insert();

		function attachMultiple(files) {
			files.forEach(function (file) {
				attachment.writeBase64(incidentGR, file.fileName, file.fileType, file.fileContent.split(',')[1]);
			});
		}

		
	},

	getRecentIncidents: function ($sp) {
		var items = [];
		var incidentGR = new GlideRecord('x_mobi_help_hd');
		incidentGR.setLimit(5);
		incidentGR.orderByDesc('sys_created_on');
		incidentGR.query();

		while (incidentGR.next()) {
			var obj = {};

			$sp.getRecordElements(obj, incidentGR, data.fields);

			switch (obj.urgency.value) {
				case '1':
					obj.urgencyIcon = 'exclamation-triangle';
					break;
				case '2':
					obj.urgencyIcon = 'exclamation-circle';
					break;
				default:
					obj.urgencyIcon = 'exclamation';
					break;
			}

			items.push(obj);
		}

		return items;
	},

	type: 'HDPUtils'
};
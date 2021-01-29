var x_mobi_help = x_mobi_help || {};

x_mobi_help.elipsisFilter = (function() {
	"use strict";

/* set your private variables and functions here. For example: 
	var privateVar = 0; 
	function private_function() {
		return ++privateVar;
	}
*/

/* Share variables between multiple UI scripts by adding them to your scope object. For example: 
	x_mobi_help.sharedVar = 0; 

 Then access them in your scripts the same way. For example: 
	function get_shared() {
		return x_mobi_help.sharedVar;
	}
*/
	var privat_addElipsisFilter = angular.module('elipsisFilter', []).filter(function (value, length) {
		if (value.length < length) {
			return value;
		}
		
		if(length) {
			length = parseInt(length);
			value = value.substr(0, length);
			
			var lastSpace = value.lastIndexOf(' ');
			
			if (lastSpace != -1) {
				if (value.charAt(lastSpace - 1) == '.' || value.charAt(lastSpace - 1) == ',') {
					value = value.substr(0, lastSpace);
				}
			}
		}
		return value + ' ...';
	});
	return {

/* set your public API here. For example:
		incrementAndReturnPrivateVar: function() {
			return private_function();
		},
*/
		type:  "elipsisFilter",
		
		addElipsisFilter: function() {
			return privat_addElipsisFilter;
		}
		
	};
})();

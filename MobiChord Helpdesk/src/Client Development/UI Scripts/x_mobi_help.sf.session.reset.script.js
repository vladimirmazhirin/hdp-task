var x_mobi_help = x_mobi_help || {};

x_mobi_help.sf.session.reset = (function() {
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

	return {

/* set your public API here. For example:
		incrementAndReturnPrivateVar: function() {
			return private_function();
		},
*/
		type:  "sf.session.reset"
	};
})();

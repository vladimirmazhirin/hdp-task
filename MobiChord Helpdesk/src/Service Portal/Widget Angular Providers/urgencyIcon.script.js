function() {
	return {
		template: '<span class="fa fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-{{icon}} fa-stack-1x fa-inverse"></i></span>',
		restrict: 'E',
		replace: true,
		scope: {
			icon: '='
		}
	}
}
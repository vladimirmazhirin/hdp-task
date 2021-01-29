function($scope) {

	var c = this;

	$scope.$watch('data.menu.items', function() {
		$scope.visibleItems = [];
		if ($scope.data.menu.items) {
			for (var i in $scope.data.menu.items) {
				var item = $scope.data.menu.items[i];
				if (item.items && !c.options.hide_link_menu_items){
					$scope.visibleItems.push(item);
				}
				if(item.scriptedItems && item.scriptedItems.count != 0 && !c.options.hide_scripted_filtered_lists){
					$scope.visibleItems.push(item);
				}
			}
		}
	}, true);
}
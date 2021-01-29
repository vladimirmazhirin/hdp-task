api.controller = function ($scope, spUtil, $http) {
  var c = this;

  $scope.watch_list = {
    displayValue: c.data.displayValue,
    value: c.data.value,
    name: 'watch_list'
  };

  $scope.$on("field.change", function (evt, parms) {
    if (parms.field.name == 'watch_list') {
      c.data.value = parms.newValue;
    }

  });

  $scope.save = function () {
    c.data.watchList = $scope.watch_list.value;
    c.server.update().then(function () {

      spUtil.recordWatch($scope, c.data.table, "sys_id=" + c.data.sys_id, function (name, data) {
        if (name.name == 'record.updated' && data.operation == 'update') {
          $scope.watch_list.value = data.record.watch_list.value;
          $scope.watch_list.displayValue = data.record.watch_list.display_value;
          $scope.$apply();
        }
      });
    });
  };
};
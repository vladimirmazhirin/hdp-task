api.controller = function ($scope, spUtil, $rootScope, glideUserSession) {
  /* widget controller */
  var c = this;

  c.submitting = false;

  $scope.watchlist = {
    value: c.data.newIncident.sys_id,
    name: 'watchlist'
  };

  $scope.$on("field.change", function (evt, parms) {
    if (parms.field.name == 'watchlist')
      c.data.newIncident.watchlist = parms.newValue;
  });

  c.attachFiles = function (files) {
    c.data.newIncident.attachedFiles = files.map(function (file) {
      var obj = {};
      obj.fileName = file.name;
      obj.fileType = file.type;

      var reader = new FileReader();
      reader.onload = function (e) {
        obj.fileContent = e.target.result;
      };
      reader.readAsDataURL(file);
      return obj;
    });
  };

  c.submit = function () {
    if (c.isValid()) {
      spUtil.addErrorMessage('Fill required fields');
      return;
    }
    c.submitting = true;
    c.data.action = 'createIncident';

    c.server.update().then(function () {
      c.submitting = false;
      spUtil.addInfoMessage(c.data.message);
    });
  };

  // var uCompanyid = c.data.companyID;
  // var pCompanyid = $rootScope.portal.u_company;

  // console.log(uCompanyid);
  // console.log(pCompanyid);

  // if(uCompanyid !== pCompanyid) {
  //   window.location = 'http://google.com';
  // }

  c.isValid = function () {
    return c.data.newIncident.issue === '' || c.data.newIncident.urgency === '' || c.data.newIncident.description === '';
  };
};
function ($rootScope, $scope, snRecordWatcher, spUtil, $location, $uibModal, cabrillo, $timeout, $window) {

	$scope.collapse = function() {
		$rootScope.$emit('sp-navbar-collapse');
	}

	$scope.avatarProfile = {
		userID: $scope.user.sys_id,
		name: $scope.user.name,
		initials: $window.NOW.user_initials
	};

	if ($window.NOW.user_avatar) {
		$scope.avatarProfile.userImage = $window.NOW.user_avatar;
	}

	if (cabrillo.isNative()) {
		if ($window.innerWidth < 767) {
			$scope.isViewNative = true;
		} else {
			$scope.isViewNativeTablet = true;
		}
	}


	$scope.openPopUp = function() {
		var url = "$chat_support.do?queueID=" + $scope.data.connect_support_queue_id;
		var popup = window.open (url, "popup", "width=900, height=600");
	};

	$scope.openLogin = function () {
		$scope.modalInstance = $uibModal.open({
			templateUrl: 'modalLogin',
			scope: $scope
		});
	};

	var xsScreenSize = isXSScreenSize();
	$scope.showXSAvatar = isXSScreenSize();
	$scope.showAvatar = !isXSScreenSize();

	$scope.isAgentChatConfigured = g_has_agent_chat_config;

	angular.element($window).on('resize', function () {
		if(xsScreenSize !== isXSScreenSize() && (!$scope.showXSAvatar || !$scope.showAvatar)){
			$scope.showXSAvatar = true;
			$scope.showAvatar = true;
		}
	});


	function isXSScreenSize() {
		return $window.matchMedia('(max-width: 767px)').matches;
	}

	$rootScope.$on('sp.avatar_changed', function(evt, obj) {
		$scope.userID = "";
		$scope.newAvatarId = obj.newAvatarId;
		$timeout(function(){
			$scope.userID = $scope.user.sys_id;
			$("#profile-dropdown .sub-avatar").css("background-image", 'url("' + $scope.newAvatarId + '.iix?t=small")');
		});
	});

	$scope.isHomepage = function() {
		if (!$scope.page.id)
			return true;

		if ($scope.page.id == $scope.portal.homepage_dv)
			return true;

		return false;
	};
}
		
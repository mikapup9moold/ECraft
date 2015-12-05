(function() {
	var app = angular.module('merch-directives', []);

	app.directive('merchTabs', function() {
		return {
			restrict : 'E',
			templateUrl : 'merch-menu.html',
			controller : function() {
				this.tab = "none";
				this.setTab = function(current) {
					this.tab = current;
					console.log(this.tab);
				};
				header.isSet = function(currentTab) {
					return this.tab === currentTab;
				};				
			},
			controllerAs : 'tab'
		};
	});

})();
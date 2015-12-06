(function() {
	var app = angular.module('head-directives', []);

	app.directive('headerMenu', function() {
		return {
			restrict : 'A',
			templateUrl : 'header-menu.html',
			controller : function() {
				this.tab = 'none';
				this.setTab = function(current) {
					this.tab = current;
					console.log(this.tab);
				};
				this.isSet = function(currentTab) {
					return this.tab === currentTab;
				};					
			},
			controllerAs : 'menu'
		};
	});

	app.directive('merchTabs', function() {
		return {
			restrict : 'A',
			templateUrl : 'merch-menu.html',
			controller : function() {
				this.tab = "none";
				this.setTab = function(current) {
					this.tab = current;
					console.log(this.tab);
				};
				this.isSet = function(currentTab) {
					console.log(this.tab + " is set.")
					return this.tab === currentTab;
				};				
			},
			controllerAs : 'tab'
		};
	});

})();
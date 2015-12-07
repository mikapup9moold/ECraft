(function() {
	var app = angular.module('eStore', ['head-directives']);
	app.controller('CraftApp', function() {
		var site = this;
		site.menu = {  "Home"    : 'index.html',
			 	  		 "About"   : 'about.html',
			   	  		 "FAQ"     : 'faq.html',
			 	  		 "Contact" : 'contact.html'
		};
		site.items = { "Pictures" : "images/picture-menu-icon.png",
				   		   "Jewelry": "images/jewelry-menu-icon.png",
				   "Greeting Cards" : "images/gcard-menu-icon.png"
		};

	});

	app.controller('ShowcaseController', function() {
		var showcase = this;
		showcase.items = [];
		showcase.which = function() {
			console.log(showcase.tab + " is the showcase.");
			return showcase.tab;
		};
	});

	app.controller('StoreController', function() {
		var store = this;
		store.products = [];
	});
})();


//http://localhost:90/
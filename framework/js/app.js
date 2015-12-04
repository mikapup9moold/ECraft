(function() {
	var app = angular.module('eStore', []);
	app.controller('SiteHeader', function() {
		var header = this;
		header.menu = {  "Home"    : 'index.html',
			 	  		 "About"   : 'about.html',
			   	  		 "FAQ"     : 'faq.html',
			 	  		 "Contact" : 'contact.html'
		};
		header.items = { "Pictures" : "images/menu1-200.jpg",
				   		   "Bangles": "images/bang1-200.jpg",
				   "Greeting Cards" : "images/twoBird-200.jpg"
		};
		header.tab = 
	});

	app.controller('ShowcaseController', function() {
		var showcase = this;
		showcase.items = [];
	});

	app.controller('StoreController', function() {
		var store = this;
		store.products = [];
	});
})();
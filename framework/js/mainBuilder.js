var header = {
	"title"   : "Eriginal Crafts",
	"blurb"   : "Authentic handmade Japanese crafts made from luxurious yuzen-washi paper",
	"image"   : "images/header3.jpg",
	"menu"	  : { "Home"    : 'index.html',
			 	  "About"   : 'about.html',
			   	  "FAQ"     : 'faq.html',
			 	  "Contact" : 'contact.html'
			    },
	"imgMenu" : { "Pictures"       : ["images/menu1.jpg", 'pictures.html'],
				  "Jewelery"       : ["images/menu1.jpg", 'jewelery.html'],
				  "Greeting Cards" : ["images/menu1.jpg", 'greetingcards.html']
				},
	"display" : function () {
		var formattedTitle  = HTMLheaderTitle.replace("%data%", header.title);
		var formattedComplete = HTMLheaderComplete.replace("%title%", formattedTitle);
		var formattedBlurb  = HTMLheaderBlurb.replace("%data%", header.blurb);
		formattedComplete = formattedComplete.replace("%blurb%", formattedBlurb);
		var formattedImage  = HTMLheaderImage.replace("%data%", header.image);
		formattedComplete = formattedComplete.replace("%image%", formattedImage);
		formattedComplete = formattedComplete.replace("%menu%", HTMLheaderMenu);
		formattedComplete = formattedComplete.replace("%imgMenu%", HTMLpictureMenu);
		$("#header").append(formattedComplete);
		var item = null;
		for (item in header.menu) {
			var formattedItem = HTMLmenuItem.replace("%data%", item);
			var formattedMenu = formattedItem.replace("%link%", header.menu[item]);
			$("#menu").append(formattedMenu);
		}
		for (item in header.imgMenu) {
			var formattedItem1 = HTMLpictureItem.replace("%text%", item);
			formattedItem1 = formattedItem1.replace("%link%", header.imgMenu[item][1]);
			formattedItem1 = formattedItem1.replace("%image%", header.imgMenu[item][0]);
			$("#imgMenu").append(formattedItem1);
		}

	}
};

var imurl = "images/menu1.jpg";

/**Currently each item will only have 1 image*/
var item = {name:{images	 : ['url','url'],
				 description : 'description',
				 price		 : 'price'}
};

var bang1 = {name		 : 'name',
			 images		 : 'images/bang1.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang2 = {name		 : 'name',
			 images		 : 'images/bang2.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang3 = {name		 : 'name',
			 images		 : 'images/bang3.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang4 = {name		 : 'name',
			 images		 : 'images/bang4.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang5 = {name		 : 'name',
			 images		 : 'images/bang5.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang6 = {name		 : 'name',
			 images		 : 'images/bang6.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang7 = {name		 : 'name',
			 images		 : 'images/bang7.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang8 = {name		 : 'name',
			 images		 : 'images/bang8.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang9 = {name		 : 'name',
			 images		 : 'images/bang9.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang10 = {name		 : 'name',
			 images		 : 'images/bang10.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var bangles = [
	bang1, bang2, bang3, bang4, bang5, bang6, bang7, bang8, bang9, bang10
];

var jewelery = {

};

var items_001 = {
	pic:imurl, pic1:imurl, pic2:imurl, pic3:imurl, pic4:imurl,
	pic5:imurl, pic6:imurl, pic7:imurl, pic8:imurl, pic9:imurl
}

var showcase = function(items) {
	var holder = [];
	for(image in items) {
		var formattedItem = HTMLshowcaseItem.replace("%name%", image);
		formattedItem = formattedItem.replace("%url%", items[image]);
		holder.push(formattedItem);
	}
	var formattedShowcase = HTMLshowcase.replace("%data%", holder.join(""));
	return formattedShowcase;
}

var individual = function() {

}

header.display();

$("#showcase").append(showcase(items_001));

function menuDisplay() {
	
}

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
				  "Bangles"        : ["images/bang1.jpg", 'bangles'],
				  "Greeting Cards" : ["images/twoBird.jpg", 'cards']
				},
	"display" : function () {
		var formattedTitle  = HTMLheaderTitle.replace("%data%", header.title);
		var formattedComplete = HTMLheaderComplete.replace("%title%", formattedTitle);
		var formattedBlurb  = HTMLheaderBlurb.replace("%data%", header.blurb);
		formattedComplete = formattedComplete.replace("%blurb%", formattedBlurb);
		var formattedImage  = HTMLheaderImage.replace("%data%", header.image);
		formattedImage = formattedImage.replace("%set%", srcsetize(header.image.toString(), 5));
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
			formattedItem1 = formattedItem1.replace("%set%", srcsetize(header.imgMenu[item][0].toString(), 5));
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
			 images		 : 'images/bang1-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang2 = {name		 : 'name',
			 images		 : 'images/bang2-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang3 = {name		 : 'name',
			 images		 : 'images/bang3-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang4 = {name		 : 'name',
			 images		 : 'images/bang4-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang5 = {name		 : 'name',
			 images		 : 'images/bang5-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang6 = {name		 : 'name',
			 images		 : 'images/bang6-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang7 = {name		 : 'name',
			 images		 : 'images/bang7-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang8 = {name		 : 'name',
			 images		 : 'images/bang8-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang9 = {name		 : 'name',
			 images		 : 'images/bang9-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};
var bang10 = {name		 : 'name',
			 images		 : 'images/bang10-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var bangles = [
	'bang', bang1, bang2, bang3, bang4, bang5, bang6, bang7, bang8, bang9, bang10
];

var jewelery = {

};

var card1 = {name		 : 'Anime Girl',
			 images		 : 'images/aGirl-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var card2 = {name		 : 'Lunar Crane',
			 images		 : 'images/crane-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var card3 = {name		 : 'Napping Cockatiel',
			 images		 : 'images/oneBird-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var card4 = {name		 : 'Niwa Tori',
			 images		 : 'images/twoBird-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var card5 = {name		 : 'Golden Robin',
			 images		 : 'images/oneRobin-200.jpg',
			 description : 'description',
			 price		 : '$19.99'
};

var cards = [
	'card', card1, card2, card3, card4, card5
];

var test = 'images/bang1.jpg';

var srcsetize = function(link, x) {
	var set = [];
	var w = 200;
	var split = link.split(".");
	for(i = 0; i < x; i++) {
		var num = w.toString();
		var str = split[0] + "-" + num + "." + split[1] + " " + num + "w" + ", ";
		set.push(str);
		w += 200;
	}
	set = set.join("");
	return set.substring(0, set.length - 2);
}

console.log(srcsetize(test, 2));

var showcase = function(items) {
	var holder = [];
	for(i = 1; i < items.length; i++) {
		var formattedItem = HTMLshowcaseItem.replace("%name%", items[i].name);
		formattedItem = formattedItem.replace("%url%", items[i].images);
		formattedItem = formattedItem.replace("%identity%", items[0] + i);
		holder.push(formattedItem);
	}
	var formattedShowcase = HTMLshowcase.replace("%data%", holder.join(""));
	return formattedShowcase;
}

var individual = function(item) {
	$(".individual").remove();
	var split = item.images.split("20");
	var str = split[0] + "80" + split[1];
	var formattedImage = HTMLindivImage.replace("%url%", str);
	var formattedDescrip = HTMLindivDescrip.replace("%desc%", item.description);
	var formattedHolder = HTMLindivHolder.replace("%data%", formattedImage + formattedDescrip);
	$("#individual").append(formattedHolder);
}

header.display();

// $("#showcase").append(showcase(bangles));

//Global variable keeping track of he current showcase display
var current = "";

/*Put into the showcase varialbe as a function*/
function showcaseDisplay(items) {
	if (current !== items[0]) {
		current = items[0];
		$(".showcase").remove();
		$("#showcase").append(showcase(items)).hide().slideDown();
	}
}

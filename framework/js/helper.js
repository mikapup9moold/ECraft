/*Site Header*/
var HTMLheaderTitle = '<h1 class="title">%data%</h1>';
var HTMLheaderBlurb = '<h2 class="blurb mobGone">%data%</h2>';
var HTMLheaderImage = '<img src="%data%" srcset="%set%" class="header behind">';
var HTMLheaderMenu = '<h3 class="menu"><u1 id="menu" class="flex-box"></u1></h3>';
var HTMLmenuItem = '<li class="flex-item"><span><a href=%link% class="menu">%data%</a></span></li>';
var HTMLpictureMenu = '<u1 id="imgMenu" class="flex-box imgMenu"></u1>';
var HTMLpictureItem = '<li class="flex-item button" onclick="showcaseDisplay(%link%)"><span><h4 class="hide">%text%</h4><img src="%image%" srcset="%set%" class="small"></span></li>';
var HTMLheaderComplete = '<div class="col-12 heading">%image%<div class="col-6 mob">%title%</div><div class="col-12 rectangle container"><div class="col-7 mob">%blurb%%menu%</div><div class="col-5 mob">%imgMenu%</div></div></div>';

/*Showcase menu horizontal*/
var HTMLshowcaseItem = '<div class="col-1 showItem"><img src="%url%" srcset="" class="showImage" onclick="individual(%identity%)"><h5>%name%</h5></div>';
var HTMLshowcase = '<div class="col-12 showcase container">%data%</div>';

/*Individual item display w/description*/
var HTMLindivImage = '<div class="col-6"><div class="col-12 indivImageCont"><img src="%url%" srcset="" class="indivImage"></div></div>';
var HTMLindivDescrip = '<div class="col-6"><div class="col-12"><p>%desc%</p></div></div>';
var HTMLindivHolder = '<div class="col-12 individual container">%data%</div>';
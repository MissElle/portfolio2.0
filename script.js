﻿//============================================//
//Wireframe javascript - portfolio 2.0
//============================================//
// This holds global variables//

var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

var clickEvent = false; //This will determine if the menu should be opened or closed

var imgRatio = 0; //This will be set by clicking figure tags openImageBox() and called on with detectAspectRatio()
var windowRatio = window.innerWidth/window.innerHeight;

//This is image data that will be pulled to fill in the image pop-up box

var emoticons = ['¯\_(ツ)_/¯', 'O_O', '◉_◉', 'ಠ‿↼', '^_^', '=^.^=', '•ﺑ•', '◕ω◕', '｡◕ ‿ ◕｡', '(¬‿¬)', '(°ℇ °)', '^ㅂ^', '(;¬_¬)', 'ޏ(ὸ.ό)ރ'];

var images = [
	{'name' : 'illustration-colors-peter-buxton',
	'location' : 'images/illustration-colors-peter-buxton.jpg',
	'locationSmall' : 'images/illustration-colors-peter-buxton-400.jpg',
	'description' : '<h1>Peter Buxton</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Based upon the true Peter Buxton who helped take down one of the most racist "studies" conducted under the name of medicine.</p>'},
	{'name' : 'test',
	'location' : 'images/test-sad-dog.jpg',
	'description' : '<p>This is a test paragraph</p><p>this is a second test paragraph</p>'},
	{'name' : 'notSo',
	 'location' : 'images/test-sad-cat.jpg',
	 'description' : '<p>This is a test paragraph</p><p>this is a second test paragraph</p>'
	}];

var brokenLink = {
	'location' : 'images/shrug.svg',
	'description' : '<h2>Uh Oh!<br> A Broken Link!</h2> <br><p>It looks like the artist programmed this site wrong! Silly Artist, thinking she&#39;s a programmer...</p>'
};

//============================================//
//These are all the event listeners

window.addEventListener('scroll', stickyHeader);
document.getElementById('hamburger').addEventListener('click', menuFunctions);
window.addEventListener('load', isMobile);
window.addEventListener('load', loadEmoticons);
window.addEventListener('resize', detectAspectRatio);
window.addEventListener('resize', resetClickEvent);
document.getElementById('cross').addEventListener('click', closeImageBox);

var figures = document.getElementsByTagName('figure');
for(var i=0; i<figures.length; ++i){
	figures[i].addEventListener('click', openImageBox);
}
//============================================//
//This function helps the sticky header scroll foward and hide appropriately

function stickyHeader() {
	var header =document.getElementById('header');
	var distance = window.pageYOffset;
	
	if(distance <= previousScroll && distance >= 1) {
		header.className = 'sticky-header';
	}else{
		header.className = 'static-header';
	}
	
	previousScroll=window.pageYOffset; //This will be used to see if the user "scrolls up" by comparing it to the previous scroll number
}

//============================================//
//This function handles the opening and closing behaviors of the nav menu with the hamburger stylings

function menuFunctions(){
	var navMenu = document.getElementById('navMenu');
	var navUl = document.getElementById('navUl');
	var hamburger = document.getElementById('hamburger');
	var menuDivs = hamburger.getElementsByTagName('div');
	
	if(clickEvent === false){
		navMenu.className = 'menuShow';
		navUl.className = 'ulShow fade-in';
		hamburger.className = 'clickEvent';
		
		clickEvent = true;
	} else if (clickEvent === true){
		navMenu.className='';
		navUl.className = 'fade-out';
		hamburger.className = '';
		
		clickEvent = false;
	}
	
}

//============================================//
//will reset the clickEvent variable and all classes that were handled so it loads properly on resizing

function resetClickEvent() {
	var navMenu = document.getElementById('navMenu');
	var navUl = document.getElementById('navUl');
	var hamburger = document.getElementById('hamburger');

	if (window.outerWidth > 610){
		navMenu.className = '';
		navUl.className = '';
		hamburger.className = '';
		
		clickEvent = false;	
	}

}
			
//============================================//
//This detects if the device is mobile and changes the handling of figcaptions

function isMobile() {
	var figcaptions = document.getElementsByTagName('figcaption');
	var figures = document.getElementsByTagName('figure');
	
	for(var i=0; i<figcaptions.length; ++i) {
		if(/iPhone|iPad|iPod|Android| Blackberry|Opera Mini|IEMobile/i.test(navigator.userAgent)){
			figures[i].style.height = '21em';
			figcaptions[i].className = 'mobile';
		}else {
			figures[i].style.height = '15em';
			figcaptions[i].className = 'not-mobile';
		}
	}
}


//isMobile() test mostly derived from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

//============================================//
//This function will close the #image-box

function closeImageBox() {
	var imgBox = document.getElementById('dark-box');
	imgBox.className = 'fade-out';
}

//============================================//
//This function opens the #image-box with the pulled data 

function openImageBox(el) {
	var imgBox =document.getElementById('dark-box');
	var elName = this.id;
	
	for (var i=0; i<images.length; ++i){
		var imageName = images[i].name;
		var changeoutText = document.getElementById('changeout-text');
		var changeoutImage = document.getElementById('changeout-image');
		
		if (imageName.match(elName)){
			if (elName === imageName){
				if (window.outerWidth < 610){
					changeoutImage.src = images[i].locationSmall;
				}else {
					changeoutImage.src = images[i].location;
				}
				changeoutText.innerHTML = images[i].description;
				
				imgRatio = changeoutImage.naturalWidth/changeoutImage.naturalHeight;
				
			}else {
				changeoutImage.src = brokenLink.location;
				changeoutText.innerHTML = brokenLink.description;
				
				imgRatio = changeoutImage.naturalWidth/changeoutImage.naturalHeight;
				
			}
		}
	}
	
	detectAspectRatio();
	
	imgBox.style.display = 'flex';
	imgBox.className = 'fade-in';
	
}

//============================================//
//This function formats the #image-box depending on img natural aspect ratio compared to the window aspect ratio

function detectAspectRatio() {
	var docWidth = window.outerWidth;
	var docHeight = window.outerHeight;
	
	var descriptionSide = document.getElementById('description-side');
	var imageSide = document.getElementById('image-side');
	
	windowRatio = docWidth/docHeight;
	
	if(windowRatio >= imgRatio) {
		imageSide.style.height = '100%';
		imageSide.style.width = '70%';
		descriptionSide.style.width = '30%';
		descriptionSide.style.height = '100%';

	}else {
		imageSide.style.height = '70%';
		imageSide.style.width = '100%';
		descriptionSide.style.width ='100%';
		descriptionSide.style.height = '30%';
	}
	
	console.log(imgRatio);
}
	

//============================================//
//This function loads a random emoticon into the emoticon box

function loadEmoticons() {
		var emoticonSwap = document.getElementById('emoticon-swap');
		var i = Math.floor(Math.random()*emoticons.length);
	
		emoticonSwap.innerHTML = '<p>' + emoticons[i] +'</p>';
	
}
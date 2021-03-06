﻿//============================================//
//script.js - portfolio 2.0
//============================================//
// This holds global variables//

var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

var clickEvent = false; //This will determine if the menu should be opened or closed

//============================================//
//These are all the event listeners

window.addEventListener('scroll', stickyHeader);
document.getElementById('hamburger').addEventListener('click', menuFunctions);
document.getElementById('changeout-image').addEventListener('load', detectAspectRatio);
window.addEventListener('resize', detectAspectRatio);
window.addEventListener('load', loadEmoticons);
window.addEventListener('resize', resetClickEvent);
document.getElementById('cross').addEventListener('click', closeImageBox);
window.addEventListener('hashchange', handleBackButton);
document.getElementById('submit').addEventListener('click', formDataConfirm);
window.addEventListener('load', loadFooterCopyright);

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
	var mainDiv = document.getElementById('main');
	var footerTag = document.getElementById('footer');
	var htmlTag = document.getElementById('html');
	
	if(clickEvent === false){
		navMenu.className = 'menuShow';
		navUl.className = 'ulShow fade-in';
		hamburger.className = 'clickEvent';
		mainDiv.style.pointerEvents = 'none';
		footerTag.style.pointerEvents = 'none';
		htmlTag.style.overflow = 'hidden';
		
		clickEvent = true;
	} else if (clickEvent === true){
		navMenu.className='';
		navUl.className = 'fade-out';
		hamburger.className = '';
		mainDiv.style.pointerEvents = '';
		footerTag.style.pointerEvents = '';
		htmlTag.style.overflow = '';
		
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
//This function formats the #image-box depending on img natural aspect ratio compared to the window aspect ratio

function detectAspectRatio() {
	var docWidth = window.innerWidth;
	var docHeight = window.innerHeight;
	
	var imgWidth = document.getElementById('changeout-image').naturalWidth;
	var imgHeight = document.getElementById('changeout-image').naturalHeight;
	var descriptionSide = document.getElementById('description-side');
	var imageSide = document.getElementById('image-side');
	var changeoutText = document.getElementById('changeout-text');
	var changeoutImage = document.getElementById('changeout-image');
	var para = changeoutText.querySelector('p');
	
	var windowRatio = docWidth/docHeight;
	var windowRatioModified = windowRatio - .35;
	var imageRatio = imgWidth/imgHeight;
	
	if(windowRatioModified >= imageRatio) {
		imageSide.style.height = '90%';
		imageSide.style.width = '60%';
		changeoutText.style.textAlign = 'right';
		changeoutText.style.paddingLeft = '70%';
		changeoutText.style.paddingTop = '';
		para.style.textAlign = 'right';
	}else {
		imageSide.style.height = '67%';
		imageSide.style.width = '86%';
		changeoutText.style.textAlign = 'left';
		changeoutText.style.paddingLeft = '';
		changeoutText.style.paddingTop = document.getElementById('image-side').clientHeight + 5 + 'px';
		para.style.textAlign = 'left';
	}
	console.log(windowRatioModified + ' ' + imageRatio);
}

//============================================//
//This function will close the #image-box

function closeImageBox() {
	var imgBox = document.getElementById('dark-box');
	imgBox.className = 'fade-out';
	var footerTag = document.getElementById('footer');
	var htmlTag = document.getElementById('html');
	var footerTag = document.getElementById('footer');
	var htmlTag = document.getElementById('html');
	var mainDiv = document.getElementById('main');
	var changeoutText = document.getElementById('changeout-text');
	var changeoutImage = document.getElementById('changeout-image');
	
	changeoutText.innerHTML = '';
	changeoutImage.src = '';
	mainDiv.style.pointerEvents = '';
	footerTag.style.pointerEvents = '';
	htmlTag.style.overflow = '';
}

//============================================//
//This function opens the #image-box with the pulled data 

function openImageBox(el) {
	var imgBox =document.getElementById('dark-box');
	var elName = this.id;
	
	var cross = document.getElementById('cross');
	var footerTag = document.getElementById('footer');
	var htmlTag = document.getElementById('html');
	var mainDiv = document.getElementById('main');
	
	if(/Android/i.test(navigator.userAgent)){
		location.hash = '#image-open';
		cross.style.display = 'none';
	}
		 
	for (var i=0; i<images.length; ++i){
		var imageName = images[i].name;
		
		var changeoutText = document.getElementById('changeout-text');
		var changeoutImage = document.getElementById('changeout-image');
		
		if (imageName.match(elName)){
			if (elName === imageName){
				if (window.outerWidth > 610){
					changeoutImage.src = images[i].sourceSmall;
				}else{
					changeoutImage.src = images[i].source;
				}
				changeoutText.innerHTML = images[i].title + images[i].description;
			}else {
				changeoutImage.src = brokenLink.source;
				changeoutText.innerHTML = brokenLink.description;
			}
		}
	}
	
	mainDiv.style.pointerEvents = 'none';
	footerTag.style.pointerEvents = 'none';
	htmlTag.style.overflow = 'hidden';
	imgBox.style.display = 'flex';
	imgBox.className = 'fade-in';
}

//============================================//
//This function prevents back button behaviors when the image box is open

function handleBackButton(event){
	var imgBox =document.getElementById('dark-box');
	
	if(!location.hash){
		closeImageBox();
	}
}

//============================================//
//This function loads a random emoticon into the emoticon box

function loadEmoticons() {
		var emoticonSwap = document.getElementById('emoticon-swap');
		var i = Math.floor(Math.random()*emoticons.length);
	
		emoticonSwap.innerHTML = '<p>' + emoticons[i] +'</p>';
}

//============================================//
//All arrays that hold generated content are here

function formDataConfirm() {
	var contactMe = document.getElementById('contactMe');
	var confirmWin = document.getElementById('confirmation-window');
	
	confirmWin.className= '';
	
	setTimeout(function(){
		confirmWin.className = 'hide';
	}, 7000);
	
	event.preventDefault();
}

//============================================//
//All arrays that hold generated content are here

function loadFooterCopyright(){
	var copyrightHolder = document.getElementById('copyright-holder');
	var copyrightLink = document.createElement('a');
	copyrightLink.setAttribute('href',"http://www.polyentertainment.com/");
	copyrightLink.setAttribute('alt',"Copyright Poly entertainment. Please click here to visit company web page!");
	
	copyrightLink.innerHTML = copyrightName;
	
	copyrightHolder.appendChild(copyrightLink);
}

//============================================//
//All arrays that hold generated content are here

//emoticons to be generated by name in Header

var emoticons = ['¯\_(ツ)_/¯', 'O_O', '◉_◉', 'ಠ_ಠ', '^_^', '=^.^=', '•ﺑ•', '◕ω◕', '｡◕ ‿ ◕｡', '(¬‿¬)', '(°ℇ °)', '^ㅂ^', '(;¬_¬)', 'ޏ(ὸ.ό)ރ'];

var copyrightName = '<svg version="1.1" id="poly-entertainment" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 825 123" style="enable-background:new 0 0 825 123;" xml:space="preserve"><path d="M240.4,69c0.7,12.7-9,23.7-21.8,24.4s-23.7-9-24.4-21.8c-0.7-12.7,9-23.7,21.8-24.4c8.5-0.5,16.6,3.7,21,11l-33,10 c-0.3,2,0,4,0.6,5.9l40.2-12.2c-4.6-15.2-20.7-23.8-35.9-19.1s-23.8,20.7-19.1,35.9s20.7,23.8,35.9,19.1c13.2-4,21.7-16.8,20.2-30.5 L240.4,69z"/><path d="M232.5,71.4c-0.7,8.4-8.1,14.5-16.4,13.8c-8.4-0.7-14.5-8.1-13.8-16.4c0.5-6.2,4.8-11.4,10.7-13.2c2.3-0.7,4.7-0.8,7.1-0.4 c-7.3,0.5-12.7,3.5-15.5,10.8l29.4-9c-7.3-9.2-20.7-10.7-29.9-3.4c-9.2,7.3-10.7,20.7-3.4,29.9c7.3,9.2,20.7,10.7,29.9,3.4 c5.3-4.2,8.2-10.6,8-17.3L232.5,71.4z"/><path d="M288.2,95.7c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-19c0-11.7-9.5-21.2-21.2-21.2L259,55.4 c-2.8,0-2.9,0-2.9,2.9v37.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V64.5c0-2.9,0.5-3.1,1.7-3.1l9.2-0.1 c8.5,0,15.4,6.9,15.4,15.4L288.2,95.7z"/><path d="M296.4,95.6c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V76.8c0-15.9-12.9-28.8-28.8-28.8c0,0,0,0,0,0 c0,0-11.3,0-18.5,0c-4.1,0-6.4,1.9-6.4,6.6v41.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V57 c0-2.9,0-3.2,3-3.2l16.2,0.1c12.7,0,22.9,10.3,22.9,22.9L296.4,95.6z"/><path d="M394.7,63.4v32.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3l0.1-32.2c0-3.1,9.1-4.3,12.1,2.6l5.4-1.6 C413.1,51.9,395,55.1,394.7,63.4z"/><path d="M387,63.5v32.2c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V63.6c0-11.4,21.6-13.4,27.6,0.2l5.6-1.7 C418.3,42.6,387,44.9,387,63.5z"/><path d="M377.1,68.6c0.7,12.7-9,23.7-21.8,24.4c-12.7,0.7-23.7-9-24.4-21.8s9-23.7,21.8-24.4c8.5-0.5,16.6,3.7,21,11l-33,10 c-0.3,2,0,4,0.6,5.9l40.2-12.2c-4.6-15.2-20.6-23.8-35.8-19.3c-15.2,4.6-23.8,20.6-19.3,35.8S347,102,362.3,97.4 c13.2-4,21.7-16.7,20.3-30.4L377.1,68.6z"/><path d="M369.2,71c-0.7,8.4-8,14.6-16.4,13.9c-8.4-0.7-14.6-8-13.9-16.4c0.5-6.2,4.8-11.5,10.8-13.3c2.3-0.7,4.7-0.8,7.1-0.4 c-7.3,0.5-12.7,3.5-15.5,10.8l29.4-8.9c-7.3-9.2-20.7-10.7-29.9-3.4S330,74,337.3,83.2s20.7,10.7,29.9,3.4c5.3-4.2,8.2-10.6,8-17.4 L369.2,71z"/><path d="M437.3,37.9v57.7c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-52h17l-5.7-5.7L437.3,37.9z"/><path d="M443,30.4V8.4c0-4.7,0-6.5-6.5-6.6c-6.5-0.1-6.5,1.9-6.5,6.6v87.2c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3 V10.8c0-2.9,0-3.2,0.8-3.2s0.9,0.3,0.9,3.2v25.3h15.2l-5.6-5.6L443,30.4z"/><path d="M313.5,37.9v57.7c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-52h17l-5.7-5.7L313.5,37.9z"/><path d="M319.2,30.4V8.4c0-4.7,0-6.5-6.5-6.6c-6.5-0.1-6.5,1.9-6.5,6.6v87.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7 c0-0.1,0-0.2,0-0.3V10.8c0-2.9,0-3.2,0.8-3.2c0.8,0,0.9,0.3,0.9,3.2v25.3h15.2l-5.6-5.6L319.2,30.4z"/><path d="M511.5,59v36.7c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V56.5c0-4.7,0-6.5-6.5-6.6s-6.5,1.9-6.5,6.6 v39.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V59c0-2.9,0-3.2,0.8-3.2S511.5,56,511.5,59z"/><path d="M509.8,43.6v0.8c0.1,1.6-1.1,3-2.7,3.1c-1.6,0.1-3-1.1-3.1-2.7c0-0.2,0-0.3,0-0.5l0.1-3.3c0-4.7,0.1-6.5,6.6-6.5 s6.4,2,6.4,6.7v3.4c0.1,1.6-1.1,2.9-2.7,3c-1.6,0.1-2.9-1.1-3-2.7c0-0.1,0-0.2,0-0.3v-0.9c0-2.9,0-3.2-0.8-3.2 S509.8,40.7,509.8,43.6z"/><path d="M562.9,95.7c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-19c0-11.7-9.5-21.2-21.2-21.2l-13.7-0.1 c-2.8,0-2.9,0-2.9,2.9v37.3c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V64.5c0-2.9,0.5-3.1,1.7-3.1l9.2-0.1 c8.5,0,15.4,6.9,15.4,15.4L562.9,95.7z"/><path d="M571.1,95.6c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V76.8c0-15.9-12.9-28.8-28.8-28.8 c0,0-11.3,0-18.5,0c-4.1,0-6.4,1.9-6.4,6.6v41.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V57 c0-2.9,0-3.2,3-3.2l16.2,0.1c12.7,0,22.9,10.3,22.9,22.9L571.1,95.6z"/><path d="M617.5,95.6c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-19c0-11.7-6.5-21.2-18.2-21.2l-10.6-0.1 c-2.8,0-2.9,0-2.9,2.9v37.3c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V64.4c0-2.9,0.5-3.1,1.7-3.1l6.2-0.1 c8.5,0,12.4,6.9,12.4,15.4L617.5,95.6z"/><path d="M625.8,95.5c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V76.7c0-15.9-9.9-28.8-25.8-28.8 c0,0-8.3,0-15.5,0c-4.1,0-6.4,1.9-6.4,6.6v41.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V56.9 c0-2.9,0-3.2,3-3.2l13.2,0.1c12.6,0,19.9,10.3,19.9,22.9L625.8,95.5z"/><path d="M638.3,55.4c-3.6,0-7,1-10.1,2.8c1.1,1.6,2.1,3.3,2.8,5.2c2.2-1.4,4.7-2.1,7.3-2.2c8.5,0,12.4,6.9,12.4,15.4l0.2,19 c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-19C656.5,64.9,650,55.4,638.3,55.4z"/><path d="M638.9,47.9h-1.2c-5.2-0.1-10.3,1.5-14.5,4.5c1.6,1.3,3,2.8,4.2,4.4c3.1-1.9,6.7-2.9,10.3-3h1.3c12.6,0,19.9,10.3,19.9,22.9 l0.3,18.8c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V76.7C664.7,60.8,654.8,47.9,638.9,47.9z"/><path d="M720.9,68.6c0.7,12.7-9,23.7-21.8,24.4c-12.7,0.7-23.7-9-24.4-21.8c-0.7-12.7,9-23.7,21.8-24.4c8.5-0.5,16.6,3.7,21,11 l-33,10c-0.3,2,0,4,0.6,5.9l40.2-12.2c-4.6-15.2-20.6-23.9-35.8-19.3c-15.2,4.6-23.9,20.6-19.3,35.8s20.6,23.9,35.8,19.3 c13.2-3.9,21.7-16.7,20.4-30.4L720.9,68.6z"/><path d="M713,71c-0.7,8.4-8,14.6-16.4,13.9c-8.4-0.7-14.6-8-13.9-16.4c0.5-6.2,4.8-11.5,10.7-13.3c2.3-0.7,4.7-0.8,7.1-0.4 c-7.3,0.5-12.7,3.5-15.5,10.8l29.4-8.9c-7.3-9.2-20.7-10.7-29.9-3.4c-9.2,7.3-10.7,20.7-3.4,29.9s20.7,10.7,29.9,3.4 c5.3-4.2,8.2-10.6,8-17.4L713,71z"/><path d="M771.9,95.7c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-19c0-11.7-9.5-21.2-21.2-21.2l0,0l-13.6-0.1 c-2.8,0-2.9,0-2.9,2.9v37.3c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V64.5c0-2.9,0.5-3.1,1.7-3.1l9.2-0.1 c8.5,0,15.4,6.9,15.4,15.4L771.9,95.7z"/><path d="M780.1,95.6c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V76.8c0-15.9-12.9-28.8-28.8-28.8l0,0 c0,0-11.3,0-18.5,0c-4.1,0-6.4,1.9-6.4,6.6v41.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V57 c0-2.9,0-3.2,3-3.2l16.2,0.1c12.7,0,22.9,10.3,22.9,22.9L780.1,95.6z"/><path d="M799,38v57.7c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3v-52h17L816,38L799,38z"/><path d="M804.7,30.6V8.5c0-4.7,0-6.5-6.5-6.6s-6.5,1.9-6.5,6.6v87.2c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7 c0-0.1,0-0.2,0-0.3V11c0-2.9,0-3.2,0.8-3.2S799,8.1,799,11v25.3h15.2l-5.7-5.6L804.7,30.6z"/><path d="M492.1,95.5c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V53.6c0-4.7,0-6.5-6.5-6.6h-19.8 c-13.9,0-25.1,11.2-25.1,25.1s11.2,25.1,25.1,25.1h11.4v-5.7c-1.9,0-6.6-0.1-11.6-0.1c-10.5,0-19.1-8.5-19.1-19.1 s8.5-19.1,19.1-19.1l20,0c0.8,0,0.9,0.3,0.9,3.2L492.1,95.5z"/><path d="M484.8,95.5c-0.1,1.6,1.1,2.9,2.7,3c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V58.2c0-2.9-0.1-2.9-2.9-2.9h-16.3 c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h11.5v-5.9l-11.5,0.1c-6.3,0-11.4-5.1-11.4-11.4c0-6.3,5.1-11.4,11.4-11.4l11.8,0.2 c1.2,0,1.7,0.2,1.7,3.1L484.8,95.5z"/><path d="M38.2,2c0,0-11.3,0-18.5,0c-4.1,0-6.4,1.9-6.4,6.6v87.2c-0.2,1.6,1,3,2.5,3.1c1.6,0.2,3-1,3.1-2.5c0-0.2,0-0.4,0-0.6V11 c0-2.9,0-3.2,3-3.2l16.2,0.1c12.7,0.3,22.7,10.7,22.4,23.4c-0.3,12.3-10.1,22.2-22.4,22.4h-9.6v5.9h9.6C54.1,59.6,67,46.7,67,30.8 S54.1,1.9,38.2,2L38.2,2z"/><path d="M28.6,51.9h9c11.7,0,21.2-9.5,21.2-21.2S49.3,9.5,37.6,9.5l-13.7,0c-2.8,0-2.9,0-2.9,2.9v83.3c-0.1,1.6,1.1,2.9,2.7,3 c1.6,0.1,2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V18.5c0-2.9,0.5-3.1,1.7-3.1l9.2-0.1c8.5,0,15.4,6.9,15.4,15.4s-6.9,15.4-15.4,15.4h-9 L28.6,51.9z"/><path d="M73.8,49.2c-13.6,0-24.7,11.1-24.7,24.7s11.1,24.7,24.7,24.7s24.7-11.1,24.7-24.7c0,0,0,0,0,0 C98.5,60.2,87.4,49.2,73.8,49.2z M73.7,92.1c-10.3,0-18.6-8.3-18.6-18.6s8.3-18.6,18.6-18.6c10.3,0,18.6,8.3,18.6,18.6 S83.9,92.1,73.7,92.1L73.7,92.1z"/><path d="M73.7,56.7c-9.2,0-16.6,7.5-16.6,16.6S64.5,90,73.7,90s16.7-7.5,16.7-16.7l0,0C90.4,64.2,82.9,56.7,73.7,56.7z M74,83.7 c-5.8,0-10.5-4.7-10.5-10.6c0-5.8,4.7-10.5,10.6-10.5c5.8,0,10.5,4.7,10.5,10.5C84.6,79,79.8,83.7,74,83.7C74,83.7,74,83.7,74,83.7 L74,83.7z"/><path d="M108.3,11v84.7c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V8.5c0-4.7,0-6.5-6.5-6.6s-6.5,1.9-6.5,6.6v87.2 c-0.1,1.6,1.1,2.9,2.7,3s2.9-1.1,3-2.7c0-0.1,0-0.2,0-0.3V11c0-2.9,0-3.2,0.8-3.2S108.3,8.1,108.3,11z"/><path d="M122.9,56c0.1-1.7-1.1-3.2-2.8-3.3c-1.7-0.1-3.2,1.1-3.3,2.8c0,0.2,0,0.3,0,0.5l0.1,17.4c0,13.7,7.1,25.5,20.7,25.5 c2.3,0,4.6-0.3,6.8-1.1c0,5-1.1,9-8.2,9h-19.4l6.1,6.2h10.9c14.1,0,16.4-2.8,16.4-29.2c-2.1,5.2-6.3,8.7-12.8,8.7 c-10.3,0-14.6-8.7-14.6-19L122.9,56z"/><path d="M150.1,55.9c0.1-1.6-1.1-3-2.7-3.2c-1.6-0.1-3,1.1-3.2,2.7c0,0.2,0,0.3,0,0.5v17.6c0,5.8-0.7,10.6-6.6,10.6 s-6.6-4.7-6.6-10.6V56.1c0.1-1.7-1.2-3.3-2.9-3.4c-1.7-0.1-3.3,1.2-3.4,2.9c0,0.2,0,0.3,0,0.5v17.3c0,9.2,3.4,16.9,12.7,16.9 s12.6-7.7,12.6-16.9L150.1,55.9z"/><path d="M158.2,56.1c0.1-1.7-1.2-3.2-2.9-3.3s-3.2,1.2-3.3,2.9c0,0.1,0,0.2,0,0.4v17.4c0,2.8,0,17.8,0,22.2c0,12.2-3,19.5-15.8,19.5 h-11.3l6.1,6.2h5.2c20.1,0,22-16.2,22-25.6c0-3.6,0-15.5,0-22.2C158.2,73.5,158.2,56.1,158.2,56.1z"/></svg>';
//============================================//
//Wireframe javascript - portfolio 2.0
//============================================//
// This holds global variables//

var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

var clickEvent = false; //This will determine if the menu should be opened or closed

//This is image data that will be pulled to fill in the image pop-up box

var images = [
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

//The SVGs will be placed by the javascript. This way, if I ever want to redesign the svg later, I won't have to replace this graphic in every single page and I can keep doing SMIL animations
var hamMenu = '<svg id="hamburger-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>#top, #middle, #bottom {fill: #ffffff;}.transparent{fill: transparent;}</style></defs><rect id="top" y="5" width="50" height="8" rx="4" ry="4"/><animate id="topStart" href="#top" attributeName="y" from="5" to="21" dur=".1s" begin="start.click" fill="freeze"/><animateTransform id="topRotate" href="#top" attributeName="transform" type="rotate" from="0 25 25" to="-45 25 25"	dur=".1s" begin="topStart.end" fill="freeze"/><animateTransform id="topRotateBack" href="#top" attributeName="transform" type="rotate" from="-45 25 25" to="0 25 25" dur=".1s"	begin="end.click"	fill="freeze"/>	<animate id="topEnd" href="#top" attributeName="y" from="21" to="5" dur=".1s" begin="topRotateBack.end" fill="freeze"/><rect id="middle" y="21" width="50" height="8" rx="4" ry="4"/><animate id="middleWidthStart" href="#middle" attributeName="width" from="50" to="2" dur=".01s" begin="start.click + .1s" fill="freeze"/><animate id="middleXStart" href="#middle" attributeName="x" from="0" to="24" dur=".01s" begin="start.click + .1s" fill="freeze"/><animate id="middleWidthEnd" href="#middle" attributeName="width" from="2" to="50" dur=".01s" begin="end.click + .1s" fill="freeze"/><animate id="middleXEnd" href="#middle" attributeName="x" from="24" to="0" dur=".01s" begin="end.click + .1s" fill="freeze"/><rect id="bottom" y="37" width="50" height="8" rx="4" ry="4"/><animate id="bottomStart" href="#bottom" attributeName="y" from="37" to="21" dur=".1s" begin="start.click" fill="freeze"/><animateTransform id="bottomRotate" href="#bottom" attributeName="transform" type="rotate" from="0 25 25" to="45 25 25" dur=".1s" begin="bottomStart.end" fill="freeze"/><animateTransform id="bottomRotateBack" href="#bottom" attributeName="transform" type="rotate" from="45 25 25" to="0 25 25" dur=".1s" begin="end.click" fill="freeze"/><animate id="bottomEnd" href="#bottom" attributeName="y" from="21" to="37" dur=".1s" begin="bottomRotateBack.end" fill="freeze"/><rect id="end" y="0" x="0" width="0" height="0" class="transparent"/><animate id="endButton" href="#end" attributeName="width" from="50" to="0" dur=".01s" begin="end.click" fill="freeze"/><animate href="#end" attributeName="height" from="50" to="0" dur=".01s" begin="end.click" fill="freeze"/><animate href="#start" attributeName="width" from="0" to="50" dur=".01s" begin="endButton.end" fill="freeze"/><animate href="#start" attributeName="height" from="0" to="50" dur=".01s" begin="endButton.end" fill="freeze"/><rect id="start" class="transparent" y="0" x="0" width="50" height="50"/><animate id="startButton" href="#start" attributeName="width" from="50" to="0" dur=".01s" begin="start.click" fill="freeze"/><animate href="#start" attributeName="height" from="50" to="0" dur=".01s" begin="start.click" fill="freeze"/><animate href="#end" attributeName="width" from="0" to="50" dur=".01s" begin="startButton.end" fill="freeze"/><animate href="#end" attributeName="height" from="0" to="50" dur=".01s" begin="startButton.end" fill="freeze"/></svg>'

//============================================//
//These are all the event listeners

window.addEventListener('scroll', stickyHeader);
document.getElementById('hamburger').addEventListener('click', menuFunctions);
window.addEventListener('load', isMobile);
window.addEventListener('load', loadSVG);
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
	var distance = document.body.scrollTop;
	
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
	
	if(clickEvent === false){
		navMenu.className = 'menuShow';
		navUl.className = 'ulShow fade-in';
		
		clickEvent = true;
	} else if (clickEvent === true){
		navMenu.className='';
		navUl.className = 'fade-out';
		
		clickEvent = false;
	}
}

//============================================//
//will reset the clickEvent variable and all classes that were handled so it loads properly on resizing

function resetClickEvent() {
	var navMenu = document.getElementById('navMenu');
	var navUl = document.getElementById('navUl');

	if (document.body.clientWidth > 571.2){
		navMenu.className = 'menuShow';
		navUl.className = 'ulShow';
		
		clickEvent = false;	
	} else if (document.body.clientWidth <= 571.2){
		navMenu.className='';
		navUl.className ='';
		
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
//This function formats the #image-box depending on img natural aspect ratio compared to the window aspect ratio

function detectAspectRatio() {
	var docWidth = document.body.clientWidth;
	var docHeight = document.body.clientHeight;
	
	var imgWidth = document.getElementById('changeout-image').naturalWidth;
	var imgHeight = document.getElementById('changeout-image').naturalHeight;
	
	var descriptionSide = document.getElementById('description-side');
	var imageSide = document.getElementById('image-side');
	
	var windowRatio = docWidth/docHeight;
	var imageRatio = imgWidth/imgHeight;
	
	if(windowRatio >= imageRatio) {
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
}

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
				changeoutImage.src = images[i].location;
				changeoutText.innerHTML = images[i].description;
			}else {
				changeoutImage.src = brokenLink.location;
				changeoutText.innerHTML = brokenLink.description;
			}
		}
	}

	detectAspectRatio();
	imgBox.style.display = 'flex';
	imgBox.className = 'fade-in';
}

//============================================//
//This function loads all svg images into the page

function loadSVG() {
	var divMenu = document.getElementById('hamburger');
	hamburger.innerHTML = hamMenu;
}
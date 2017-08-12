//============================================//
//Wireframe javascript - portfolio 2.0
//============================================//
// This holds global variables//

var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

//This is image data that will be pulled to fill in the image pop-up box

var images = [
	{"name" : "test",
	"location" : "images/test-sad-dog.jpg",
	"description" : "<p>This is a test paragraph</p><p>this is a second test paragraph</p>"},
	{"name" : "notSo",
	 "location" : "images/test-sad-cat.jpg",
	 "description" : "<p>This is a test paragraph</p><p>this is a second test paragraph</p>"
	}];

var brokenLink = {
	"location" : "images/shrug.svg",
	"description" : "<h2>Uh Oh!<br> A Broken Link!</h2> <br><p>It looks like the artist programmed this site wrong! Silly Artist, thinking she's a programmer...</p>"
};

//============================================//
//These are all the event listeners

window.addEventListener('scroll', stickyHeader);
window.addEventListener('load', isMobile);
window.addEventListener('resize', detectAspectRatio);
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


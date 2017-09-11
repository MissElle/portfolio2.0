//============================================//
//Wireframe javascript - portfolio 2.0
//============================================//
// This holds global variables//

var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

var clickEvent = false; //This will determine if the menu should be opened or closed

//This is image data that will be pulled to fill in the image pop-up box

var emoticons = ['¯\_(ツ)_/¯', 'O_O', '◉_◉', 'ಠ_ಠ', '^_^', '=^.^=', '•ﺑ•', '◕ω◕', '｡◕ ‿ ◕｡', '(¬‿¬)', '(°ℇ °)', '^ㅂ^', '(;¬_¬)', 'ޏ(ὸ.ό)ރ'];

var images = [
	{'categoryMain' : 'Concept Art',
	'categorySub' : 'Colors: The Tuskegee Studies',
	'name' : 'illustration-colors-peter-buxton',
	'source' : 'images/illustration-colors-peter-buxton.jpg',
	'sourceSmall' : 'images/illustration-colors-peter-buxton-400.jpg',
	'preview' : 'images/illustration-colors-peter-buxton-preview.jpg',
	'description' : '<h1>Peter Buxton</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Based upon the true Peter Buxton who helped take down one of the most racist "studies" conducted under the name of medicine.</p>'},
	{'categoryMain' : 'concept-art',
	'categorySub' : 'Colors: The Tuskegee Studies',
	'name' : 'illustration-colors-al',
	'source' : 'images/illustration-colors-al.jpg',
	'sourceSmall' : 'images/illustration-colors-al-400.jpg',
	'preview' : 'images/illustration-colors-al-preview.jpg',
	'description' : '<h1>Subject Al</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Fictional character Al is an untreated syphilis patient.</p>'},
	{'name' : 'test',
	'source' : 'images/test-sad-dog.jpg',
	 'sourceSmall' : 'images/test-sad-dog.jpg',
	'description' : '<p>This is a test paragraph</p><p>this is a second test paragraph</p>'},
	{'name' : 'notSo',
	 'source' : 'images/test-sad-cat.jpg',
	 'sourceSmall' : 'images/test-sad-cat.jpg',
	 'description' : '<p>This is a test paragraph</p><p>this is a second test paragraph</p>'
	}];

var brokenLink = {
	'source' : 'images/shrug.svg',
	'description' : '<h2>Uh Oh!<br> A Broken Link!</h2> <br><p>It looks like the artist programmed this site wrong! Silly Artist, thinking she&#39;s a programmer...</p>'
};

//============================================//
//These are all the event listeners

window.addEventListener('scroll', stickyHeader);
document.getElementById('hamburger').addEventListener('click', menuFunctions);
window.addEventListener('load', isMobile);
window.addEventListener('load', loadEmoticons);
document.getElementById('changeout-image').addEventListener('load', detectAspectRatio);
window.addEventListener('resize', detectAspectRatio);
window.addEventListener('resize', resetClickEvent);
document.getElementById('cross').addEventListener('click', closeImageBox);

window.addEventListener('load', generatePreviews);
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
//This function formats the #image-box depending on img natural aspect ratio compared to the window aspect ratio

function detectAspectRatio() {
	var docWidth = window.innerWidth;
	var docHeight = window.innerHeight;
	
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
				if (window.outerWidth > 610){
					changeoutImage.src = images[i].sourceSmall;
				}else{
					changeoutImage.src = images[i].source;
				}
				changeoutText.innerHTML = images[i].description;
			}else {
				changeoutImage.src = brokenLink.source;
				changeoutText.innerHTML = brokenLink.description;
			}
		}
	}
	
	imgBox.style.display = 'flex';
	imgBox.className = 'fade-in';
}

//============================================//
//this function will generate previews for the different pages 

function generatePreviews() {
	var mainPage = document.getElementById('main');
	var pageH1 = document.createElement('h1');
	var pageH1Text;
	
	var design = document.getElementById('design');
	var illustration = document.getElementById('illustration');
	var webdev = document.getElementById('webdev');
	
	if (design !== null){
		console.log('you are in the Design page!');
	}else if (illustration !== null){
		console.log('you are in the Illustration page!');
		
		pageH1text = document.createTextNode('Illustration');
		pageH1.appendChild(pageH1text);
		mainPage.appendChild(pageH1);
		
		for(var i=0; i<images.length; ++i){
			if (images[i].categoryMain === 'Concept Art'){
				var newArticle = document.createElement('article');	
				var newDiv = document.createElement('div');
				newDiv.className = 'flex-headings';
				var newH2 = document.createElement('h2');
				var newH2Text = document.createTextNode(images[i].categoryMain);
				
				newH2.appendChild(newH2Text);
				newDiv.appendChild(newH2);
				newArticle.appendChild(newDiv);
				mainPage.appendChild(newArticle);	
				
					if(images[i].categorySub === 'Colors: The Tuskegee Studies'){
						var newH4 = document.createElement('h4');
						var newH4Text = document.createTextNode(images[i].categorySub);
						newH4.appendChild(newH4Text);
						console.log("this is working");	
						newDiv.appendChild(newH4);
						
						var newFigure = document.createElement('figure');
							
						var newFigcaption = document.createElement('figcaption');
						var newFigcaptionText = images[i].description;
						newFigcaption.className = 'not-mobile';
						newFigcaption.innerHTML = newFigcaptionText;

							
						var newImg = document.createElement('img');
						newImg.className = 'preview-link';
						newImg.src = images[i].preview;
						newFigure.appendChild(newImg);
						newFigure.id = images[i].name;
						
						newFigure.appendChild(newFigcaption);
						newArticle.appendChild(newFigure); 
					}
			}
		}	
		
	}else if (webdev !== null){
		console.log('you are in the Web Development page!');
	}else{
		console.log ('this is not a page with generation');
	}
}

//============================================//
//This function loads a random emoticon into the emoticon box

function loadEmoticons() {
		var emoticonSwap = document.getElementById('emoticon-swap');
		var i = Math.floor(Math.random()*emoticons.length);
	
		emoticonSwap.innerHTML = '<p>' + emoticons[i] +'</p>';
	
}
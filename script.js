//============================================//
//javascript - portfolio 2.0
//============================================//
// This holds global variables//

var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

var clickEvent = false; //This will determine if the menu should be opened or closed

//This is image data that will be pulled to fill in the image pop-up box

var emoticons = ['¯\_(ツ)_/¯', 'O_O', '◉_◉', 'ಠ_ಠ', '^_^', '=^.^=', '•ﺑ•', '◕ω◕', '｡◕ ‿ ◕｡', '(¬‿¬)', '(°ℇ °)', '^ㅂ^', '(;¬_¬)', 'ޏ(ὸ.ό)ރ'];

var images = [
	{'name' : 'illustration-colors-peter-buxton',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-peter-buxton.jpg',
	'sourceSmall' : 'images/illustration-colors-peter-buxton-400.jpg',
	'preview' : 'images/illustration-colors-peter-buxton-preview.jpg',
	'date' : 20161207,
	'description' : '<h1>Peter Buxton</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Based upon the true Peter Buxton who helped take down one of the most racist "studies" conducted under the name of medicine.</p>'},
	{'name' : 'illustration-colors-claire-newman',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-claire-newman.jpg',
	'sourceSmall' : 'images/illustration-colors-claire-newman-400.jpg',
	'preview' : 'images/illustration-colors-claire-newman-preview.jpg',
	'date' : 20161206,
	'description' : '<h1>Claire Newman</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Main character Claire Newman is a slacktivist who went against her father&#39;s and moved to Tuskegee, Alabama with nothing but a nursing degree and free time. However, something is going on in Tuskegee that&#39;s not quite right. Interviewing the people in the area, the truth unravels.</p>'},
	{'name' : 'illustration-colors-clementine-turner',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-clementine-turner.jpg',
	'sourceSmall' : 'images/illustration-colors-clementine-turner-400.jpg',
	'preview' : 'images/illustration-colors-clementine-turner-preview.jpg',
	'date' : 20161205,
	'description' : '<h1>Clementine Turner</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Supporting character Clementine Turner is Claire&#39;s aunt and only point of contact in Tuskegee. Holding a grudge against her brother, Claire&#39;s father, she lets Claire move from San Francisco to live with her in Tuskegee. Behind her bitterness, there is history or pain, racism, abandonement, and an understanding of how people behave.</p>'},
	{'name' : 'illustration-colors-eunice-rivers',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-eunice-rivers.jpg',
	'sourceSmall' : 'images/illustration-colors-eunice-rivers-400.jpg',
	'preview' : 'images/illustration-colors-eunice-rivers-preview.jpg',
	'date' : 20161204,
	'description' : '<h1>Eunice Rivers</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Eunice Rivers is based on real person Eunice Rivers, who helped to conduct the Tuskegee Studies for nearly 50 years. This game will explore her character in ways other media have not yet explored, hopefully to answer the question, how can someone not see blatant racism in front of them?</p>'},
	{'name' : 'illustration-colors-al',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-al.jpg',
	'sourceSmall' : 'images/illustration-colors-al-400.jpg',
	'preview' : 'images/illustration-colors-al-preview.jpg',
	 'date' : 20161203,
	'description' : '<h1>Subject Al</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p><p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Fictional character Al is an untreated syphilis patient who is discovered by Claire while she is on drugs. While Claire tries to get him treatment, the hosptial refuses.</p>'},
	{'name' : 'illustration-mi-bhickie',
	'category' : 'My oh M.I.',
	'source' : 'images/illustration-mi-bhickie.jpg',
	'sourceSmall' : 'images/illustration-mi-bhickie-400.jpg',
	'preview' : 'images/illustration-mi-bhickie-preview.jpg',
	 'date' : 20170201,
	'description' : '<h1>Bhictoria Darlene Beattie</h1><h3>My oh M.I.</h3><p>February 2017</p><p>This comic series is a look into mental illness, its effects on society and its effects on a person. Bhictoria, or Bhickie for short, is a mid-20&#39;s recent college graduate who cannot seem to relate to others. As the story progesses she finds herslef frustrated with the expectations of her society, but more frustrated with herself. Can she be happy and still a good person?</p>'},
	{'name' : 'illustration-mi-sage',
	'category' : 'My oh M.I.',
	'source' : 'images/illustration-mi-sage.jpg',
	'sourceSmall' : 'images/illustration-mi-sage-400.jpg',
	'preview' : 'images/illustration-mi-sage-preview.jpg',
	 'date' : 20170202,
	'description' : '<h1>Sage Markus Easom</h1><h3>My oh M.I.</h3><p>February 2017</p><p>This comic series is a look into mental illness, its effects on society and its effects on a person. Sage, or his nickname Markus, is a mid-20&#39;s college dropout who relates well with others but often feels that when people interact with one another, it&#39;s usually a facade. As the story progesses he finds himself fascinated with Bhickie and her contempt towards the world. But are his feelings for her healthy?</p>'},
	{'name' : 'illustration-doodle-crow-three',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-crow-three.jpg',
	'sourceSmall' : 'images/illustration-doodle-crow-three-400.jpg',
	'preview' : 'images/illustration-doodle-crow-three-preview.jpg',
	 'date' : 20170702,
	'description' : '<h1>Crow Study Three</h1><h3>Doodles</h3><p>July 2017</p><p>A quick study based on a photograph that was taken.  Ink Brush.</p>'},
	{'name' : 'illustration-doodle-crow-one',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-crow-one.jpg',
	'sourceSmall' : 'images/illustration-doodle-crow-one-400.jpg',
	'preview' : 'images/illustration-doodle-crow-one-preview.jpg',
	 'date' : 20170601,
	'description' : '<h1>Crow Study Two</h1><h3>Doodles</h3><p>July 2017</p><p>A quick study that was done with ink with varying sensitivity. Playing with negative vs subject. Reversed Imagery with Mobile Studio. </p>'},
	{'name' : 'illustration-doodle-crow-two',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-crow-two.jpg',
	'sourceSmall' : 'images/illustration-doodle-crow-two-400.jpg',
	'preview' : 'images/illustration-doodle-crow-two-preview.jpg',
	 'date' : 20170602,
	'description' : '<h1>Crow Study One</h1><h3>Doodles</h3><p>June 2017</p><p>A quick study that was done with ink with varying sensitivity. Playing with negative vs subject.</p>'},
	{'name' : 'illustration-doodle-bad-dreams',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-bad-dreams.jpg',
	'sourceSmall' : 'images/illustration-doodle-bad-dreams-400.jpg',
	'preview' : 'images/illustration-doodle-bad-dreams-preview.jpg',
	'date' : 20170501,
	'description' : '<h1>Bad Dreams</h1><h3>Doodles</h3><p>May 2017</p><p>Study playing with wet vs dry brushing. Representation of Lucidity.</p>'},
	{'name' : 'illustration-doodle-fairy',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-fairy.jpg',
	'sourceSmall' : 'images/illustration-doodle-fairy-400.jpg',
	'preview' : 'images/illustration-doodle-fairy-preview.jpg',
	'date' : 20170808,
	'description' : '<h1>Wormwood Fairy</h1><h3>Doodles</h3><p>August 2017</p><p>Concept Art Sketch for a friend&#39;s costume idea. This fairy is fond of Wormwood drinks and even has Wormwood leaves for wings.</p>'},
	{'name' : 'illustration-doodle-baby-hair',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-baby-hair.jpg',
	'sourceSmall' : 'images/illustration-doodle-baby-hair-400.jpg',
	'preview' : 'images/illustration-doodle-baby-hair-preview.jpg',
	'date' : 20170422,
	'description' : '<h1>Baby Hair</h1><h3>Doodles</h3><p>April 2017</p><p>Study playing with different types of ink, sesitivity, pressure, and surreal subject matter. Shapes pulled from a rose.</p>'},
	{'name' : 'illustration-album-cover-1',
	'category' : 'Album: Wasting Time',
	'source' : 'images/illustration-album-cover-1.jpg',
	'sourceSmall' : 'images/illustration-album-cover-1-400.jpg',
	'preview' : 'images/illustration-album-cover-1-preview.jpg',
	'date' : 20170125,
	'description' : '<h1>Album Concept One</h1><h3>Album Cover: Wasting Time</h3><p>January 2017</p><p>Project for an independent artist&#39; first solo album. The idea behind this album art was the effect that drugs and other poor choices have on one&#39;s life and time. Essentially, that these activities waste one&#39;s time and that it cannot be recovered. Concept One.</p>'},
	{'name' : 'illustration-album-cover-2',
	'category' : 'Album: Wasting Time',
	'source' : 'images/illustration-album-cover-2.jpg',
	'sourceSmall' : 'images/illustration-album-cover-2-400.jpg',
	'preview' : 'images/illustration-album-cover-2-preview.jpg',
	'date' : 20170124,
	'description' : '<h1>Album Concept Two</h1><h3>Album Cover: Wasting Time</h3><p>January 2017</p><p>Project for an independent artist&#39; first solo album. The idea behind this album art was the effect that drugs and other poor choices have on one&#39;s life and time. Essentially, that these activities waste one&#39;s time and that it cannot be recovered. Concept Two.</p>'},
	{'name' : 'illustration-album-cover-3',
	'category' : 'Album: Wasting Time',
	'source' : 'images/illustration-album-cover-3.jpg',
	'sourceSmall' : 'images/illustration-album-cover-3-400.jpg',
	'preview' : 'images/illustration-album-cover-3-preview.jpg',
	'date' : 20170123,
	'description' : '<h1>Album Concept Three</h1><h3>Album Cover: Wasting Time</h3><p>January 2017</p><p>Project for an independent artist&#39; first solo album. The idea behind this album art was the effect that drugs and other poor choices have on one&#39;s life and time. Essentially, that these activities waste one&#39;s time and that it cannot be recovered. Concept Three.</p>'},
	{'name' : 'design-uihi-award-art-mart',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-art-mart.png',
	'sourceSmall' : 'images/design-uihi-award-art-mart-400.png',
	'preview' : 'images/design-uihi-award-art-mart-preview.jpg',
	'date' : 20170624,
	'description' : '<h1>SpiritWalk Certificates</h1><h3>Art Mart 1st Place</h3><p>June 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to a vendor at Art Mart, picked by a panel of judges</p>'},
	{'name' : 'design-uihi-award-grandma-helen',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-grandma-helen.png',
	'sourceSmall' : 'images/design-uihi-award-grandma-helen-400.png',
	'preview' : 'images/design-uihi-award-grandma-helen-preview.jpg',
	'date' : 20170625,
	'description' : '<h1>SpiritWalk Certificates</h1><h3>Grandma Helen Award</h3><p>June 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to several SpirtWalk participants that were over the age of 65 and completed the walk cycle.</p><p>The photo was not taken by the artist. It is property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-award-most-money-solo',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-most-money-solo.png',
	'sourceSmall' : 'images/design-uihi-award-most-money-solo-400.png',
	'preview' : 'images/design-uihi-award-most-money-solo-preview.jpg',
	'date' : 20170624,
	'description' : '<h1>SpiritWalk Certificates</h1><h3>Most Money Raised - Individual</h3><p>June 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to an individual who collected the most money per mile walked for the SpiritWalk route.</p>'},
	{'name' : 'design-uihi-award-most-money-group',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-most-money-group.png',
	'sourceSmall' : 'images/design-uihi-award-most-money-group-400.png',
	'preview' : 'images/design-uihi-award-most-money-group-preview.jpg',
	'date' : 20170624,
	'description' : '<h1>SpiritWalk Certificates</h1><h3>Most Money Raised - Group</h3><p>June 2017</p><p><a href="http://www.uihi.org" target="_http://blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to a group of participants who collected the most money per mile walked for the SpiritWalk route.</p><p>The frog design was not created by the artist. It is property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v1-Page-1',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v1-Page-1.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v1-Page-1-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v1-Page-1-preview.jpg',
	'date' : 20170828,
	'description' : '<h1>PrEP Postcard</h1><h3>Version One - Side Two</h3><p>August 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the first version of side two and it will not be published.</p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v1-Page-2',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v1-Page-2.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v1-Page-2-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v1-Page-2-preview.jpg',
	'date' : 20170829,
	'description' : '<h1>PrEP Postcard</h1><h3>Version One - Side One</h3><p>August 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/" target="_blank">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the first version of side one and it will not be published. The logos were not created by the artist and are property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v2-Page-2',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v2-Page-2.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v2-Page-2-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v2-Page-2-preview.jpg',
	'date' : 20170831,
	'description' : '<h1>PrEP Postcard</h1><h3>Final Version - Side One</h3><p>August 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/" target="_blank">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the final version that will be printed and published online. The logos and photo were not created by the artist and are property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v2-Page-1',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v2-Page-1.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v2-Page-1-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v2-Page-1-preview.jpg',
	'date' : 20170830,
	'description' : '<h1>PrEP Postcard</h1><h3>Final Version - Side Two</h3><p>August 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/" target="_blank">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the final version that will be printed and published online.</p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v2-Page-2',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v2-Page-2.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v2-Page-2-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v2-Page-2-preview.jpg',
	'date' : 20170831,
	'description' : '<h1>PrEP Postcard</h1><h3>Final Version - Side One</h3><p>August 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/" target="_blank">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the final version that will be printed and published online. The logos and photo were not created by the artist and are property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-about-banner',
	'category' : 'Layout Only',
	'source' : 'images/design-uihi-about-banner.jpg',
	'sourceSmall' : 'images/design-uihi-about-banner-400.jpg',
	'preview' : 'images/design-uihi-about-banner-preview.jpg',
	'date' : 20170720,
	'description' : '<h1>UIHI Banner</h1><h3>About Page Banner</h3><p>July 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#9;s <a href="http://www.uihi.org/about/ target="_blank">about</a> section needed an updated banner that encapsulated all that UIHI does for American Indians and Alaska Natives. The four sections represent the four corners and the four sections of the medicine wheel. The colors of the dividers are the primary UIHI brand colors. From far left clockwise, the images represent family, community outreach, identity, and data collection. All photos are stock photos with the exception of the top photos, which are from previous UIHI conferences.</p>'},
	{'name' : 'design-uihi-donate-banner',
	'category' : 'Layout Only',
	'source' : 'images/design-uihi-donate-banner.jpg',
	'sourceSmall' : 'images/design-uihi-donate-banner-400.jpg',
	'preview' : 'images/design-uihi-donate-banner-preview.jpg',
	'date' : 20170719,
	'description' : '<h1>UIHI Banner</h1><h3>About Page Banner</h3><p>July 2017</p><p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed a donation banner for division <a href="http://http://www.sihb.org/" target="_blank">The Seattle Indian Health Board</a> (SIHB) <a href="http://http://www.sihb.org/get-involved-donate target="_blank">donate</a> section. This donation banner encapsulates the services of SIHB, such as both western and traditional medicine to the Native community and youth services. All images were taken at the SIHB except for the far left, which is a stock image.</p>'}
];

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

window.addEventListener('load', detectPage);
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
	var changeoutText = document.getElementById('changeout-text');
	var para = changeoutText.querySelector('p');
	
	var windowRatio = docWidth/docHeight;
	var imageRatio = imgWidth/imgHeight;
	
	if(windowRatio >= imageRatio) {
		imageSide.style.height = '100%';
		imageSide.style.width = '70%';
		descriptionSide.style.width = '30%';
		descriptionSide.style.height = '100%';
		changeoutText.style.textAlign = 'right';
		for(var i=0; i<para.length; ++i){
			para[i].style.textAlign = 'right';
		}
	}else {
		imageSide.style.height = '70%';
		imageSide.style.width = '100%';
		descriptionSide.style.width ='100%';
		descriptionSide.style.height = '30%';
		changeoutText.style.textAlign = 'left';
		for(var i=0; i<para.length; ++i){
			para[i].style.textAlign = 'left';
		}
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
//This function loads a random emoticon into the emoticon box

function loadEmoticons() {
		var emoticonSwap = document.getElementById('emoticon-swap');
		var i = Math.floor(Math.random()*emoticons.length);
	
		emoticonSwap.innerHTML = '<p>' + emoticons[i] +'</p>';
}

//============================================//
//This function will sort the array by date, newest first

function sortNumber(a, b) {
	return b.date-a.date;
}

//============================================//
//This function detects which page the user is on

function detectPage() {
	var design = document.getElementById('design');
	var illustration = document.getElementById('illustration');
	var webdev = document.getElementById('webdev');
	
	images.sort(sortNumber);
	
	if(design !== null){
		var mainPage = document.getElementById('main');
		var pageH1 = document.createElement('h1');
		var pageH1Text;
		pageH1text = document.createTextNode('Design');
		pageH1.appendChild(pageH1text);
		mainPage.appendChild(pageH1);
		
		var newH2 = document.createElement('h2');
		var newH2Text = document.createTextNode('Composition and Layout');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
		generateImgPreviews('Design and Composition', images);
		generateImgPreviews('Layout Only', images);
		
		newH2 = document.createElement('h2');
		newH2Text = document.createTextNode('Iconography');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
		generateImgPreviews('2017 Pride', images);
		generateImgPreviews('12 Logos, 48 Hours', images);
		
	}else if (illustration !== null){
		var mainPage = document.getElementById('main');
		var pageH1 = document.createElement('h1');
		var pageH1Text;
		pageH1text = document.createTextNode('Illustration');
		pageH1.appendChild(pageH1text);
		mainPage.appendChild(pageH1);
		
		var newH2 = document.createElement('h2');
		var newH2Text = document.createTextNode('Sketchbook');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
		generateImgPreviews('Doodles', images);
		
		newH2 = document.createElement('h2');
		newH2Text = document.createTextNode('Concept Art');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
		generateImgPreviews('Album: Wasting Time', images);
		generateImgPreviews('Colors: The Tuskegee Studies', images);
		
		newH2 = document.createElement('h2');
		newH2Text = document.createTextNode('Character Studies');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
		generateImgPreviews('My oh M.I.', images);
		
	}else if (webdev !== null){
		console.log('you are in the Web Development page!');
	}else{
		console.log ('this is not a page with generation');
	}
}

//============================================//
//This function loads all preview images/content for non-interactive imagery

function generateImgPreviews(name, array) {
	var mainPage = document.getElementById('main');
	
	var newArticle = document.createElement('article');
	mainPage.appendChild(newArticle);
	var newDiv = document.createElement('div');
	newDiv.className = 'flex-images';
	
	var newH4 = document.createElement('h4');
	var newH4Text = document.createTextNode(name);
	newH4.appendChild(newH4Text);
	newArticle.appendChild(newH4);
	newArticle.appendChild(newDiv);
						
		for(var i=0; i<array.length; ++i){
			var imageCategory = images[i].category;
			if(imageCategory.match(name)){
				var newFigure = document.createElement('figure');
				var newFigcaption = document.createElement('figcaption');
				var newFigcaptionText = array[i].description;
				newFigcaption.className = 'not-mobile';
				newFigcaption.innerHTML = newFigcaptionText;

				var newImg = document.createElement('img');
				newImg.className = 'preview-link';
				newImg.src = array[i].preview;
				newFigure.appendChild(newImg);
				newFigure.id = array[i].name;
				newFigure.className = array[i].arrayName;

				newFigure.addEventListener('click', openImageBox);
				newFigure.appendChild(newFigcaption);
				newDiv.appendChild(newFigure); 
				}
		}
}

//============================================//
//This function loads all preview images/content for web pages

function generateWebPreviews(name, array) {
	var mainPage = document.getElementById('main');
	
	var newArticle = document.createElement('article');
	mainPage.appendChild(newArticle);
	var newDiv = document.createElement('div');
	newDiv.className = 'flex-images';
	
	var newH4 = document.createElement('h4');
	var newH4Text = document.createTextNode(name);
	newH4.appendChild(newH4Text);
	newArticle.appendChild(newH4);
	newArticle.appendChild(newDiv);
						
		for(var i=0; i<array.length; ++i){
			var newLink = document.createElement('a');
			newLink.href = array[i].hyperlink;
			var newFigure = document.createElement('figure');
			var newFigcaption = document.createElement('figcaption');
			var newFigcaptionText = array[i].description;
			newFigcaption.className = 'not-mobile';
			newFigcaption.innerHTML = newFigcaptionText;

			var newImg = document.createElement('img');
			newImg.className = 'preview-link';
			newImg.src = array[i].preview;
			newFigure.appendChild(newImg);
			newFigure.id = array[i].name;
			
			newFigure.appendChild(newFigcaption);
			newLink.appendChild(newFigure);
			newDiv.appendChild(newLink); 
		}
}
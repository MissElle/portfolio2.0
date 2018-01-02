//============================================//
//generate-images.js - portfolio 2.0
//============================================//
//These are the event listeners only for image generations

//document.getElementById('mainImg').addEventListener('load', detectPage);

//============================================//
//This function will sort the array by date, newest first

function sortNumber(a, b) {
	return b.date-a.date;
}

//============================================//
//This detects if the device is mobile and changes the handling of figcaptions

function isMobile(a, b) {

	if(/iPhone|iPad|iPod|Android| Blackberry|Opera Mini|IEMobile/i.test(navigator.userAgent)){
		a.style.height = '22em';
		b.className = 'mobile';
	}else {
		a.style.height = '15em';
		b.className = 'not-mobile';
	}
}

//isMobile() test mostly derived from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser


//============================================//
//This function detects which page the user is on

function detectPage() {
	var design = document.getElementById('design');
	var illustration = document.getElementById('illustration');
	var webdev = document.getElementById('webdev');
	
	images.sort(sortNumber);
	webLinks.sort(sortNumber);
	
	if(design !== null){
		var mainPage = document.getElementById('main');
		var pageH1 = document.createElement('h1');
		var pageH1Text;
        var newH2;
        var newH2Text;
		pageH1text = document.createTextNode('Design');
		pageH1.appendChild(pageH1text);
		mainPage.appendChild(pageH1);
      
        newH2 = document.createElement('h2');
		newH2Text = document.createTextNode('Iconography and Logos');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
        generateImgPreviews('Web Logos', images);
		generateImgPreviews('2017 Pride', images);
		generateImgPreviews('12 Icons, 48 Hours', images);
      
		newH2 = document.createElement('h2');
		newH2Text = document.createTextNode('Composition and Layout');
		newH2.appendChild(newH2Text);
		mainPage.appendChild(newH2);
		generateImgPreviews('Design and Composition', images);
		generateImgPreviews('Layout Only', images);
		
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
		var mainPage = document.getElementById('main');
		var pageH1 = document.createElement('h1');
		var pageH1Text;
		pageH1text = document.createTextNode('Web Development');
		pageH1.appendChild(pageH1text);
		mainPage.appendChild(pageH1);
		
		generateWebPreviews('PHP and WordPress', webLinks);
	
		generateWebPreviews('Javascript and JQuery', webLinks);

	}else{
		console.log ('Hello Web Developer :) ');
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
				var newFigcaptionText = array[i].title;
				newFigcaption.innerHTML = newFigcaptionText;

				var newImg = document.createElement('div');
				newImg.className = 'preview-link';
				newImg.style.backgroundImage = 'url(' + array[i].preview +')';
		
				newFigure.appendChild(newImg);
				newFigure.id = array[i].name;

				newFigure.addEventListener('click', openImageBox);
				isMobile(newFigure, newFigcaption);
				
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
	
	var newH2 = document.createElement('h2');
	var newH2Text = document.createTextNode(name);
	newH2.appendChild(newH2Text);
	newArticle.appendChild(newH2);
	newArticle.appendChild(newDiv);
						
		for(var i=0; i<array.length; ++i){
			var imageCategory = webLinks[i].category;
			if(imageCategory.match(name)){
				var newLink = document.createElement('a');
				newLink.href = array[i].hyperlink;
				newLink.target = '_blank'
				var newFigure = document.createElement('figure');
				var newFigcaption = document.createElement('figcaption');
				var newFigcaptionText = array[i].description;
				newFigcaption.innerHTML = newFigcaptionText;

				var newImg = document.createElement('div');
				newImg.className = 'preview-link';
				newImg.style.backgroundImage = 'url(' + array[i].preview +')';
				newFigure.appendChild(newImg);
				newFigure.id = array[i].name;

				isMobile(newFigure, newFigcaption);
				
				newFigure.appendChild(newFigcaption);
				newLink.appendChild(newFigure);
				newDiv.appendChild(newLink); 
		}
	}
}

//============================================//
//This holds all image arrays that are used to generate content 

//This is image data that will be pulled to fill in the image pop-up box or previews

var images = [
	{'name' : 'illustration-colors-peter-buxton',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-peter-buxton.jpg',
	'sourceSmall' : 'images/illustration-colors-peter-buxton-400.jpg',
	'preview' : 'images/illustration-colors-peter-buxton-preview.jpg',
	'date' : 20161207,
	'title' : '<h1>Peter Buxton</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p>',
	'description' : '<p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Based upon the true Peter Buxton who helped take down one of the most racist "studies" conducted under the name of medicine.</p>'},
	{'name' : 'illustration-colors-claire-newman',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-claire-newman.jpg',
	'sourceSmall' : 'images/illustration-colors-claire-newman-400.jpg',
	'preview' : 'images/illustration-colors-claire-newman-preview.jpg',
	'date' : 20161206,
	'title' : '<h1>Claire Newman</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p>',
	'description' : '<p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Main character Claire Newman is a slacktivist who went against her father&#39;s and moved to Tuskegee, Alabama with nothing but a nursing degree and free time. However, something is going on in Tuskegee that&#39;s not quite right. Interviewing the people in the area, the truth unravels.</p>'},
	{'name' : 'illustration-colors-clementine-turner',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-clementine-turner.jpg',
	'sourceSmall' : 'images/illustration-colors-clementine-turner-400.jpg',
	'preview' : 'images/illustration-colors-clementine-turner-preview.jpg',
	'date' : 20161205,
	'title': '<h1>Clementine Turner</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p>' ,
	'description' : '<p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Supporting character Clementine Turner is Claire&#39;s aunt and only point of contact in Tuskegee. Holding a grudge against her brother, Claire&#39;s father, she lets Claire move from San Francisco to live with her in Tuskegee. Behind her bitterness, there is history of pain, racism, abandonement, and an understanding of how people behave.</p>'},
	{'name' : 'illustration-colors-eunice-rivers',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-eunice-rivers.jpg',
	'sourceSmall' : 'images/illustration-colors-eunice-rivers-400.jpg',
	'preview' : 'images/illustration-colors-eunice-rivers-preview.jpg',
	'date' : 20161204,
	'title' : '<h1>Eunice Rivers</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p>',
	'description' : '<p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Eunice Rivers is based on real person Eunice Rivers, who helped to conduct the Tuskegee Studies for nearly 50 years. This game will explore her character in ways other media have not yet explored, hopefully to answer the question, how can someone not see blatant racism in front of them?</p>'},
	{'name' : 'illustration-colors-al',
	'category' : 'Colors: The Tuskegee Studies',
	'source' : 'images/illustration-colors-al.jpg',
	'sourceSmall' : 'images/illustration-colors-al-400.jpg',
	'preview' : 'images/illustration-colors-al-preview.jpg',
	 'date' : 20161203,
	'title' : '<h1>Subject Al</h1><h3>Colors: The Tuskegee Studies</h3><p>December 2016</p>',
	'description' : '<p>A video game thit is also a piece of historical fiction, Colors: The Tuskegee Studies takes a "clear" look into a darker side of America&#39;s history. Fictional character Al is an untreated syphilis patient who is discovered by Claire while she is on drugs. While Claire tries to get him treatment, the hosptial refuses.</p>'},
	{'name' : 'illustration-mi-bhickie',
	'category' : 'My oh M.I.',
	'source' : 'images/illustration-mi-bhickie.jpg',
	'sourceSmall' : 'images/illustration-mi-bhickie-400.jpg',
	'preview' : 'images/illustration-mi-bhickie-preview.jpg',
	'date' : 20170201,
	'title' : '<h1>Bhictoria Darlene Beattie</h1><h3>My oh M.I.</h3><p>February 2017</p>',
	'description' : '<p>This comic series is a look into mental illness, its effects on society and its effects on a person. Bhictoria, or Bhickie for short, is a mid-20&#39;s recent college graduate who cannot seem to relate to others. As the story progesses she finds herslef frustrated with the expectations of her society, but more frustrated with herself. Can she be happy and still a good person?</p>'},
	{'name' : 'illustration-mi-sage',
	'category' : 'My oh M.I.',
	'source' : 'images/illustration-mi-sage.jpg',
	'sourceSmall' : 'images/illustration-mi-sage-400.jpg',
	'preview' : 'images/illustration-mi-sage-preview.jpg',
	'date' : 20170202,
	'title' : '<h1>Sage Markus Easom</h1><h3>My oh M.I.</h3><p>February 2017</p>',
	'description' : '<p>This comic series is a look into mental illness, its effects on society and its effects on a person. Sage, or his nickname Markus, is a mid-20&#39;s college dropout who relates well with others but often feels that when people interact with one another, it&#39;s usually a facade. As the story progesses he finds himself fascinated with Bhickie and her contempt towards the world. But are his feelings for her healthy?</p>'},
	{'name' : 'illustration-doodle-crow-three',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-crow-three.jpg',
	'sourceSmall' : 'images/illustration-doodle-crow-three-400.jpg',
	'preview' : 'images/illustration-doodle-crow-three-preview.jpg',
	'date' : 20170702,
	'title' : '<h1>Crow Study Three</h1><h3>Doodles</h3><p>July 2017</p>',
	'description' : '<p>A quick study based on a photograph that was taken.  Ink Brush.</p>'},
	{'name' : 'illustration-doodle-crow-one',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-crow-one.jpg',
	'sourceSmall' : 'images/illustration-doodle-crow-one-400.jpg',
	'preview' : 'images/illustration-doodle-crow-one-preview.jpg',
	'date' : 20170601,
	'title' : '<h1>Crow Study Two</h1><h3>Doodles</h3><p>July 2017</p>', 
	'description' : '<p>A quick study that was done with ink with varying sensitivity. Playing with negative vs subject. Reversed Imagery with Mobile Studio. </p>'},
	{'name' : 'illustration-doodle-crow-two',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-crow-two.jpg',
	'sourceSmall' : 'images/illustration-doodle-crow-two-400.jpg',
	'preview' : 'images/illustration-doodle-crow-two-preview.jpg',
	'date' : 20170602,
	'title' : '<h1>Crow Study One</h1><h3>Doodles</h3><p>June 2017</p>',
	'description' : '<p>A quick study that was done with ink with varying sensitivity. Playing with negative vs subject.</p>'},
	{'name' : 'illustration-doodle-bad-dreams',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-bad-dreams.jpg',
	'sourceSmall' : 'images/illustration-doodle-bad-dreams-400.jpg',
	'preview' : 'images/illustration-doodle-bad-dreams-preview.jpg',
	'date' : 20170501,
	'title' : '<h1>Bad Dreams</h1><h3>Doodles</h3><p>May 2017</p>',
	'description' : '<p>Study playing with wet vs dry brushing. Representation of Lucidity.</p>'},
	{'name' : 'illustration-doodle-fairy',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-fairy.jpg',
	'sourceSmall' : 'images/illustration-doodle-fairy-400.jpg',
	'preview' : 'images/illustration-doodle-fairy-preview.jpg',
	'date' : 20170808,
	'title' : '<h1>Wormwood Fairy</h1><h3>Doodles</h3><p>August 2017</p>',
	'description' : '<p>Concept Art Sketch for a friend&#39;s costume idea. This fairy is fond of Wormwood drinks and even has Wormwood leaves for wings.</p>'},
	{'name' : 'illustration-doodle-baby-hair',
	'category' : 'Doodles',
	'source' : 'images/illustration-doodle-baby-hair.jpg',
	'sourceSmall' : 'images/illustration-doodle-baby-hair-400.jpg',
	'preview' : 'images/illustration-doodle-baby-hair-preview.jpg',
	'date' : 20170422,
	'title' : '<h1>Baby Hair</h1><h3>Doodles</h3><p>April 2017</p>',
	'description' : '<p>Study playing with different types of ink, sesitivity, pressure, and surreal subject matter. Shapes pulled from a rose.</p>'},
	{'name' : 'illustration-album-cover-1',
	'category' : 'Album: Wasting Time',
	'source' : 'images/illustration-album-cover-1.jpg',
	'sourceSmall' : 'images/illustration-album-cover-1-400.jpg',
	'preview' : 'images/illustration-album-cover-1-preview.jpg',
	'date' : 20170125,
	'title' : '<h1>Album Concept One</h1><h3>Album Cover: Wasting Time</h3><p>January 2017</p>',
	'description' : '<p>Project for an independent artist&#39; first solo album. The idea behind this album art was the effect that drugs and other poor choices have on one&#39;s life and time. Essentially, that these activities waste one&#39;s time and that it cannot be recovered. Concept One.</p>'},
	{'name' : 'illustration-album-cover-2',
	'category' : 'Album: Wasting Time',
	'source' : 'images/illustration-album-cover-2.jpg',
	'sourceSmall' : 'images/illustration-album-cover-2-400.jpg',
	'preview' : 'images/illustration-album-cover-2-preview.jpg',
	'date' : 20170124,
	'title' : '<h1>Album Concept Two</h1><h3>Album Cover: Wasting Time</h3><p>January 2017</p>',
	'description' : '<p>Project for an independent artist&#39; first solo album. The idea behind this album art was the effect that drugs and other poor choices have on one&#39;s life and time. Essentially, that these activities waste one&#39;s time and that it cannot be recovered. Concept Two.</p>'},
	{'name' : 'illustration-album-cover-3',
	'category' : 'Album: Wasting Time',
	'source' : 'images/illustration-album-cover-3.jpg',
	'sourceSmall' : 'images/illustration-album-cover-3-400.jpg',
	'preview' : 'images/illustration-album-cover-3-preview.jpg',
	'date' : 20170123,
	'title' : '<h1>Album Concept Three</h1><h3>Album Cover: Wasting Time</h3><p>January 2017</p>',
	'description' : '<p>Project for an independent artist&#39; first solo album. The idea behind this album art was the effect that drugs and other poor choices have on one&#39;s life and time. Essentially, that these activities waste one&#39;s time and that it cannot be recovered. Concept Three.</p>'},
	{'name' : 'design-uihi-award-art-mart',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-art-mart.png',
	'sourceSmall' : 'images/design-uihi-award-art-mart-400.png',
	'preview' : 'images/design-uihi-award-art-mart-preview.jpg',
	'date' : 20170624,
	'title' : '<h1>SpiritWalk Certificates</h1><h3>Art Mart 1st Place</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to a vendor at Art Mart, picked by a panel of judges</p>'},
	{'name' : 'design-uihi-award-grandma-helen',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-grandma-helen.png',
	'sourceSmall' : 'images/design-uihi-award-grandma-helen-400.png',
	'preview' : 'images/design-uihi-award-grandma-helen-preview.jpg',
	'date' : 20170625,
	'title' : '<h1>SpiritWalk Certificates</h1><h3>Grandma Helen Award</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to several SpirtWalk participants that were over the age of 65 and completed the walk cycle.</p><p>The photo was not taken by the artist. It is property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-award-most-money-solo',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-award-most-money-solo.png',
	'sourceSmall' : 'images/design-uihi-award-most-money-solo-400.png',
	'preview' : 'images/design-uihi-award-most-money-solo-preview.jpg',
	'date' : 20170624,
	'title' : '<h1>SpiritWalk Certificates</h1><h3>Most Money Raised - Individual</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#39;s annual SpiritWalk and Spirit of Indigenous People Festival has several activities that award certificates to its participants. This certificate was awarded to an individual who collected the most money per mile walked for the SpiritWalk route.</p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v2-Page-1',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v2-Page-1.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v2-Page-1-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v2-Page-1-preview.jpg',
	'date' : 20170830,
	'title' : '<h1>PrEP Postcard</h1><h3>Final Version - Side Two</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/" target="_blank">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the final version that will be printed and published online.</p>'},
	{'name' : 'design-uihi-PrEP-Postcard-v2-Page-2',
	'category' : 'Design and Composition',
	'source' : 'images/design-uihi-PrEP-Postcard-v2-Page-2.jpg',
	'sourceSmall' : 'images/design-uihi-PrEP-Postcard-v2-Page-2-400.jpg',
	'preview' : 'images/design-uihi-PrEP-Postcard-v2-Page-2-preview.jpg',
	'date' : 20170831,
	'title' : '<h1>PrEP Postcard</h1><h3>Final Version - Side One</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> in conjuction with <a href="https://www.projectinform.org/" target="_blank">Project Inform</a> have created an information postcard that describes, in depth, how to use and the effectiveness of Pre-exposure prophylaxis(PrEP). This is the final version that will be printed and published online. The logos and photo were not created by the artist and are property of <a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a></p>'},
	{'name' : 'design-uihi-about-banner',
	'category' : 'Layout Only',
	'source' : 'images/design-uihi-about-banner.jpg',
	'sourceSmall' : 'images/design-uihi-about-banner-400.jpg',
	'preview' : 'images/design-uihi-about-banner-preview.jpg',
	'date' : 20170720,
	'title' : '<h1>UIHI Banner</h1><h3>About Page Banner</h3><p>July 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a>&#9;s <a href="http://www.uihi.org/about/ target="_blank">about</a> section needed an updated banner that encapsulated all that UIHI does for American Indians and Alaska Natives. The four sections represent the four corners and the four sections of the medicine wheel. The colors of the dividers are the primary UIHI brand colors. From far left clockwise, the images represent family, community outreach, identity, and data collection. All photos are stock photos with the exception of the top photos, which are from previous UIHI conferences.</p>'},
	{'name' : 'design-uihi-donate-banner',
	'category' : 'Layout Only',
	'source' : 'images/design-uihi-donate-banner.jpg',
	'sourceSmall' : 'images/design-uihi-donate-banner-400.jpg',
	'preview' : 'images/design-uihi-donate-banner-preview.jpg',
	'date' : 20170719,
	'title' : '<h1>UIHI Banner</h1><h3>About Page Banner</h3><p>July 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed a donation banner for division <a href="http://http://www.sihb.org/" target="_blank">The Seattle Indian Health Board</a> (SIHB) <a href="http://http://www.sihb.org/get-involved-donate target="_blank">donate</a> section. This donation banner encapsulates the services of SIHB, such as both western and traditional medicine to the Native community and youth services. All images were taken at the SIHB except for the far left, which is a stock image.</p>'},
	{'name' : 'design-uihi-logo-pride-heart',
	'category' : '2017 Pride',
	'source' : 'images/design-uihi-logo-pride-heart.png',
	'sourceSmall' : 'images/design-uihi-logo-pride-heart-400.png',
	'preview' : 'images/design-uihi-logo-pride-heart-preview.jpg',
	'date' : 20170625,
	'title' : '<h1>Pride Heart</h1><h3>All Pride Colors</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> used this icon as a general purpose icon for Pride, Trans-Pride, and Two-Spirit awareness. Similar to Trans, Two-Spirit is a non-binary identity of American Indian and Alaska Native people that was ignored and written out during colonization. The two feathers joining to form one heart is a representation of the multiple identities that encompass a single person. The rough edges represent the strength and tenacity of Native people.</p>'},
	{'name' : 'design-uihi-logo-pride-trans-heart',
	'category' : '2017 Pride',
	'source' : 'images/design-uihi-logo-pride-trans-heart.png',
	'sourceSmall' : 'images/design-uihi-logo-pride-trans-heart-400.png',
	'preview' : 'images/design-uihi-logo-pride-trans-heart-preview.jpg',
	'date' : 20170625,
	'title' : '<h1>Pride Heart</h1><h3>Trans Pride Colors</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> was unable to use this icon due to time and budget constraints and was originally created for Trans Pride and Two-Spirit Pride. Similar to Trans, Two-Spirit is a non-binary identity of American Indian and Alaska Native people that was ignored and written out during colonization. The two feathers joining to form one heart is a representation of the multiple identities that encompass a single person. The rough edges represent the strength and tenacity of Native people.</p>'},
	{'name' : 'design-uihi-logo-two-spirit-pride',
	'category' : '2017 Pride',
	'source' : 'images/design-uihi-logo-two-spirit-pride.png',
	'sourceSmall' : 'images/design-uihi-logo-two-spirit-pride-400.png',
	'preview' : 'images/design-uihi-logo-two-spirit-pride-preview.jpg',
	'date' : 20170624,
	'title' : '<h1>Pride Double Helix</h1><h3>All Pride Colors</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> published this icon in its <a href="http://www.uihi.org/wpfb-file/two-spirit-handout_online-pdf/" target="_blank">Two-Spirit Handout</a>. Two-Spirit is a non-binary identity of American Indian and Alaska Native people that was ignored and written out during colonization. The two feathers wrapping around each other like a double helix DNA represents that the identity is written within the person.</p>'},
	{'name' : 'design-uihi-logo-two-spirit-trans',
	'category' : '2017 Pride',
	'source' : 'images/design-uihi-logo-two-spirit-trans.png',
	'sourceSmall' : 'images/design-uihi-logo-two-spirit-trans-400.png',
	'preview' : 'images/design-uihi-logo-two-spirit-trans-preview.jpg',
	'date' : 20170623,
	'title' : '<h1>Pride Double Helix</h1><h3>Trans Pride Colors</h3><p>June 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> was unable to use this icon for Seattle&#39;s 2017 Trans Pride. At this event, UIHI passed out literature about Two-Spirit Indigenous people. Two-Spirit is a non-binary identity of American Indian and Alaska Native people that was ignored and written out during colonization. The two feathers wrapping around each other like a double helix DNA represents that the identity is written within the person.</p>'},
	{'name' : 'design-uihi-infographic-oral-care',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-oral-care.png',
	'sourceSmall' : 'images/design-uihi-infographic-oral-care-400.png',
	'preview' : 'images/design-uihi-infographic-oral-care-preview.jpg',
	'date' : 20170831,
	'title' : '<h1>UIHI Infographics</h1><h3>Oral Hygiene</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for oral hygiene and oral care.</p>'},
	{'name' : 'design-uihi-infographic-PA-education',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-PA-education.png',
	'sourceSmall' : 'images/design-uihi-infographic-PA-education-400.png',
	'preview' : 'images/design-uihi-infographic-PA-education-preview.jpg',
	'date' : 20170831,
	'title' : '<h1>UIHI Infographics</h1><h3>Physical Activity</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for physical activity, physical education, and exercise.</p>'},
	{'name' : 'design-uihi-infographic-depression',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-depression.png',
	'sourceSmall' : 'images/design-uihi-infographic-depression-400.png',
	'preview' : 'images/design-uihi-infographic-depression-preview.jpg',
	'date' : 20170830,
	'title' : '<h1>UIHI Infographics</h1><h3>Depression</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for Depression and diagnoses for Depression.</p>'},
	{'name' : 'design-uihi-infographic-education',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-education.png',
	'sourceSmall' : 'images/design-uihi-infographic-education-400.png',
	'preview' : 'images/design-uihi-infographic-education-preview.jpg',
	'date' : 20170829,
	'title' : '<h1>UIHI Infographics</h1><h3>Education</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for education for community and education for medical parties.</p>'},
	{'name' : 'design-uihi-infographic-eye-exam',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-eye-exam.png',
	'sourceSmall' : 'images/design-uihi-infographic-eye-exam-400.png',
	'preview' : 'images/design-uihi-infographic-eye-exam-preview.jpg',
	'date' : 20170829,
	'title' : '<h1>UIHI Infographics</h1><h3>Eye Exam</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for eye exams and eye care.</p>'},
	{'name' : 'design-uihi-infographic-foot-care-2',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-foot-care-2.png',
	'sourceSmall' : 'images/design-uihi-infographic-foot-care-2-400.png',
	'preview' : 'images/design-uihi-infographic-foot-care-2-preview.jpg',
	'date' : 20170828,
	'title' : '<h1>UIHI Infographics</h1><h3>Foot Care Version Two</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is an alternate, pending icon for foot care and podiatry</p>'},
	{'name' : 'design-uihi-infographic-glycemic-control',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-glycemic-control.png',
	'sourceSmall' : 'images/design-uihi-infographic-glycemic-control-400.png',
	'preview' : 'images/design-uihi-infographic-glycemic-control-preview.jpg',
	'date' : 20170828,
	'title' : '<h1>UIHI Infographics</h1><h3>Glycemic Control Version Two</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is an alternate, pending icon for glycemic control/blood sugar regulation.</p>'},
	{'name' : 'design-uihi-infographic-immunization',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-immunization.png',
	'sourceSmall' : 'images/design-uihi-infographic-immunization-400.png',
	'preview' : 'images/design-uihi-infographic-immunization-preview.jpg',
	'date' : 20170827,
	'title' : '<h1>UIHI Infographics</h1><h3>Immunization</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for immunization and preventative care.</p>'},
	{'name' : 'design-uihi-infographic-blood-pressure',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-blood-pressure.png',
	'sourceSmall' : 'images/design-uihi-infographic-blood-pressure-400.png',
	'preview' : 'images/design-uihi-infographic-blood-pressure-preview.jpg',
	'date' : 20170827,
	'title' : '<h1>UIHI Infographics</h1><h3>Blood Pressure</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for blood pressure monitorization and control.</p>'},
	{'name' : 'design-uihi-infographic-heart',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-heart.png',
	'sourceSmall' : 'images/design-uihi-infographic-heart-400.png',
	'preview' : 'images/design-uihi-infographic-heart-preview.jpg',
	'date' : 20170826,
	'title' : '<h1>UIHI Infographics</h1><h3>Heart Care</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used for cardiac contorl/heart care.</p>'},
	{'name' : 'design-uihi-infographic-kidneys',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-kidneys.png',
	'sourceSmall' : 'images/design-uihi-infographic-kidneys-400.png',
	'preview' : 'images/design-uihi-infographic-kidneys-preview.jpg',
	'date' : 20170826,
	'title' : '<h1>UIHI Infographics</h1><h3>Kidney Care</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used kidney care/urinary monitorization.</p>'},
	{'name' : 'design-uihi-infographic-TB-screening',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographic-TB-screening.png',
	'sourceSmall' : 'images/design-uihi-infographic-TB-screening-400.png',
	'preview' : 'images/design-uihi-infographic-TB-screening-preview.jpg',
	'date' : 20170825,
	'title' : '<h1>UIHI Infographics</h1><h3>Tuberculosis Screening</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed 12 icons with a 4 color palette to be created in 48 hours. These icons are for their 2017 diabetes report (link to follow when published). This infographic is used Tuberculosis Screening.</p>'},
	{'name' : 'design-uihi-infographics-human-comparison',
	'category' : '12 Icons, 48 Hours',
	'source' : 'images/design-uihi-infographics-human-comparison.png',
	'sourceSmall' : 'images/design-uihi-infographics-human-comparison-400.png',
	'preview' : 'images/design-uihi-infographics-human-comparison-preview.jpg',
	'date' : 20170824,
	'title' : '<h1>UIHI Infographics</h1><h3>General Human</h3><p>August 2017</p>',
	'description' : '<p><a href="http://www.uihi.org" target="_blank">The Urban Indian Health Institute</a> needed a general person design to be used for all comparative population data. This graph is not used in the diabetes report, rather it is an illustrative example of how this person icon can be used.</p>'},
    {'name' : 'design-the-vulpe-venture-banner',
	'category' : 'Design and Composition',
	'source' : 'images/design-the-vulpe-venture-banner.jpg',
	'sourceSmall' : 'images/design-the-vulpe-venture-banner-400.jpg',
	'preview' : 'images/design-the-vulpe-venture-banner-preview.jpg',
	'date' : 20171231,
	'title' : '<h1>The Vulpe Venture</h1><h3>Banners</h3><p>December 2017</p>',
	'description' : '<p><a href="http://www.thevulpeventure.com" target="_blank">The Vulpe Venture</a> banner, specifically used for Twitter, but there are formatted versions for each indidvidual social media banner&apos;s dimensions.</p>'},
    {'name' : 'design-the-vulpe-venture-logo',
	'category' : 'Web Logos',
	'source' : 'images/design-the-vulpe-venture-logo.png',
	'sourceSmall' : 'images/design-the-vulpe-venture-logo-400.png',
	'preview' : 'images/design-the-vulpe-venture-logo-preview.png',
	'date' : 20171231,
	'title' : '<h1>The Vulpe Venture</h1><h3>Logo</h3><p>December 2017</p>',
	'description' : '<p><a href="http://www.thevulpeventure.com" target="_blank">The Vulpe Venture</a> logo, this is used in all promotional material for the web and print.</p>'},
    {'name' : 'design-poly-entertainment-logo',
	'category' : 'Web Logos',
	'source' : 'images/design-poly-entertainment-logo.png',
	'sourceSmall' : 'images/design-poly-entertainment-logo-400.png',
	'preview' : 'images/design-poly-entertainment-logo-preview.png',
	'date' : 20171101,
	'title' : '<h1>Poly entertainment</h1><h3>Logo</h3><p>November 2017</p>',
	'description' : '<p><a href="http://www.polyentertainment.com" target="_blank">Poly entertainment</a> logo, this is used in all promotional material for the web and print.</p>'},
    {'name' : 'design-personal-logo',
	'category' : 'Web Logos',
	'source' : 'images/design-personal-logo.png',
	'sourceSmall' : 'images/design-personal-logo.png',
	'preview' : 'images/design-personal-logo.png',
	'date' : 20171001,
	'title' : '<h1>Personal Website</h1><h3>Logo</h3><p>October 2017</p>',
	'description' : '<p><a href="http://www.missellepope.com" target="_self">Miss Elle Pope&apos;s</a> logo, this is used only in promotional material for personal website and is not associated with any other projects.</p>'}
];

//This array is for webLinks and previews, since function is much different than images

var webLinks = [
	{'name' : 'website-matt-rothaus',
	 'category' : 'PHP and WordPress',
	 'preview' : 'images/website-matt-rothaus.jpg',
	 'date' : 20170927,
	 'hyperlink' : 'http://www.mr-ecology.com',
	 'description' : '<h1>Ecology Blog</h1><h3>Wordpress and Contact Forms</h3><p>September 2017</p><p>Along with creating a functional Wordpress blog that the author can easily update, the challenge of a custom web form was had.</p>'},
	{'name' : 'website-magic-8-ball',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-magic-8-ball.jpg',
	'date' : 20171005,
	'hyperlink' : 'https://misselle.github.io/8-ball/',
	'description' : '<h1>Sarcastic 8-Ball</h1><h3>Array Generation Test</h3><p>April 2017</p><p>Test to use minimal amount of imagery for maximum design. Only "8" is an image. 8-Ball will give sarcastic responses to questions as well as specific answers to specific questions.</p>'},
	{'name' : 'website-calculator-animation',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-calculator-animation.jpg',
	'date' : 20170420,
	'hyperlink' : 'https://misselle.github.io/number-or-string/',
	'description' : '<h1>Detect Words or Numbers</h1><h3>Bitmap Animation Test</h3><p>April 2017</p><p>Assignment for Certificate. Developed a jQuery function to detect if an input was a number or a string, collect that data, and count the instances of words used. Played with bitmap animations and compositions of inputted elements.</p>'},
	{'name' : 'website-form-inputs',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-form-inputs.jpg',
	'date' : 20170504,
	'hyperlink' : 'https://misselle.github.io/form-elements/',
	'description' : '<h1>Form Elements</h1><h3>Input Reflection</h3><p>May 2017</p><p>Assignment for Certificate. Developed a form with all elements stylized. In another field, the element inputs are reflected.</p>'},
	{'name' : 'website-database-handlebars',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-database-handlebars.jpg',
	'date' : 20170604,
	'hyperlink' : 'https://misselle.github.io/database-handlebars/',
	'description' : '<h1>Database Form</h1><h3>HandleBars</h3><p>June 2017</p><p>Assignment for Certificate. Developed a form that stores data through .ajax. Table is then generated through {{handlebars}}</p>'},
	{'name' : 'website-database-rest-api',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-database-rest-api.jpg',
	'date' : 20170528,
	'hyperlink' : 'https://misselle.github.io/database-rest/',
	'description' : '<h1>Database Form</h1><h3>REST API</h3><p>May 2017</p><p>Assignment for Certificate. Developed a form that stores data through REST API. Table is then generated through a jQuery form.</p>'},
	{'name' : 'website-map-video',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-map-video.jpg',
	'date' : 20170511,
	'hyperlink' : 'https://misselle.github.io/map/',
	'description' : '<h1>Map Embedding</h1><h3>Mother&#39;s Day Card</h3><p>May 2017</p><p>Assignment for Certificate. Embedded a Google Map and created a form that links to my favorite Seattle Locations. When location is selected, video changes to me at that location to show my mother who does not live here.</p>'},
	{'name' : 'website-poly-entertainment',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-poly-entertainment.jpg',
	'date' : 20171027,
	'hyperlink' : 'http://www.polyentertainment.com',
	'description' : '<h1>Poly entertainment</h1><h3>Business Website</h3><p>July 2017</p><p>Assignment for Certificate. Fully developed website, created hamburger menu, timer to launch of company, and adjustable scanline overlay.'},
	{'name' : 'website-stellar-calculator',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-stellar-calculator.jpg',
	'date' : 20170412,
	'hyperlink' : 'https://misselle.github.io/calculator/',
	'description' : '<h1>Stellar Calculator</h1><h3>Basic Calculations</h3><p>April 2017</p><p>Assignment for Certificate. Simple calculator that performs addition, mean, and count of all numbers. For an added challenge, generates a div that looks like a star bouncing around screen.'},
	{'name' : 'website-xylophone',
	'category' : 'Javascript and JQuery',
	'preview' : 'images/website-xylophone.jpg',
	'date' : 20171026,
	'hyperlink' : 'https://misselle.github.io/xylophone/',
	'description' : '<h1>Xylophone</h1><h3>An extension of my class assignment, this is a test of playing audio and hover and click events using javascript.'},
    {'name' : 'website-the-vulpe-venture',
	'category' : 'PHP and WordPress',
	'preview' : 'images/website-the-vulpe-venture.jpg',
	'date' : 20180101,
	'hyperlink' : 'http://www.missellepope.com/temp.html',
	'description' : '<h1>Victoria Vulpe</h1><h3>presents the Vulpe Venture</h3><p>January 2018</p><p>A website based in WordPress created for a health and wellness blog. This website features vegan recipes, travel, support, and products featuring the brand.</p>'}
];

//Oject is for all images that do not have a matching name in the array

var brokenLink = {
	'source' : 'images/shrug.svg',
	'description' : '<h2>Uh Oh!<br> A Broken Link!</h2> <br><p>It looks like the artist programmed this site wrong! Silly Artist, thinking she&#39;s a programmer...</p>'
};
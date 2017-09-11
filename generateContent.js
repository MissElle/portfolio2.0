//============================================//
//javascript - portfolio 2.0
//============================================//
// This is an array of all images on the website.//

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

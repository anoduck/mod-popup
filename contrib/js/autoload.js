// vim: set filetype=javscript
// -*- mode:js2-mode -*-
// ==================================================
// Hinode module popup - popup.js
// --------------------------------------------------
// Copyright @anoduck => Anoduck, The Anonymous Duck
// https://anoduck.mit-license.org
// --------------------------------------------------
// https://codepen.io/anoduck/pen/QwLXbLo
// --------------------------------------------------
// I wasn't supposed to know anything about Javascript.
// Well, I surely surprised myself.


var css = ".img-replace{display:inline-block;overflow:hidden;text-indent:100%;color:transparent;white-space:nowrap;}.bts-popup{position:fixed;left:0;top:0;height:100%;width:100%;background-color:rgba(0,0,0,.5);opacity:0;visibility:hidden;-webkit-transition:opacity .3s 0s,visibility 0s .3s;-moz-transition:opacity .3s 0s,visibility 0s .3s;transition:opacity .3s 0s,visibility 0s .3s;}.bts-popup.is-visible{opacity:1;visibility:visible;-webkit-transition:opacity .3s 0s,visibility 0s 0s;-moz-transition:opacity .3s 0s,visibility 0s 0s;transition:opacity .3s 0s,visibility 0s 0s;}.bts-popup-container{position:relative;width:90%;max-width:400px;margin:4em auto;background:#a0cff1;border-radius:none;text-align:center;box-shadow:0 0 2px rgba(0,0,0,.2);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px);-webkit-backface-visibility:hidden;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;transition-property:transform;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;transition-duration:.3s;}.bts-popup-container img{padding:20px 0 0 0;}.bts-popup-container p{color:white;padding:10px 40px;}.bts-popup-container .bts-popup-button{padding:5px 25px;border:2px solid white;display:inline-block;margin-bottom:10px;}.bts-popup-container a{color:white;text-decoration:none;text-transform:uppercase;}.bts-popup-container .bts-popup-close{position:absolute;top:8px;right:8px;width:30px;height:30px;}.bts-popup-container .bts-popup-close::before,.bts-popup-container .bts-popup-close::after{content: none;position:absolute;top:12px;width:16px;height:3px;background-color:white;}.bts-popup-container .bts-popup-close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);left:8px;}.bts-popup-container .bts-popup-close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);right:6px;top:13px;}.is-visible .bts-popup-container{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}@media only screen and (min-width:1170px){.bts-popup-container{margin:8em auto}}";

// injectCSS "borrowed" from tippy-bundle.umd.js
function injectCSS(css) {
	var style = document.createElement('style');
	style.textContent = css;
	var head = document.head;
	var styleTag = document.querySelector('head>style,head>link');

	if (styleTag) {
		head.insertBefore(style, styleTag);
	} else {
		head.appendChild(style);
	}
};

// Create content in reverse order
function createContent() {
	//create title
	var popupTitle = document.createElement('h1');
	popupTitle.innerHTML = 'Here is a title';

	//create image
	var popupImage = document.createElement('img');
	popupImage.setAttribute('src', 'https://res.cloudinary.com/solardump/image/upload/v1738747178/under_construction_PNG46_rajllh.png');
	popupImage.setAttribute('alt', 'Here is some alternative text');

	//create para
	var popupContent = document.createElement('p');
	popupContent.classList.add('popup-content');
	popupContent.innerHTML = 'Here is some content for the main body of text of the popup.';

	//create button div
	var popupButtonDiv = document.createElement('div');
	popupButtonDiv.classList.add('bts-popup-button');

	//create button link
	var popupButtonLink = document.createElement('a');
	popupButtonLink.setAttribute('href', '#0')

	//create close element
	var popupCloseBtn = document.createElement('a');
	popupCloseBtn.setAttribute('href', '#0')
	popupCloseBtn.classList.add('bts-popup-close img-replace')
	popupCloseBtn.innerHTML = 'Close';

	//create container
	var popupContainer = document.createElement('div');
	popupContainer.classList.add('bts-popup-container');

	//create divPopup
	var divPopup = document.createElement('div');
	divPopup.classList.add('bts-popup');
	divPopup.ariaRoleDescription = 'alert';

	//start adding it all together
	divPopup.innerHTML = popupContainer;
	popupButtonDiv.innerHTML = popupButtonLink;
	popupContainer.innerHTML = popupTitle + popupImage + popupContent + popupButtonDiv + popupCloseBtn;

	// add content to page.
	var body = document.getElementsByTagName('body');
	body.innerHTML += divPopup;
};

// Main Function
document.addEventListener('DOMContentLoaded', function() {
	// Create the content
	injectCSS(css);
	createContent();

	// Open on load.
	const loadPopup = () => localStorage.getItem('hinode-popup');
	let popupElem = document.querySelector('.bts-popup');
	if (loadPopup === undefined || loadPopup != false) {
		localStorage.setItem('hinode-popup', true);
		setTimeout(() => {popupElem.classList.add('is-visible'); }, 1000);
	};

	// Close on click
	var popupCloseElem = document.querySelector('.bts-popup-close');
	popupCloseElem.addEventListener('click', function() {
		if ( popupCloseElem ) {
			localStorage.setItem('hinode-popup', false);
			popupElem.classList.remove('is-visible');
			popupCloseElem.removeEventListener('click', this);
		};
	});
});

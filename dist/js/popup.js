// Main Function
window.addEventListener('readystatechange', (event) => {
	const cname = 'hinode-popup';
	const divPopup = document.querySelector('div.bts-popup');
	const divCookie = document.querySelector('div.cookie-banner')

	//while rendering in page
	function setCookie(cname, cvalue, exdays) {
		const expdate = new Date();
		expdate.setTime(expdate.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = "expires="+expdate.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	function getCookie(cname) {
		let name = cname + "=";
		let cookie_list = document.cookie.split(';');
		for(let i = 0; i < cookie_list.length; i++) {
			let cookie_item = cookie_list[i];
			while (cookie_item.charAt(0) == ' ') {
				cookie_item = cookie_item.substring(1);
			}
			if (cookie_item.indexOf(name) == 0) {
				return cookie_item.substring(name.length, cookie_item.length);
			}
		}
		return "";
	}

	function hidePopup(divPopup) {
		setCookie(cname, false, 30);
		divPopup.classList.remove('is-visible');
	}

	function showCkMsg(divCookie) {
		divCookie.classList.add('is-visible');		
	}

	function hideCkMsg(divCookie) {
		divCookie.classList.remove('is-visible')
	}

	function checkCookie(){
		var cookieEnabled = navigator.cookieEnabled;
		if (!cookieEnabled){
			// Open on load.
			const loadPopup = () => localStorage.getCookie(cname);
			if (loadPopup === undefined || loadPopup == "") {
				setCookie(cname, true, 30);
				setTimeout(() => {divPopup.classList.add('is-visible'); }, 1000);
			} else if ( loadPopup == false ){
				hidePopup(divPopup);
			}
			cookieEnabled = getCookie(cname);
		}
		return cookieEnabled || showCookieFail();
	}
	
	function showCookieFail(){
	  // do something here
		hidePopup(divPopup);
		showCkMsg(divCookie);
	}
	
	if (document.readyState === "interactive") {	
		if (checkCookie()) {
			// Close on click
			const popupXClose = document.querySelector('.bts-popup-close');
			popupXClose.addEventListener('click', function(event) {
				hidePopup(divPopup);
				event.preventDefault();
			});

			//Close on button click
			const popupButton = document.querySelector('.bts-popup-button');
			popupButton.addEventListener('click', function(event) {
				hidePopup(divPopup);
				event.preventDefault();
			});

			// Handle Escape Key
			window.addEventListener('keyup', (event) => {
				if (event.defaultPrevented) {
					return;
				}
				if (event.key === 'Escape') {
					hidePopup(divPopup);
				}
				event.preventDefault();
			});
		} else {
			const ckMsgDismiss = document.querySelector('btn.dismiss');
			ckMsgDismiss.addEventListener('click', () => {
				hideCkMsg(divCookie);
				event.preventDefault();
			});
			
			window.addEventListener('keyup', (event) => {
				if (event.defaultPrevented) {
					return;
				}
				if (event.key === 'Escape') {
					hideCkMsg(divCookie);
				}
				event.preventDefault();
			});
		};
	};
});
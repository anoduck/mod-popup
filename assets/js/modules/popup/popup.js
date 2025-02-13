// Main Function
document.addEventListener('readystatechange', (event) => {
	if (document.readyState === "interactive") {
		console.log('Hinode Module popup is loading...')
		const cname = 'hinode-popup';
		const divPopup = document.querySelector('div.bts-popup');
		const divCookie = document.querySelector('div.cookie-banner#cookie-banner')

		const modDebug = document.querySelector('div#debug')
		const enableDebug = modDebug.dataset.debug;

		function logDebug(msg) {
			if (enableDebug) {
				console.log(msg)
			}
		}

		logDebug('Ready State Loaded');
		logDebug('ReadyState is interactive.')

		function blurPage() {
			logDebug('Blur on')
			document.body.classList.add('cover', 'blur-in');
			document.body.id = 'overlay'
		}

		function clearPage() {
			logDebug('Blur off')
			document.body.classList.remove('blur-in');
			document.body.classList.add('blur-out');
		}

		function fadeInPopup(divPopup) {
			logDebug('Fade in Popup')
			divPopup.classList.add('fade-in')
		}

		//while rendering in page
		function setCookie(cname, cvalue, exdays) {
			const expdate = new Date();
			expdate.setTime(expdate.getTime() + (exdays * 24 * 60 * 60 * 1000));
			let expires = "expires="+expdate.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			logDebug('Cookie Set')
		}
		
		function getCookie(cname) {
			let name = cname + "=";
			let cookie_list = document.cookie.split(';');
			for(let i = 0; i < cookie_list.length; i++) {
				let cookie_item = cookie_list[i];
				while (cookie_item.charAt(0) == ' ') {
					cookie_item = cookie_item.substring(1);
				}
				logDebug('Got Cookie')
				if (cookie_item.indexOf(name) == 0) {
					return cookie_item.substring(name.length, cookie_item.length);
				}
			}
			return "";
		}

		function hidePopup(divPopup, docCookie) {
			logDebug('Hide Popup')
			clearPage();
			divPopup.classList.remove('is-visible');
			if (docCookie === true) {
				setCookie(cname, false, 30)
			}
		}

		function dismissPopup(divPopup) {
			logDebug('Dismiss Popup')
			clearPage();
			divPopup.classList.remove('is-visible');
		}

		function showPopup(cname, divPopup) {
			//Set Cookie to false
			logDebug('Show Popup.')
			blurPage();
			fadeInPopup(divPopup);
			setCookie(cname, true, 30);
			setTimeout(() => {divPopup.classList.add('is-visible'); }, 1000);
		}

		function showCkMsg(divCookie) {
			logDebug('Show Cookie Message')
			setTimeout(() => {divCookie.classList.add('is-visible'); }, 1000);
		}

		function hideCkMsg(divCookie) {
			logDebug('Hide Cookie Message')
			divCookie.classList.remove('is-visible')
		}

		function checkCookie() {
			logDebug('Checking for cookies.')
			var cookieEnabled = navigator.cookieEnabled;
			if (!cookieEnabled){
				logDebug('Cookies not enabled.')
				document.cookie = cname;
				cookieEnabled = document.cookie.indexOf(cname)!=-1;
				hidePopup(divPopup);
				showCkMsg(divCookie);
			}
			return cookieEnabled || showCookieFail();
		}
		
		function showCookieFail() {
			logDebug('Cookie test failed.')
		// do something here
			hidePopup(divPopup);
			showCkMsg(divCookie);
		}

		//Change behavior if reloaded
		//do something.
		
		// The meat
		var cookieEnabled = checkCookie();
		logDebug('Are cookies enabled? ' + cookieEnabled)
		if (cookieEnabled) {
			logDebug('working on popups')
			var docCookie = getCookie(cname);
			if (docCookie == false) {
				logDebug('cookie exists')
				hideCkMsg(divCookie);
				hidePopup(divPopup, docCookie);
			} else if (docCookie == true) {
				logDebug('Cookie does not exist')
				showPopup(cname, divPopup);

				//Close on button click
				const popupButton = document.querySelector('.bts-popup-button');
				popupButton.addEventListener('click', function(event) {
					logDebug('Button Clicked')
					hidePopup(divPopup, docCookie);
					event.preventDefault();
				});
				
				// Close on click
				const popupXClose = document.querySelector('.bts-popup-close');
				popupXClose.addEventListener('click', function(event) {
					logDebug('Close Clicked')
					dismissPopup(divPopup);
					event.preventDefault();
				});

				// Handle Escape Key
				window.addEventListener('keyup', (event) => {
					logDebug('Escape Key')
					if (event.defaultPrevented) {
						return;
					}
					if (event.key === 'Escape') {
						dismissPopup(divPopup);
					}
					event.preventDefault();
				});
			}
		} else {
			const ckMsgDismiss = document.querySelector('btn.dismiss');
			ckMsgDismiss.addEventListener('click', () => {
				logDebug('Dismiss Button')
				hideCkMsg(divCookie);
				event.preventDefault();
			});
			
			window.addEventListener('keyup', (event) => {
				logDebug('Escape Cookie Alert')
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
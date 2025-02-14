// Main Function
document.addEventListener('readystatechange', (event) => {
	if (document.readyState === "interactive") {
		console.log('Hinode Module popup is loading...')
		const cname = 'hinode-popup';
		const divPopup = document.querySelector('div.bts-popup');
		const divCookie = document.querySelector('div.cookie-banner#cookie-banner')

		const modDebug = document.querySelector('div#debug')
		function logDebug(msg) {
			if (modDebug) {
				console.log(msg)
			}
		}

		logDebug('Ready State Loaded');
		logDebug('ReadyState is interactive.')

		const exceptPopup = document.querySelectorAll('body > *:not(#popup)');
		function addBlur(exceptPopup) {
			Array.from(exceptPopup).forEach(
				(el) => el.classList.add('blur-in')
			);
		}

		function removeBlur(exceptPopup) {
			Array.from(exceptPopup).forEach(
				(el) => el.classList.remove('blur-in'),
				(el) => el.classList.add('blur-out')
			);
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
				logDebug('Got Cookie value: ' + cookie_item)
				if (cookie_item.indexOf(name) == 0) {
					var cookie_value = cookie_item.substring(name.length, cookie_item.length);
					logDebug('Value of cookie is: ' + cookie_value)
					if (cookie_value == "") {
						logDebug('Recieved empty value for cookie.')
						return true;
					} else {
						return cookie_value
					}
				}
			}
			// return "";
			logDebug('Cookie Value returned blank string')
			return true
		}

		function hidePopup(divPopup, docCookie) {
			logDebug('Hide Popup')
			removeBlur(exceptPopup);
			divPopup.classList.remove('is-visible');
			if (docCookie === true) {
				setCookie(cname, false, 30)
			}
		}

		function dismissPopup(divPopup) {
			logDebug('Dismiss Popup')
			removeBlur(exceptPopup);
			divPopup.classList.remove('is-visible');
		}

		function showPopup(cname, divPopup) {
			//Set Cookie to false
			logDebug('Show Popup.')
			addBlur(exceptPopup);
			fadeInPopup(divPopup);
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
			logDebug('Cookie Contents: ' + docCookie)
			if (docCookie === false) {
				logDebug('cookie is false | hide popup')
				hideCkMsg(divCookie);
				hidePopup(divPopup, docCookie);
			} else if (docCookie === true) {
				logDebug('Cookie is true | show popup')
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
					logDebug('Escape Key pressed on popup')
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
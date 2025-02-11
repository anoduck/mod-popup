// Main Function
document.addEventListener('DOMContentLoaded', function() {
	const cname = 'hinode-popup';
	const divPopup = document.querySelector('div.bts-popup');

	//while rendering in page
	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	function getCookie(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
			c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function hidePopup(divPopup) {
		setCookie(cname, false, 30);
		divPopup.classList.remove('is-visible');
	}

	// Open on load.
	const loadPopup = () => localStorage.getCookie(cname);
	if (loadPopup === undefined || loadPopup == "") {
		setCookie(cname, true, 30);
		setTimeout(() => {divPopup.classList.add('is-visible'); }, 1000);
	} else if ( loadPopup == false ){
		hidePopup(divPopup);
	}

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
});
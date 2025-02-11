// Main Function
document.addEventListener('DOMContentLoaded', function() {
	//while rendering in page
	
	
	// Open on load.
	const loadPopup = () => localStorage.getItem('hinode-popup');
	if (loadPopup === undefined || loadPopup != false) {
		localStorage.setItem('hinode-popup', true);
		setTimeout(() => {divPopup.classList.add('is-visible'); }, 1000);
	};

	const divPopup = document.querySelector('div.bts-popup');

	// Close on click
	const popupXClose = document.querySelector('.bts-popup-close');
	popupXClose.addEventListener('click', function(event) {
		localStorage.setItem('hinode-popup', false);
		divPopup.classList.remove('is-visible');
		event.preventDefault();
	});

	//Close on button click
	const popupButton = document.querySelector('.bts-popup-button');
	popupButton.addEventListener('click', function(event) {
		localStorage.setItem('hinode-popup', false);
		divPopup.classList.remove('is-visible');
		event.preventDefault();
	});

	// Handle Escape Key
	window.addEventListener('keyup', (event) => {
		if (event.defaultPrevented) {
			return;
		}
		if (event.key === 'Escape') {
			localStorage.setItem('hinode-popup', false);
			divPopup.classList.remove('is-visible');
		}
		event.preventDefault();
	});
});
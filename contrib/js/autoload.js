() => {
	'use strict';
	document.addEventListener('DOMContentLoaded', () => {
		// Check if the page is under construction
		if (document.body.classList.contains('under-construction')) {
			// Create the overlay element
			const overlay = document.createElement('div');
			overlay.id = 'under-construction-overlay';
			overlay.innerHTML = `
			<div class="content">
				<h1>Under Construction</h1>
				<p>We are currently working on this page. Please check back later.</p>
			</div>
			`;
			// Append the overlay to the body
			document.body.appendChild(overlay);
		}
			});
}

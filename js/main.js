function toggleRedBorder(clickedButton) {
	const buttons = document.querySelectorAll('.age-button');

	buttons.forEach(button => {
	button.classList.remove('clicked');
	});


	clickedButton.classList.add('clicked');
}
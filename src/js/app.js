function addButtonText(value) {
	buttonText = value;
	updateView();
}

function addButtonColor(value) {
	buttonColor = value;
	updateView();
}

function addButtonBackgroundColor(value) {
	buttonBackgroundColor = value;
	updateView();
}

function createButton(buttonText, buttonColor, buttonBackgroundColor) {
	return `<button style="background: ${buttonBackgroundColor}; color: ${buttonColor};">${buttonText}</button>`;
}

function buttonUpdate() {
	const button = createButton(buttonText, buttonColor, buttonBackgroundColor);

	output += button;

	updateView();
}

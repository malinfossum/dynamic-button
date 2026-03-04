const app = document.getElementById("app");

let buttonText = "";
let buttonColor = "#ffffff";
let buttonBackgroundColor = "#ffffff";
let output = "";

updateView();
function updateView() {
	app.innerHTML = /*HTML*/ `
    <h1>Dynamic Button</h1>

    <section>
    <label for="buttonText">Text:</label>
    <input onchange="addButtonText(this.value)" id="buttonText" type="text" placeholder="Please enter text" autocomplete="off" value="${buttonText}">

    <br><br>

    <label for="buttonColor">Color:</label>
    <input onchange="addButtonColor(this.value)" id="buttonColor" type="color" value="${buttonColor}">

    <br><br>

    <label for="buttonBackgroundColor">Background color:</label>
    <input onchange="addButtonBackgroundColor(this.value)" id="buttonBackgroundColor" type="color" value="${buttonBackgroundColor}">

    <br><br>

    <button onclick="buttonUpdate()">Create Button</button>

    <br>

    <div id="buttons">${output}</div>
    </section>
  `;
}

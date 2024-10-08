import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Luc's Game!";
document.title = gameName;

const button = document.createElement("Button");
button.textContent = "🍪 Click"; //Emoji next to button
button.style.position = "absolute";
button.style.top = "40%"; // Used to place button properly
button.style.left = "50%"; // Used to place button properly
button.style.transform = "translate(-50%, -50%)"; // Used to place button properly
document.body.appendChild(button); // Appending button

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

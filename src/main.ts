import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Luc's Game!";
document.title = gameName;

const button = document.createElement("Button");
let counter: number = 0;

//displaying counter
const counterDisplay = document.createElement("p");
counterDisplay.style.position = "absolute";
counterDisplay.style.top = "60%"; // Position under the button
counterDisplay.style.left = "50%";
counterDisplay.style.transform = "translate(-50%, 0)";
document.body.appendChild(counterDisplay); // Append counter display

button.textContent = "🍪 Click"; //Emoji next to button
button.style.position = "absolute";
button.style.top = "40%"; // Used to place button properly
button.style.left = "50%"; // Used to place button properly
button.style.transform = "translate(-50%, -50%)"; // Used to place button properly
document.body.appendChild(button); // Appending button
button.addEventListener("click", () => {
  counter += 1;
  console.log(counter);
  counterDisplay.textContent = `Counter: ${counter}`; // Updating counter to appear properly
});

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let start = performance.now(); // Starting frame

function increaseCounter(currTime: number) {
  //Calcing total time passed inbetween frames
  const elapsed = currTime - start;
  start = currTime;

  //Increasing counter
  counter += elapsed / 1000;

  counterDisplay.textContent = `Counter: ${counter}`; // Updating counter to appear properly

  //Calling function recursively to continue forever
  requestAnimationFrame(increaseCounter);
  //console.log(elapsed);
}

//Starting time cycle
requestAnimationFrame(increaseCounter);

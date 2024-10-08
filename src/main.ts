import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Luc's Game!";
document.title = gameName;

const button = document.createElement("Button");

let counter: number = 0;
let growthRate = 0;
let upgrade1c = 0;
let upgrade2c = 0;
let upgrade3c: number = 0;

//displaying counter
const counterDisplay = document.createElement("p");
counterDisplay.style.position = "absolute";
counterDisplay.style.top = "60%"; // Position under the button
counterDisplay.style.left = "50%";
counterDisplay.style.transform = "translate(-50%, 0)";
document.body.appendChild(counterDisplay); // Append counter display

//display upgrade 1
const dupgrade1c = document.createElement("p");
dupgrade1c.style.position = "absolute";
dupgrade1c.style.top = "80%"; // Position under the button
dupgrade1c.style.left = "30%";
dupgrade1c.style.transform = "translate(-50%, 0)";
document.body.appendChild(dupgrade1c); // Append counter display

//display upgrade 2
const dupgrade2c = document.createElement("p");
dupgrade2c.style.position = "absolute";
dupgrade2c.style.top = "80%"; // Position under the button
dupgrade2c.style.left = "50%";
dupgrade2c.style.transform = "translate(-50%, 0)";
document.body.appendChild(dupgrade2c); // Append counter display

//display upgrade 3
const dupgrade3c = document.createElement("p");
dupgrade3c.style.position = "absolute";
dupgrade3c.style.top = "80%"; // Position under the button
dupgrade3c.style.left = "50%";
dupgrade3c.style.transform = "translate(-50%, 0)";
document.body.appendChild(dupgrade3c); // Append counter display

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
  counter += growthRate * (elapsed / 1000);

  counterDisplay.textContent = `Counter: ${counter}`; // Updating counter to appear properly

  //Calling function recursively to continue forever
  requestAnimationFrame(increaseCounter);
  //console.log(elapsed);
  upgrade1.disabled = counter < (10 + (upgrade1c * 1.15 ));
  upgrade2.disabled = counter < (100 + (upgrade2c * 1.15));
  upgrade3.disabled = counter < (1000 + (upgrade3c * 1.15));
}

//Starting time cycle
requestAnimationFrame(increaseCounter);

const upgrade1 = document.createElement("button") as HTMLButtonElement;
upgrade1.textContent = "Buy Growth Upgrade 1";
upgrade1.style.position = "absolute";
upgrade1.style.top = "70%";
upgrade1.style.left = "30%";
upgrade1.style.transform = "translate(-50%, 0)";
upgrade1.disabled = true; // Initially disabled
document.body.appendChild(upgrade1);

upgrade1.addEventListener("click", () => {
  if (counter >= (10 + (upgrade1c * 1.15 ))){
    console.log((10 + (upgrade1c * 1.15 )));
    counter -= 10;
    growthRate += 1;
    upgrade1c += 1;
    counterDisplay.textContent = `Counter: ${counter}`; // Updating counter to appear properly
    dupgrade1c.textContent = `Num of upgrade 1: ${upgrade1c}`; // Updating num of upgrades
  }
});

const upgrade2 = document.createElement("button") as HTMLButtonElement;
upgrade2.textContent = "Buy Growth Upgrade 2";
upgrade2.style.position = "absolute";
upgrade2.style.top = "70%";
upgrade2.style.left = "50%";
upgrade2.style.transform = "translate(-50%, 0)";
upgrade2.disabled = true; // Initially disabled
document.body.appendChild(upgrade2);

upgrade2.addEventListener("click", () => {
  if (counter >= 100) {
    counter -= 100;
    growthRate += 2;
    upgrade2c += 1;
    counterDisplay.textContent = `Counter: ${counter}`; // Updating counter to appear properly
    dupgrade2c.textContent = `Num of upgrade 1: ${upgrade2c}`; // Updating num of upgrades
  }
});

const upgrade3 = document.createElement("button") as HTMLButtonElement;
upgrade3.textContent = "Buy Growth Upgrade 3";
upgrade3.style.position = "absolute";
upgrade3.style.top = "70%";
upgrade3.style.left = "70%";
upgrade3.style.transform = "translate(-50%, 0)";
upgrade3.disabled = true; // Initially disabled
document.body.appendChild(upgrade3);

upgrade3.addEventListener("click", () => {
  if (counter >= 1000) {
    counter -= 1000;
    growthRate += 50;
    upgrade3c += 1;
    counterDisplay.textContent = `Counter: ${counter}`; // Updating counter to appear properly
    dupgrade3c.textContent = `Num of upgrade 1: ${upgrade3c}`; // Updating num of upgrades
  }
});

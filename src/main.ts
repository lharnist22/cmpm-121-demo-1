import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Luc's Gym!";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let counter: number = 0;
let growthRate = 0;

interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "Preworkout", cost: 10, rate: 1 },
  { name: "Protein powder", cost: 30, rate: 1.5 },
  { name: "Creatine", cost: 100, rate: 2 },
  { name: "Tren", cost: 1000, rate: 50 },
  { name: "BCAAs", cost: 5000, rate: 75 },
];

const upgradeCounts = Array(availableItems.length).fill(0);

//displaying counter
const counterDisplay = document.createElement("p");
counterDisplay.style.position = "absolute";
counterDisplay.style.top = "60%";
counterDisplay.style.left = "50%";
counterDisplay.style.transform = "translate(-50%, 0)";
document.body.appendChild(counterDisplay);

//display upgrades
const upgradeDisplays = availableItems.map((_, index) => {
  const upgradeDisplay = document.createElement("p");
  upgradeDisplay.style.position = "absolute";
  upgradeDisplay.style.top = "80%";
  upgradeDisplay.style.left = `${10 + index * 20}%`;
  upgradeDisplay.style.transform = "translate(-50%, 0)";
  document.body.appendChild(upgradeDisplay);
  return upgradeDisplay;
});

//Rep Button
const repButton = document.createElement("Button");
repButton.textContent = "❚█══█❚ Rep!"; //Emoji next to button
repButton.style.position = "absolute";
repButton.style.top = "40%"; // Used to place button properly
repButton.style.left = "50%"; // Used to place button properly
repButton.style.transform = "translate(-50%, -50%)"; // Used to place button properly
document.body.appendChild(repButton); // Appending button

repButton.addEventListener("click", () => {
  counter += 1;
  counterDisplay.textContent = `Reps: ${counter}`; // Updating counter to appear properly
});

let start = performance.now(); // Starting frame

//Increasing counter price
function increaseCounter(currTime: number) {
  const elapsed = currTime - start;
  start = currTime;

  counter += growthRate * (elapsed / 1000);
  counterDisplay.textContent = `Reps: ${counter.toFixed(1)}`;

  availableItems.forEach((item, index) => {
    const upgradeButton = document.querySelector(`#upgrade${index}`,) as HTMLButtonElement;
    upgradeButton.disabled = counter < item.cost * Math.pow(1.15, upgradeCounts[index]);
  });

  requestAnimationFrame(increaseCounter);
}

requestAnimationFrame(increaseCounter);

// Create upgrade buttons dynamically
availableItems.forEach((item, index) => {
  const upgradeButton = document.createElement("button");
  upgradeButton.id = `upgrade${index}`;
  upgradeButton.textContent = item.name;
  upgradeButton.style.position = "absolute";
  upgradeButton.style.top = "70%";
  upgradeButton.style.left = `${10 + index * 20}%`;
  upgradeButton.style.transform = "translate(-50%, 0)";
  upgradeButton.disabled = true;
  document.body.appendChild(upgradeButton);

  upgradeButton.addEventListener("click", () => {
    const currentCost = item.cost * Math.pow(1.15, upgradeCounts[index]);
    if (counter >= currentCost) {
      counter -= currentCost;
      growthRate += item.rate;
      upgradeCounts[index] += 1;
      counterDisplay.textContent = `Reps: ${counter}`;
      upgradeDisplays[index].textContent =
        `${item.name}: ${upgradeCounts[index]}`;
    }
  });
});

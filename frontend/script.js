let coins = 20;
let energy = 1000;
let maxEnergy = 1000;
let tapPower = 1;
let xp = 20;
let maxXp = 1000;

const coinText = document.getElementById("coins");
const energyText = document.getElementById("energyText");
const energyBar = document.getElementById("energyBar");
const xpText = document.getElementById("xpText");
const xpBar = document.getElementById("xpBar");
const tapButton = document.getElementById("tapButton");

function updateUI() {
    coinText.innerText = coins;
    energyText.innerText = energy + " / " + maxEnergy;
    xpText.innerText = xp + " / " + maxXp;

    energyBar.style.width = (energy / maxEnergy) * 100 + "%";
    xpBar.style.width = (xp / maxXp) * 100 + "%";
}

tapButton.addEventListener("click", () => {

    if (energy <= 0) return;

    coins += tapPower;
    xp += tapPower;
    energy--;

    if (xp >= maxXp) {
        xp = 0;
        alert("🎉 Level Up!");
    }

    updateUI();
});

setInterval(() => {

    if (energy < maxEnergy) {
        energy++;
        updateUI();
    }

}, 1000);

updateUI();

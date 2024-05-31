let homeScore = document.getElementById("homesc-el");
let guestScore = document.getElementById("guestsc-el");
let count1 = 0
let count2 = 0

function plusOneHome() {
    count1++;
    homeScore.textContent = count1;
}

function plusTwoHome() {
    count1 += 2;
    homeScore.textContent = count1;
}

function plusThreeHome() {
    count1 += 3;
    homeScore.textContent = count1;
}

function plusOneGuest() {
    count2++;
    guestScore.textContent = count2;
}

function plusTwoGuest() {
    count2 += 2;
    guestScore.textContent = count2;
}

function plusThreeGuest() {
    count2 += 3;
    guestScore.textContent = count2;
}
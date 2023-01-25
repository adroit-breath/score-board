let homeCount = 0;
let guestCount = 0;

function HincreamentbyOne() {
    homeCount++;
    document.getElementById("homecount").innerHTML = homeCount;
}

function Hincreamentbytwo() {
    homeCount += 2;
    document.getElementById("homecount").innerHTML = homeCount;
}

function Hincreamentbythree() {
    homeCount += 3;
    document.getElementById("homecount").innerHTML = homeCount;
}

function GincreamentbyOne() {
    guestCount++;
    document.getElementById("guestcount").innerHTML = guestCount;
}

function Gincreamentbytwo() {
    guestCount += 2;
    document.getElementById("guestcount").innerHTML = guestCount;
}

function Gincreamentbythree() {
    guestCount += 3;
    document.getElementById("guestcount").innerHTML = guestCount;
}

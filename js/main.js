let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menuIcon");
let closeIcon = document.getElementById("closeIcon");
document.getElementById("toggleBtn").addEventListener("click", function () {

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menu.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});

let day = (new Date).getDay();
let hours = ["10 - 16", "Closed", "10 - 16", "10 - 16", "10 - 20", "10 - 16", "10 - 16"];
let todaysHours = hours[day];

document.getElementById(id = "today").innerHTML = todaysHours;
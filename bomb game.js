let Timer = document.getElementById("timer");
let input = document.getElementById("defuser");

let counter = 11;
let intervalId = setInterval(function() {
    counter = counter - 1;
    Timer.textContent = counter;
    if (counter === 0) {
        Timer.textContent = "BOOM !!";
        Timer.style.color = "red";
        clearInterval(intervalId);
    }
}, 1000)

input.addEventListener("keydown", function(Event) {
    let UserInput = input.value;
    if (Event.key === "Enter" && UserInput === "BOOM" && counter !== 0) {
        Timer.textContent = "You did it";
        Timer.style.color = "green";
        clearInterval(intervalId);
    }
})
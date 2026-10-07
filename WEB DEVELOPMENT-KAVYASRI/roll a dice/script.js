const dice = document.getElementById("dice");

const rollButton = document.getElementById("rollButton");

const result = document.getElementById("result");

const rollCount = document.getElementById("rollCount");

const lastRoll = document.getElementById("lastRoll");

let totalRolls = 0;


// Roll Dice Function

function rollDice() {

    // Prevent multiple animations
    rollButton.disabled = true;

    // Add animation
    dice.classList.add("rolling");

    // Show rolling message
    result.textContent = "Rolling...";


    // Generate random number from 1 to 6

    const number =
        Math.floor(Math.random() * 6) + 1;


    // Wait for animation

    setTimeout(function () {

        // Remove old face classes

        dice.classList.remove(
            "face1",
            "face2",
            "face3",
            "face4",
            "face5",
            "face6"
        );


        // Add new face

        dice.classList.add(
            "face" + number
        );


        // Update result

        result.textContent =
            "You rolled " + number + "! 🎉";


        // Update roll counter

        totalRolls++;

        rollCount.textContent =
            totalRolls;


        // Update last roll

        lastRoll.textContent =
            number;


        // Remove animation

        dice.classList.remove("rolling");


        // Enable button

        rollButton.disabled = false;

    }, 700);
}


// Button Click

rollButton.addEventListener(
    "click",
    rollDice
);


// Spacebar

document.addEventListener(
    "keydown",
    function (event) {

        if (event.code === "Space") {

            event.preventDefault();

            if (!rollButton.disabled) {
                rollDice();
            }
        }
    }
);

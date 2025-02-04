// RSVP Submission with Confetti Effect
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    // Adding name to RSVP list
    let listItem = document.createElement("li");
    listItem.textContent = name;
    document.getElementById("rsvpList").appendChild(listItem);

    // Updating RSVP count
    let rsvpCountEl = document.getElementById("rsvpCount");
    let currentCount = parseInt(rsvpCountEl.textContent.match(/\d+/)[0]);
    rsvpCountEl.textContent = "Total Members Count: " + (currentCount + 1);

    // Confetti Animation 🎉
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    this.reset();
});

// Countdown Timer for Next Page
let timeLeft = 10;
const countdownEl = document.getElementById("countdown");

function updateTimer() {
    if (timeLeft > 0) {
        countdownEl.textContent = timeLeft;
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        window.location.href = "farewell-message.html";
    }
}
updateTimer();

// Next Page Button
function goToNextPage() {
    window.location.href = "farewell-message.html";
}

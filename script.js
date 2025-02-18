document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game");
    const messageBox = document.getElementById("message-box");
    const numHearts = 5; // Number of hearts to find
    let foundHearts = 0;

    // Create and add hearts to the game container
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.top = Math.random() * 80 + "vh";
        heart.style.left = Math.random() * 80 + "vw";
        heart.addEventListener("click", () => {
            heart.style.display = "none";
            foundHearts++;
            if (foundHearts === numHearts) {
                showMessageBox();
            }
        });
        gameContainer.appendChild(heart);
    }

    // Function to show the message box
    function showMessageBox() {
        messageBox.classList.remove("hidden");
    }

    // Create and add bubbles to the background
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDelay = Math.random() * 10 + "s";
        document.body.appendChild(bubble);
    }
});

export function animateText() {
    const texts = [
        "developer",
        "coder",
        "programmer",
        "engineer"
    ];

    let index = 0;
    const textElement = document.getElementById("title-transition");

    function updateText() {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateY(10px)"; // Move text down slightly

        setTimeout(() => {
            textElement.textContent = texts[index]; // Change text
            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0px)"; // Reset position
            index = (index + 1) % texts.length; // Loop through the array
        }, 1000); // Sync with transition time
    }

    setInterval(updateText, 2000); // Change text every 2 seconds
    updateText(); // Initialize the first text transition
}
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const page = icon.querySelector('p').textContent.toLowerCase().replace(' ', '') + '.html';
        window.location.href = page;
    });
});

// Function to handle the mouseover event
function iconHover(icon) {
    icon.style.backgroundColor = "rgb(53, 53, 53)"; // Set grey background on hover
}

// Function to handle the mouseout event
function iconOut(icon) {
    icon.style.backgroundColor = ""; // Reset background color when mouse leaves
}

function updateTimeAndDate() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');

    // Get current date and time
    const currentDate = new Date();

    // Format the time (e.g., 12:34 PM)
    const timeString = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Format the date as MM/DD/YYYY (e.g., 12/01/2024)
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Get month (1-12) and pad to 2 digits
    const day = String(currentDate.getDate()).padStart(2, '0'); // Get day (1-31) and pad to 2 digits
    const year = currentDate.getFullYear(); // Get year

    const dateString = `${month}/${day}/${year}`;

    // Update the time and date on the page
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

function taskbarLeftAdjuster() {
    // Select the flex-container
    const container = document.querySelector('.taskbar-right-icons');

    // Select the taskbar-left-ghost element
    const taskbarLeftGhost = document.querySelector('.taskbar-left-ghost');

    if (container && taskbarLeftGhost) {
        // Get the container's dimensions
        const rect = container.getBoundingClientRect();
        const width = rect.width;

        // Set the width of the taskbar-left-ghost element
        taskbarLeftGhost.style.width = `${width - 15}px`;
    } else {
        console.warn("One or both elements are not found.");
    }
}

window.addEventListener('DOMContentLoaded', taskbarLeftAdjuster);
window.addEventListener('resize', taskbarLeftAdjuster);

// Update the time and date every second
setInterval(updateTimeAndDate, 1000);

// Call the function once to initialize it
updateTimeAndDate();

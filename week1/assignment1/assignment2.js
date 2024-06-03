// Import required modules
const readline = require('readline');

// Function to display the current time in HH:MM:SS format
function displayCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours())
    const minutes = String(now.getMinutes())
    const seconds = String(now.getSeconds())
    const time = `${hours}:${minutes}:${seconds}`;

    // Clear the current line and move the cursor to the beginning
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(time);
}

// Update the time every second
setInterval(displayCurrentTime, 1000);

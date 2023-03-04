// get the elements from the HTML file
const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// set the initial time
let hours = 0;
let minutes = 0;
let seconds = 0;

// create a variable to hold the setInterval function
let intervalId;

// asynchronous function to update the timer
async function updateTime() {
  // use a promise to wait for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  // increment the seconds
  seconds++;

  // update the minutes and hours if necessary
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  // format the time as HH:MM:SS
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // update the display
  display.textContent = formattedTime;
}

startButton.addEventListener("click", () => {
    // start the timer by calling the updateTime function every second
    intervalId = setInterval(updateTime, 1000);
    // change the background color of the start button to green
    startButton.style.backgroundColor = "#4CAF50";
  });
  
  stopButton.addEventListener("click", () => {
    // stop the timer by clearing the interval
    clearInterval(intervalId);
    // change the background color of the start button to blue
    startButton.style.backgroundColor = "#2196f3";
    // change the background color of the stop button to red
    stopButton.style.backgroundColor = "#f44336";
  });

resetButton.addEventListener("click", () => {
  // reset the timer and update the display
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = "00:00:00";
});

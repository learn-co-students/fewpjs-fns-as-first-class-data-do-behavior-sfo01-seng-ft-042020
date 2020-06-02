/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
// const greeting = document.getElementById('greeting')
function greet(hourTime) {
  let hourMinutes = hourTime.split(":")
  if (hourMinutes[0] < 12) {
    return "Good Morning"
  }
  else if (hourMinutes[0] > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg
}
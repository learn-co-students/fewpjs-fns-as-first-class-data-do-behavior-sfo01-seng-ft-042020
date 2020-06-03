/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let splitted_time = timeString.split(':');
  let hour_time = splitted_time[0];
  let num_hour = parseInt(hour_time);
  let greeting_msg;
  if (num_hour < 12) {
    greeting_msg = "Good Morning";
  } else if (num_hour > 17 ) {
    greeting_msg = "Good Evening";
  } else {
    greeting_msg = "Good Afternoon";
  }
  return greeting_msg;
}
/* Write your implementation of displayMessage() */
function displayMessage(content) {
  // let greeting = document.getElementById("greeting");
  greeting.innerText = `${content}`;
}
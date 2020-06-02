/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
let hourHand = string.split(0,2)
if (parseInt(hourHand) < 12 ) {
  return "Good Morning"
} else if (parseInt(hourHand) > 12 && parseInt(hourHand) <= 17){
  return "Good Afternoon"
} else {
  return "Good Evening"
}


}

function displayMessage(string){

  let greeting = document.getElementById("greeting");

  greeting.innerText = string;

}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

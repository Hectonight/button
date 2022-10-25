// Getting the button
counter = document.getElementById("counter");

// Getting the counter
num = document.getElementById("number");

// Function to Increase count
function click() {
  num.innerHTML++;
}

// Adding the function to the button
counter.addEventListener("click", click);

// this project is to teach me and reboot my memory about simple javascript logic
// it pretty takes the input of a user and returns a result based on what value
// is selected inside the selector.

// setting a global variable.
const btn = document.getElementById("runBtn");

// creating an event listener for the run button.
btn.addEventListener("click", function() {

// setting some scope variables that are needed.
  const selected = document.getElementById("challenge").value;
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");

// creating an if statement to check what value is chosen in the selector.
// which also has all the logic inside for the funcionality of the project.
  if (selected === "evenOdd") {

    const number = Number(input);

    if (isNaN(number)) {
      result.innerHTML = "please enter a valid number"
    } else if (number % 2 === 0) {
      result.innerHTML = "this number is even!"
    } else {
      result.innerHTML = "this number is Odd!"
    }

  } else if (selected === "reverseString") {

    const reversed = input.split("").reverse().join("");
    result.innerHTML = reversed;

  }
});


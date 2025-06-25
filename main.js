// setting a global variable.
const btn = document.getElementById("runBtn");


btn.addEventListener("click", function() {

  const selected = document.getElementById("challenge").value;
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");

  if (selected === "evenOdd") {

    const number = Number(input);
    if (number % 2 === 0) {
      result.innerHTML = "this number is even!"
    } else {
      result.innerHTML = "this number is odd"
    };

  } else if (selected === "reverseString") {

    const reversed = input.split("").reverse().join("");
    result.innerHTML = reversed;
  }
});


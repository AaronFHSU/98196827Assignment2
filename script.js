const correctNumber = Math.floor(Math.random() * 10 + 1);
let guessedNumber;

while (guessedNumber !== correctNumber) {
  guessedNumber = parseInt(prompt("Guess the number:"));

    if (guessedNumber !== correctNumber) {
      alert("Wrong! Try again.");
    } else {
      alert("Congratulations! You guessed the correct number");
    }
  }

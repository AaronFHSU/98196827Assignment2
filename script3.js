const userNumber = parseInt(prompt("Enter a number:"));

if (!isNaN(userNumber)) {
  for (let i = 1; i <= 10; i++) {
    const result = userNumber * i;
    console.log(`${userNumber} x ${i} = ${result}`);
  }
} else {
  alert("Invalid input. Please enter a valid number.");
}
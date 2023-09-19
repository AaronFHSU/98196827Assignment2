let setPassword;
let confirmPassword;

do {
  setPassword = prompt("Set a password:");
  confirmPassword = prompt("Confirm your password:");

  if (setPassword !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
  }
} while (setPassword !== confirmPassword);

alert("Password set successfully!");
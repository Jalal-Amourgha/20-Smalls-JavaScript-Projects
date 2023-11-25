const input = document.getElementById("input");
let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let symbols = ["!", "@", "#", "$", "%", "&", "(", ")", "_", "-", "?"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  let password = "";

  password += letters[Math.floor(Math.random() * 26)];
  password += letters[Math.floor(Math.random() * 26)].toLowerCase();
  password += symbols[Math.floor(Math.random() * 9)];
  password += numbers[Math.floor(Math.random() * 9)];
  password += letters[Math.floor(Math.random() * 26)];
  password += numbers[Math.floor(Math.random() * 9)];
  password += symbols[Math.floor(Math.random() * 9)];
  password += letters[Math.floor(Math.random() * 26)].toLowerCase();
  password += symbols[Math.floor(Math.random() * 9)];
  password += letters[Math.floor(Math.random() * 26)];
  password += numbers[Math.floor(Math.random() * 9)];
  password += letters[Math.floor(Math.random() * 26)].toLowerCase();

  input.style.color = "black";
  input.value = password;
  return password;
}

function copy() {
  input.style.color = "#F1C376";
  navigator.clipboard.writeText(input.value);
}

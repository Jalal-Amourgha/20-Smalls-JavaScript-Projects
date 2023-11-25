const questions = [
  {
    question: "Who is the greatest player of all time ?",
    answers: [
      { text: "Maradona", correct: false },
      { text: "Pele", correct: false },
      { text: "Messi", correct: true },
      { text: "Cruyff", correct: false },
    ],
  },
  {
    question: "Where did sushi originate ?",
    answers: [
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "Korea", correct: false },
      { text: "Philippine", correct: false },
    ],
  },
  {
    question: "What country drinks the most coffee ?",
    answers: [
      { text: "Iceland", correct: false },
      { text: "Finland", correct: true },
      { text: "Morocco", correct: false },
      { text: "Germany", correct: false },
    ],
  },
  {
    question: "How many hearts does an octopus have ?",
    answers: [
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Which is the only body part that is fully grown from birth ?",
    answers: [
      { text: "Eyes", correct: true },
      { text: "Nose", correct: false },
      { text: "Ears", correct: false },
      { text: "Hands", correct: false },
    ],
  },
  {
    question: "What year was the United Nations established ?",
    answers: [
      { text: "1912", correct: false },
      { text: "1930", correct: false },
      { text: "1942", correct: false },
      { text: "1945", correct: true },
    ],
  },
  {
    question: "What is the most spoken language in the world ?",
    answers: [
      { text: "Arabic", correct: false },
      { text: "English", correct: true },
      { text: "Spanish", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "What is the most popular drink in Morocco ?",
    answers: [
      { text: "Coffee", correct: false },
      { text: "Soda", correct: false },
      { text: "Tea", correct: true },
      { text: "Milk", correct: false },
    ],
  },
  {
    question: "What is the most popular anime in the world ?",
    answers: [
      { text: "One piece", correct: true },
      { text: "Dragon ball", correct: false },
      { text: "Attack on Titan", correct: false },
      { text: "Naruto", correct: false },
    ],
  },
];
const buttons = document.getElementById("option-buttons");
let result = 0;
let i = 0;

function next() {
  document.getElementById("submit").style.display = "none";
  if (i === questions.length) {
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById(
      "question"
    ).innerHTML = `You scored ${result} out ${questions.length} of !`;
    document.getElementById("play-again").style.display = "block";
  } else {
    for (let k = 0; k < 4; k++) {
      document.getElementById(`option${k + 1}`).style.cursor = "pointer";
      document.getElementById(`option${k + 1}`).style.backgroundColor = "white";
    }
    document.getElementById("question").innerHTML = questions[i]["question"];
    document.getElementById("option1").innerHTML =
      questions[i]["answers"][0]["text"];
    document.getElementById("option2").innerHTML =
      questions[i]["answers"][1]["text"];
    document.getElementById("option3").innerHTML =
      questions[i]["answers"][2]["text"];
    document.getElementById("option4").innerHTML =
      questions[i]["answers"][3]["text"];
  }
}

next();

buttons.addEventListener("click", function (e) {
  if (questions[i]["answers"][e.target.value]["correct"]) {
    e.target.style.backgroundColor = "#9aeabc";
    result++;
  } else {
    e.target.style.backgroundColor = "#ff9393";
    for (let k = 0; k < 4; k++) {
      if (questions[i]["answers"][k]["correct"]) {
        document.getElementById(`option${k + 1}`).style.backgroundColor =
          "#9aeabc";
      }
    }
  }
  document.getElementById("submit").style.display = "block";
  for (let k = 0; k < 4; k++) {
    document.getElementById(`option${k + 1}`).style.cursor = "no-drop";
  }
  i++;
});

function replay() {
  i = 0;
  document.getElementById("option1").style.display = "block";
  document.getElementById("option2").style.display = "block";
  document.getElementById("option3").style.display = "block";
  document.getElementById("option4").style.display = "block";
  document.getElementById("submit").style.display = "block";
  document.getElementById("play-again").style.display = "none";
  result = 0;
  next();
}

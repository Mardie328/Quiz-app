// Variable for time
var a = 50;
  
function timer001() {
    a = a - 1;
    if (a < 50) {
        document.getElementById("time001").innerHTML = a;
    } 

    if (a < 1) {
        clearInterval(update);
        
    }

    if (a == 0) {
        location.replace("../All%20done/alldone.html"); 
        localStorage.setItem('mostRecentScore', score.textContent);
        // Takes you to the all done page and saves the score to local storage
  

    }
}

update = setInterval("timer001()", 1000);
//Function for incorrect answer
function deductTime() {
    a = a - 10; 
    
    if (a < 1) {
        clearInterval(update);
        
    }

    if (a < 1) {
        location.replace("../All%20done/alldone.html");
        localStorage.setItem('mostRecentScore', score.textContent);
    }

}

const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let que_count = 0;
const next_btn = document.getElementById("next_btn");

//If next button is clicked
next_btn.onclick = () => {
  if (que_count < questions.length-1 ){
    que_count++;
    showQuestion(que_count);
    document.getElementById("correctBox").style.display = "none";
  } else {
    location.replace("../All%20done/alldone.html");
    localStorage.setItem('mostRecentScore', score.textContent);
  }
}

//Getting questions and options from array above
function showQuestion(index){
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");
  

  let que_tag = '<h2>' + questions[index].questionText + '</h2>';
  let option_tag = '<p class="option">' + questions[index].options[0] + '</p>'
                 + '<p class="option">' + questions[index].options[1] + '</p>'
                 + '<p class="option">' + questions[index].options[2] + '</p>'
                 + '<p class="option">' + questions[index].options[3] + '</p>';
                 
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
 
  const option = option_list.querySelectorAll(".option");
  for (i = 0; i < option.length; i++){
    option[i].setAttribute("onClick", "optionSelected(this)");
    
  }
}


function optionSelected(answer){
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  const score = document.getElementById("score");
  
  if (userAns == correctAns){
   document.getElementById("correctBox").style.display = "block";
   score.textContent++
   
  }  else {
    document.getElementById("correctBox").innerHTML = "Incorrect!";
    document.getElementById("correctBox").style.display = "block";
    deductTime();
  }
}





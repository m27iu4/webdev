let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 10;

const checkGuess = () => {

const inputElement = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");

attempts -=1;

if(guess !== randomNumber) {
  if(attempts == 0) {
  feedbackElement.style.color = "red";
  feedbackElement.innerHTML = "The correct number is: " + randomNumber;
  }
  
}

while(attempts > 0) {



let guess = inputElement.value;

if(guess == randomNumber) {
  feedbackElement.innerHTML = "You guessed it!";
  feedbackElement.style.color = "green";
  attempts = 0;
  break;
} else if(guess < randomNumber) {
  feedbackElement.innerHTML = "Too low! Try again. " + attempts;
  feedbackElement.style.color = "red";
  break;

} else {
  feedbackElement.innerHTML = "Too high! Try again. " + attempts;
  feedbackElement.style.color = "red";
  break;
}


}





};

const reset = () => {

  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");

  feedbackElement.innerHTML = "";
  inputElement.value = "";
  attempts = 10;



};


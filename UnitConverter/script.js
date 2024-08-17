const convert = () => {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  let milesToKm = unit == "milesToKm";

  let result = 0;

  let resultString = "";

  if (milesToKm === true) {
    result = inputValue * 1.6;
    resultString = inputValue + " miles are " + result + " km";
  } else {
    result = inputValue / 1.6;
    resultString = inputValue + " kilometers are " + result + " miles";
  }

  const resultElement = document.getElementById("resultElement");
  resultElement.innerHTML = resultString;
};

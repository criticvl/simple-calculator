var firstNumber = 0;
var secondNumber = 0;
var action = "";
var result = 0;

function clearDisplay() {
  document.getElementsByClassName("display")[0].textContent = "0";
  firstNumber = 0;
  secondNumber = 0;
  action = "";
  result = 0;
}

function number(number) {
  let display = document.getElementsByClassName("display")[0];
  if (display.textContent == "0") {
    display.textContent = number;
  } else {
    if (display.textContent.length < 10) {
      if (!display.textContent.includes(".")) {
        display.textContent =
          document.getElementsByClassName("display")[0].textContent * 10 +
          number;
      } else {
        display.textContent += number;
      }
    }
  }
}

function deleteLast() {
  let display = document.getElementsByClassName("display")[0];
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  } else {
    display.textContent = "0";
  }
}

function mathOperation(action) {
  firstNumber = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].textContent = "0";
  if (action == "+") {
    this.action = "+";
  } else if (action == "-") {
    this.action = "-";
  } else if (action == "*") {
    this.action = "*";
  } else if (action == "/") {
    this.action = "/";
  }
}

function equals() {
  secondNumber = document.getElementsByClassName("display")[0].textContent;
  if (action == "+") {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (action == "-") {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (action == "*") {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (action == "/") {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }
  result = parseFloat(result.toFixed(10));
  document.getElementsByClassName("display")[0].textContent = result;
}

function percent() {
  let display = document.getElementsByClassName("display")[0];
  display.textContent = display.textContent / 100;
}

function dot() {
  let display = document.getElementsByClassName("display")[0];
  if (!display.textContent.includes(".") && display.textContent.length < 9) {
    display.textContent = display.textContent + ".";
  }
}

let num1 = 0;
let num2 = null;
let operation = "";
let result = 0;
let existing_op = "";
let bool = false;

function addNumber(num) {
  if (operation === ""){
    num1 = num1 * 10 + num;
    document.getElementById("result").innerHTML = num1;
  }
  else{
    num2 = num2 * 10 + num;
    document.getElementById("result").innerHTML = (num1 + operation + num2);
  }
}

function setOperation(op) {
  operation = op;
  if (existing_op === ""){
    document.getElementById("result").innerHTML = (num1 + operation);
    existing_op = op;
  }
  else{
    if (existing_op === '+'){
      num1 = add(num1, num2);
      num2 = 0;
      existing_op = op;
      document.getElementById("result").innerHTML = (num1 + operation);
    }
    else if(existing_op === '-'){
      num1 = subtract(num1, num2);
      num2 = 0;
      existing_op = op;
      document.getElementById("result").innerHTML = (num1 + operation);
    }
    else if(existing_op === '*'){
      num1 = multiply(num1, num2);
      num2 = 0;
      existing_op = op;
      document.getElementById("result").innerHTML = (num1 + operation);
    }
    else if(existing_op === '/'){
      num1 = divide(num1, num2);
      num2 = 0;
      existing_op = op;
      document.getElementById("result").innerHTML = (num1 + operation);
    }
  }
}

function clearDisplay() {
  num1 = 0;
  num2 = 0;
  operation = "";
  existing_op = "";
  result = 0;
  document.getElementById("result").innerHTML = 0;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
return num1 * num2;
}

function divide(num1, num2) {
if (num2 === 0) {
return "Error: Undefined";
}
return num1 / num2;
}

function functionOperate(operator, num1, num2) {
switch (operator) {
  case "+":
    return add(num1, num2);
    break;
  case "-":
    return subtract(num1, num2);
    break;
  case "*":
    return multiply(num1, num2);
    break;
  case "/":
    return divide(num1, num2);
    break;
  default:
    return "Error: Invalid operator";
    break;
}
}

function backspace() {
  if (operation === "") {
    if (bool === true){
      document.getElementById("result").innerHTML = num1;
      bool = false;
    }
    else{
      num1 = Math.floor( num1 / 10);
      document.getElementById("result").innerHTML = num1;
    }
  } else if (num2.toString().length == 1){
    document.getElementById("result").innerHTML = (num1 + operation);
    num2 = 0;
    operation= "";
    bool = true;
  }
  else {
    num2 = Math.floor(num2 / 10);
    document.getElementById("result").innerHTML = (num1 + operation + num2);
  }
}

function calculate() {
result = functionOperate(operation, num1, num2);
document.getElementById("result").innerHTML = result;
num1 = result;
num2 = 0;
operation = "";
}

// CHALLENGE: uses keyboard to input values instead of clicking the numbers on screen
window.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode;

  switch (keyCode) {
    case 48: // num 0
      this.document.getElementById('zero').click();
      break;
    case 49: // num 1
      this.document.getElementById('1').click();
      break;
    case 50: // num 2
      this.document.getElementById('2').click();
      break;
    case 51: // num 3
      this.document.getElementById('3').click();
      break;
    case 52: // num 4
      this.document.getElementById('4').click();
      break;
    case 53: // num 5
      this.document.getElementById('5').click();
      break;
    case 54: // num 6
      this.document.getElementById('6').click();
      break;
    case 55: // num 7
      this.document.getElementById('7').click();
      break;
    case 56: // num 8
      this.document.getElementById('8').click();
      break;
    case 57: // num 9
      this.document.getElementById('9').click();
      break;

    case 107: // op +
      this.document.getElementById('add').click();
      break;
    case 189: // op -
    case 109: // op -
      this.document.getElementById('sub').click();
      break;
    case 106: // op *
      this.document.getElementById('mul').click();
      break;
    case 191: // op /
    case 111: // op /
      this.document.getElementById('div').click();
      break;

    case 8: // op bksp
      this.document.getElementById('bksp').click();
      break;

    case 46: // op clear [del button]
      this.document.getElementById('clear').click();
      break;

    case 13: // op = ['=' or enter]
    case 187:
      this.document.getElementById('equal').click();
      break;
  }
});
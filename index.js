// Used to make sure the textbox is hovered on at all times 
window.onload = function () {
  document.getElementById("myInput").focus();
}

// Data entry
function dataEntry () {
  const numbBtns = document.querySelectorAll('.js-btn');
  const input = document.querySelector('#myInput');

  numbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      input.value += btn.textContent;
    });
  });
}
dataEntry();

// Get data entered
function getInput () {
  const inputElement = document.querySelector('#myInput');
  let objInput = [];
  objInput = inputElement.value.split('');
  console.log(objInput);
  return objInput;
}

// Check for consecutive operators
function checkConsecutiveOperators(inputArray) {
  const operators = ['+', '-', '÷', '×', '^'];
  for(let i = 0; i < inputArray.length - 1; i++) {
    if(operators.includes(inputArray[i]) && operators.includes(inputArray[i + 1])) {
      return true;
    }
  }
  return false;
}

// Calculate result
function calculateResult(inputArray) {
  // Convert the array back to a string
  let calculation = inputArray.join('');
  // Replace the division and multiplication symbols with their JavaScript equivalents
  calculation = calculation.replace(/÷/g, '/').replace(/×/g, '*');
  // Use the JavaScript eval function to calculate the result
  let result = eval(calculation);
  return result;
}

// Event listener for the equals button
const equalSign = document.querySelector('.equals');
equalSign.addEventListener('click', () => {
  const inputArray = getInput();
  if(!checkConsecutiveOperators(inputArray)) {
    const result = calculateResult(inputArray);
    document.querySelector('#myInput').value = result;
  } else {
    alert('Error: Consecutive operators are not allowed.');
  }
});

// Event listener for the delete button
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', () => {
  const input = document.querySelector('#myInput');
  // Remove the last character from the input field
  input.value = input.value.slice(0, -1);
});

// Event listener for the AC button
const acBtn = document.querySelector('.clear');
acBtn.addEventListener('click', () => {
  const input = document.querySelector('#myInput');
  // Clear the input field
  input.value = '';
});

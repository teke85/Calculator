const calculatorDisplay = document.getElementById('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')

function sendNumberValue(number) {
  calculatorDisplay.textContent = number
}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => sendNumberValue())
  }
})

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousDisplay = document.getElementById('data-previous-operand');
const currentDisplay = document.getElementById('data-current-operand');


class Calculator{
    constructor(previousDisplay, currentDisplay){
        this.previousDisplay = previousDisplay
        this.currentDisplay = currentDisplay
        this.clear()
}
clear () {
       this.currentOperand = ''
       this.previousOperand = ''
       this.operation = undefined
}

delete() {
     this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber (number){
    if (number ==='.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if (this.currentOperand === '') return 
    if (this.previousOperand !== '') {
        this.compute()
    }
       this.operation = operation
       this.previousOperand = this.currentOperand
       this.currentOperand = ''
}

updateDisplay() {
        this.currentDisplay.innerText = this.currentOperand
        this.previousDisplay.innerText = this.previousOperand
}

compute(){
    let computation;
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    // if theres no prev or curr value
    if(isNaN(previous) || isNaN(current)) return

    switch (this.operation){
        case '+':
            computation = previous + current
            break;

        case 'x':
            computation = previous+ current
            break;

        case '/':
            computation = previous + current
            break;

        case '-':
            computation = previous + current
            break;

        default : return
    }
       this.currentOperand = computation
       this.operation = undefined
       this.previousOperand = ''
   }
}




const calculator = new Calculator( previousDisplay, currentDisplay)

numberButtons.forEach(button => {

     button.addEventListener('click', () => {
       Calculator.appendNumber (button.innerText) 
       Calculator.updateDisplay()
     })
})


operationButtons.forEach(button => {

    button.addEventListener('click', () =>{
      Calculator.chooseOperation(button.innerText) 
      Calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    Calculator.compute()
    Calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    Calculator.clear()
    Calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    Calculator.delete()
    Calculator.updateDisplay()
})
 




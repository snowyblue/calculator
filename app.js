const btnNums = document.querySelectorAll('.btnNum');
const btnOperator = document.querySelectorAll('.btnOperator');
const btnEqual = document.querySelector('.btnEqual');
const btnClear = document.querySelector('.btnClear');
const btnDelete = document.querySelector('.btnDelete');
let display = document.querySelector('.outcome')

let aNum = ""
let operator = ""
let bNum = ""

// gets current num by concating the nums together
function firstNumber(e) {
    console.log(`operator sign: ${operator}`)
    if (operator === "=") {
        clear()
    }
    if (operator === "") {
        console.log('1stNumber - 1st function')
        let selectedNum = e.target.innerText
        aNum+=selectedNum
        console.log(aNum)
        // display number on screen
        display.innerText = aNum
    } 

}

function secondNumber(e) {
    console.log(`operator sign: ${operator}`)
    if (operator !== "" && operator !== "=") {
        console.log('2ndNumber - 2st function' + e.target.innerText)
        let selected2Num = e.target.innerText
        bNum+=selected2Num
        console.log(bNum)
        // display number on screen
        display.innerText = bNum
    }
}

function getOperator(e) {
    continueCalc = false
    console.log('getOperator function'+continueCalc)
    operator = e.target.innerText
    console.log(operator)
    btnNums.forEach(num => num.addEventListener('mousedown', secondNumber))
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    console.log(`operate is on: a:${a} b:${b} operator:${operator}`)
    if (operator === "÷" && b === 0) {
        clear()
        display.innerText = 'sneaky!'
        // why this doesn't clear the operator sign? when another number is pressed? bottom should be same as clear
        //why both first and second number functions are triggered at the same time?
    } else {
        if (operator === "+") {
            result = add(a,b)
        } else if (operator === "-") {
            result = subtract(a,b)
        } else if (operator === "x") {
            result = multiply(a,b) 
        } else if (operator === "÷") {
            result = divide(a,b) 
        } else if (operator === "") {
            result = a
        }
        display.innerText = Math.round(result*100)/100
        aNum = result
        console.log(`elseif running, result: ${result}`)
    }
    bNum = ""
    operator = ""
    console.log(`outcome: ${aNum}, ${bNum}, ${operator}`)
}

function add(a,b) {
    console.log(a+b)
    return a+b
};

function subtract(a,b) {
    console.log(a-b)
    return a-b
};
  
function multiply(a,b) {
    console.log(a*b)
    return a*b
};

function divide(a,b) {
    console.log(a/b)
    return a/b
};

function clear() {
    aNum = ""
    bNum = ""
    operator = ""

    // console.log(display)
    display.innerText = ""
};

btnNums.forEach(num => num.addEventListener('mousedown', firstNumber))

btnOperator.forEach(operator => operator.addEventListener('click', getOperator))

btnEqual.addEventListener('mousedown', () => operate(aNum,bNum,operator))

btnClear.addEventListener('mousedown', clear)
// console.log(btnNums)
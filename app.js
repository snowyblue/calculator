const btnNums = document.querySelectorAll('.btnNum');
const btnPlus = document.querySelector('.btnPlus');
const btnClear = document.querySelector('.btnClear');
const btnDelete = document.querySelector('.btnDelete');


// gets current num by concating the nums together
const store = function(num) {
    let currentNum = ""
    let selectedNum = num.target.innerText
    currentNum
    console.log(currentNum)
}

const add = function(a,b) {
    return a+b
  };
  
const subtract = function(a,b) {
    return a-b
};
  
const sum = function(arr) {
    return arr.reduce((total, num) => num + total, 0)
};

// console.log(sum([1,3,5]))

const multiply = function(arr) {
    return arr.reduce((product, num) => num*product, 1)
};
// console.log(multiply([1,3,5]))

const power = function(a, b) {
    return a**b
};

const factorial = function(a) {
    let fac = 1
        for (let i = 1; i <=a; i++) {
        fac *= i
    }
return fac
};

btnNums.forEach(num => num.addEventListener('mousedown', store))
console.log(btnNums)
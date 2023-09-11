'use strict';

let userNumber = prompt('please your number!');
console.log(userNumber);

userNumber = 555;
console.log(userNumber);

// string
const count = 5;
console.log(`I have ${count} an apples!`);

let userHasAccess = +prompt('input your data!');
if (+userHasAccess > 0) {
    console.log('You have access!');
}

if (+userHasAccess < 0) {
    console.log('User has not access!');
}

let var1 = +prompt('enter your number one!');
let var2 = +prompt('enter your number two!');

function math_work(num1, num2) {
    if (num1 > var2) alert(`sum: ${num1 + num2}`);
    else if (num1 < num2) alert(`multy: ${num1 * num2}`);
    else alert(`equal: ${num1 === num2}`);
    console.log('Work complete!');
}

math_work(var1, var2);
"use strict";

/**
 * This function sum two numbers
 */
function sum () {
    let num_1 = +prompt('input your num_1: ');
    let num_2 =  +prompt('input your num_2: ');

    alert(`Сумма чисел:  ${num_1 + num_2}`)
}

/**
 * This function for find different between num_1 & num_2
 */
function different () {
    let num_1 = +prompt('input your num_1: ');
    let num_2 =  +prompt('input your num_2: ');

    alert(`different numbers:  ${num_1 - num_2}`)
}

/**
 * This function for find multiplication two numbers ( num_1 and num_2)
 */
function multiplication () {
    let num_1 = +prompt('input your num_1: ');
    let num_2 =  +prompt('input your num_2: ');
    alert(`multiplication numbers:  ${num_1 * num_2}`)
}
document.querySelector('.btn_2').addEventListener('click', sum)
document.querySelector('.btn_2').addEventListener('click', different)
document.querySelector('.btn_2').addEventListener('click', multiplication)
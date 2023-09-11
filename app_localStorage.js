"use strict";

localStorage.setItem('key1', 856)
localStorage.setItem('key2', 'sample string')
localStorage.setItem('key3', false)
console.log(localStorage.getItem('key2'))
console.log(localStorage.key(1))
console.log(localStorage.length)
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     console.log(`${key} : ${localStorage.getItem(key)}`)
//
// }

// for (let key in localStorage) {
//     if(!localStorage.hasOwnProperty(key)){
//         continue;
//     }
//     console.log(`${key}: ${localStorage.getItem(key)}`)
// }

for (let key of Object.keys(localStorage)) {
    console.log(`${key}: ${localStorage.getItem(key)}`)
    
}
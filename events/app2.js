"use strict";
// document.querySelector('.btn_1').onclick = function (event) {
//     console.log(event.type)
//     console.log(event.currentTarget)
// }

document.querySelector('.btn_1').onclick = function () {
    document.querySelector('p').hidden = !document.querySelector('p').hidden
}



let items = document.querySelectorAll('.item')
for (let item of items) {
    item.querySelector('.item-title').insertAdjacentHTML("beforeend", '<button class="close">&times;</button')
    item.querySelector('.close').onclick = () => item.remove()
}
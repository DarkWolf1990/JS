"use strict";

let div = document.querySelector('div')
div.className = "alert text block"
for(let name of div.classList){
    console.log(name)
}
// div.classList.add('elem')
div.style.color = "black"
div.style.width = "300px"
div.style.background = prompt("color","tomato")
div.style.display = "none"
setTimeout(()=> div.style.display = "", 3000)

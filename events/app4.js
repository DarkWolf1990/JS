"use strict";
let checkbox = document.querySelector('.theme-checkbox')

if(localStorage.getItem(`theme`) == "true"){
    theme.setAttribute('href', 'style_dark.css')
    checkbox.checked =  true
}

checkbox.onchange = function() {
    if(this.checked){
        localStorage.setItem('theme',  true)
        theme.setAttribute('href', 'style_lite.css')
    } else {
        localStorage.setItem('theme',  false)
        theme.setAttribute('href', 'style_dark.css')
    }
}
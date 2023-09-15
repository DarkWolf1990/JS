"use strict";
let btns = document.querySelectorAll('.slider__item')
for (let btn of btns) {
    btn.onclick = function (){
        document.querySelector('.slider__breadcrumbs .active').classList.remove('active')
            this.classList.add('active')
        document.querySelector('.slider__image img').setAttribute('src',`
        ../public/${this.innerHTML}.jpg`)
    }
}
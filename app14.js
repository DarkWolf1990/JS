"use strict";

let words1 = ["Непобндимый", "Визжащий", "Реальный", "Скоростной", "Экцентричный",
    "Кодовый", "Прожорливый", "Догадливый", "Гениальный", "Разрушительный",
    "Растерянный", "Торопливый", "Вопрошающий", "Космический", "Динамичный", "Паникующий",
    "Задумчивый", "Загадочный", "Рекордный", "Непонимающий", "Ульрафиолетовый", "Читающий",
    "Озорной", "Тормозной", "Волшебный", "Хардовый", "Тычущий", "Внимательный", "Криповый",];
let words2 = ["Мозг", "Везунчик", "Повелитель", "Красавчик", "Печенька", "Тормоз", "Динозавр",
    "Индеец", "Экстрасенс", "Ципленок", "Решала", "Ураган", "Взломщик",
    "Эрудит", "Сыщик", "Крушитель", "Паникер", "Шутник", "Обуза", "Капитан", "Ботаник",
    "Гриб", "Зомби", "Котик", "Ведьмак", "Храбрец", "Мастер", "Король",];


function allRandomNames(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length ; j++) {
            result.push(`${arr1[i]} ${arr2[j]}`)
        }
    }
    return result
}
let allNames = allRandomNames(words1, words2)
    let item = document.createElement('div')
    item.classList.add('menu_link')
   setInterval(()=>{
       item.textContent = allNames[Math.floor(Math.random() * allNames.length) ]
       document.body.append(item)
   }, 2000)

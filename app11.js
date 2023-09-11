"use strict";


const PEOPLE = [
    {
        room: '8',
        name: {
            f :"Степанов",
            i : "Борис",
            o : "Иванович"
        },
        date : {
            d : 17,
            m : 6,
            y : 1996
        },
        number : ['89057999079']
    },
    {
        room: "3",
        name: {
            f : "Смирнов",
            i : "Сергей",
            o : "Борисович"
        },
        date: {
            d : 22,
            m : 9,
            y : 1994
        },
        number: ['89097622050']
    }
]
function createCards(selector, array){
for (let i = 0; i <array.length ; i++) {
    let item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML=`
    ФИО: ${array[i]["name"]["f"]} ${array[i]["name"]["i"]} ${array[i]["name"]["o"]} <br>
    Номера телефонов: ${array[i]["number"].join(",")} <br>
    День рождения:${array[i]["date"]["d"]} ${array[i]["date"]["m"]} ${array[i]["date"]["y"]} <br>
    Комната:${array[i]["room"]} <br>
    `
    document.querySelector(selector).append(item)

}
}
createCards('.items', PEOPLE);
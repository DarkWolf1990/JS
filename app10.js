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

function rooms(){
    let  rooms = [];
    for (let i = 0; i < PEOPLE.length ; i++) {
        rooms.push(
            [PEOPLE[i]["room"],`${PEOPLE[i]["name"]["f"]} ${PEOPLE[i]["name"]["i"]} ${PEOPLE[i]["name"]["o"]}`]
        )
    }
    return rooms.sort( (a, b) =>+a[0]-b[0])
}
document.querySelector('body').innerHTML=`<table></table>`
let title_rooms = document.createElement('tr')
title_rooms.innerHTML = `
<th>Комната</th>
<th>ФИО</th>`
document.querySelector('table').append(title_rooms)
for (let i = 0; i < rooms().length; i++) {
    let row = document.createElement('tr')
    row.innerHTML=`
    <td>${rooms()[i][0]}</td>
    <td>${rooms()[i][1]}</td>
    `
    document.querySelector('table').append(row)
}
"use strict";

const JOURNALS = [
    ["1", "Описание журнала", "yes"],
    ["2", "Описание журнала", "no"],
    ["3", "Описание журнала", "no"],
    ["4", "Описание журнала", "yes"],

]

JOURNALS.forEach(function (item){
    let row = document.createElement('tr')
    row.innerHTML= `
    <td>${item[0]}</td>
    <td>${item[1]}</td>
    <td>${item[2]==='yes'?'<span class="span1">&#9745;</span>' : item[2]=='no' ? '<span class="span2" ">&#9746;</span>': item[2]}</td>`
    document.querySelector('table').append(row)
})
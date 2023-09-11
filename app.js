"use strict";

/**
 * Функция конвертирует рубли в другую валюту.
 * @param {number} roubles величина в рублях.
 * @param {string} currency поддерживаются значения "dollar" и "euro".
 * @returns {number}
 * @throws {Error} если передана не поддерживаемая валюта, то будет
 * выброшена ошибка.
 */


let ro = +prompt("input your sum: ");
let cu = prompt("input your valute: ");

function convertCurrency(roubles, currency){
    let currencyCost = 0;
    switch (currency){
        case "dollar":
            currencyCost = 95;
            break;
        case "euro":
            currencyCost = 102.56;
            break;
        default:
            throw new Error("Неверная валюта: " + currency);
    }
    let result = roubles / currencyCost;
    return result.toFixed(2);
}
let inDollars = convertCurrency(ro, cu);
console.log("Ваша сумма в долларах: " + inDollars);
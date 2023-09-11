"use strict";

function myTimer(seconds){
     let startDate = new Date()
    let endDate = new Date()
    endDate = endDate.setSeconds(endDate.getSeconds() + seconds)
    let leftTime = endDate - startDate
    let interval = setInterval(() => {
        let currentDate =  new Date()
        let leftPercent =  Math.trunc((endDate - currentDate) / (leftTime ) * 100)
        let passedPercent = +(100 - leftPercent)

        document.querySelector('.timer-progresbar__fill').textContent = passedPercent + '%'
        document.querySelector('.timer-progresbar__fill').style.width = passedPercent + '%'
        document.querySelector('.timer-progresbar__empty').textContent = leftPercent + '%'
        document.querySelector('.timer-progresbar__empty').style.width = leftPercent + '%'
        if (leftPercent == 0){
            clearInterval(interval)
            document.querySelector('.timer-progresbar__empty').style.display = 'none'
        }
        console.log(1)
    }, 1000)
}
myTimer(7)

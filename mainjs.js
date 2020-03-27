const hourSelector = document.querySelector('[data-hour]');
const minuteSelector = document.querySelector('[data-minute]');
const secondSelector = document.querySelector('[data-second]');

const currentTime = new Date();
let timeInHour = hourSelector.textContent = currentTime.getHours();
let timeInminute = minuteSelector.textContent = currentTime.getMinutes();
let timeInSecond = secondSelector.textContent = currentTime.getSeconds();

let id = setInterval(()=>{
    timeInSecond++;
    if(timeInSecond === 60){
        timeInSecond = 0;
        timeInminute++;
        minuteSelector.animate([
            {opacity: '0.6'},
            {opacity: '1.0'}       
        ],{
            duration: 900,
            fill: 'forwards',
            easing: 'linear'
        })
        if(timeInminute === 60){
            timeInminute = 0;
            timeInHour++;
            hourSelector.animate([
                {opacity: '0.6'},
                {opacity: '1.0'}       
            ],{
                duration: 900,
                fill: 'forwards',
                easing: 'linear'
            })
        }
    }
    secondSelector.animate([
        {opacity: '0.6'},
        {opacity: '1.0'}       
    ],{
        duration: 900,
        fill: 'forwards',
        easing: 'linear'
    })
    
    hourSelector.textContent = timeInHour;
    minuteSelector.textContent = timeInminute;
    secondSelector.textContent = timeInSecond;
}, 1000)
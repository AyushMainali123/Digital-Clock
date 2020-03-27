const hourSelector = document.querySelector('[data-hour]');
const minuteSelector = document.querySelector('[data-minute]');
const secondSelector = document.querySelector('[data-second]');
const indicatorSelector = document.querySelector('[data-indicator]');
const currentTime = new Date();
let timeInHour = hourSelector.textContent = currentTime.getHours();
let timeInminute = minuteSelector.textContent = currentTime.getMinutes();
let timeInSecond = secondSelector.textContent = currentTime.getSeconds();

if(timeInHour >= 12)
{   
    if(timeInHour > 12)timeInHour = timeInHour - 12;
    indicatorSelector.textContent = 'PM';
}
else indicatorSelector.textContent = 'AM';

let id = setInterval(()=>{
        timeInSecond++;
        if(timeInSecond === 60){
            timeInSecond = 0;
            timeInminute++;
            if(timeInminute === 60)
            {
                timeInminute = 0;
                timeInHour++;
                if(timeInHour >= 12){
                    if(timeInHour > 12)timeInHour = 1;
                    else{
                        if(indicatorSelector.textContent === 'AM')
                            indicatorSelector.textContent = 'PM';
                        else
                        indicatorSelector.textContent = 'AM';
                    }
                }
            }
        }
    if(timeInHour.toString().length < 2){
        timeInHour = '0'+timeInHour;
    }
    if(timeInminute.toString().length < 2){
        timeInminute = '0'+timeInminute;
    }
    if(timeInSecond < 10){
        timeInSecond = '0'+timeInSecond;
    }
    hourSelector.textContent = timeInHour;
    minuteSelector.textContent = timeInminute;
    secondSelector.textContent = timeInSecond;
}, 1000)
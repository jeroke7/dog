const minusButtonList = document.querySelectorAll('.fa-circle-minus')
const plusButtonList = document.querySelectorAll('.fa-circle-plus')
const paragraphList = document.querySelectorAll('.faq-paragraph')

const upCaretList = document.querySelectorAll('.fa-caret-up')
const downCaretList = document.querySelectorAll('.fa-caret-down')
const dropItemList = document.querySelectorAll('.menu-items')

const city = document.querySelector('.city')
const currentTime = document.querySelector('.current-time')
const currentDate = document.querySelector('.current-date')
const weatherIcon = document.querySelector('.weather-icon')
const currentTemp = document.querySelector('.temp')
const currentCondition = document.querySelector('.condition')
const key = "cdff56cef44705e034e085d9d601894f"

// const currentYr = document.querySelector('.current-year')
// currentYr.textContent = year

city.textContent = "Portland, ME"
// weatherIcon.src = "./img/snow.png"
currentTemp.textContent = "60"
currentCondition.textContent = "Snowy"

const dateObject = new Date()
const month = dateObject.getMonth() + 1
const date = dateObject.getDate()
const year = dateObject.getFullYear()
let hour = dateObject.getHours()
let minutes = dateObject.getMinutes()
let amPm = 'am'


if (minutes < 10) {
    minutes = '0' + minutes.toString()
}
if (hour >= 12) {
    amPm = 'pm'
}
if (hour > 12) {
    amPm = 'pm'
    hour = hour - 12
}


let time = `${hour}:${minutes}${amPm}`
console.log(month, date, year, time)
currentTime.textContent = time
currentDate.textContent = `${month}/${date}/${year}`
// let location = `${city},${state}`

const clouds = ['few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds']
const rain = ['shower rain', 'rain', 'mist']

let lat = 43.6342
let lon = -70.2816
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
let img 

async function getWeather() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        currentTemp.textContent = Math.round(data.main.temp)
        let condition = data.weather[0].description
        console.log(condition)
        currentCondition.textContent = condition
        
        if (clouds.includes(condition)) {
            img = 'partly-cloudy.png'
        } else if (rain.includes(condition)) {
            img = 'rain.png'
        } else if (condition == 'thunderstorm') {
            img = 'rain-storm.png'
        } else if (condition == 'snow') {
            img = 'snow.png'
        } else if (condition == 'clear sky') {
            img = 'sunny.png'
        } 

        weatherIcon.src = `../img/weatherIcon/${img}`


    } catch (error) {
        console.error(error)
    }
}
getWeather()

//  var requestOptions = {
//      method: 'GET',
//    };
  
//    fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=26568068ee174eaa9ad6a61ffacba666", requestOptions)
//      .then(response => response.json())
//      .then(result => console.log(result))
//      .catch(error => console.log('error', error));

// let url = `https://api.geoapify.com/v1/ipinfo?&apiKey=26568068ee174eaa9ad6a61ffacba666&lat=${lat}&lon=${lon}&loc`












minusButtonList.forEach(minus => {
    minus.addEventListener('click', () => {
        let index = parseInt(minus.id)
        plusButtonList[index].style.display='flex'
        minusButtonList[index].style.display='none'
        paragraphList[index].style.display='none'
    })
})

plusButtonList.forEach(plus => {
    plus.addEventListener('click', () => {
        let index = parseInt(plus.id)
        plusButtonList[index].style.display='none'
        minusButtonList[index].style.display='flex'
        paragraphList[index].style.display='flex'
    })
})

downCaretList.forEach(down => {
    down.addEventListener('click', () => {
        let caret = parseInt(down.id)
        upCaretList[caret].style.display='flex'
        downCaretList[caret].style.display='none'
        dropItemList[caret].style.display='none'
    })
})
upCaretList.forEach(up => {
    up.addEventListener('click', () => {
        let caret = parseInt(up.id)
        upCaretList[caret].style.display='none'
        downCaretList[caret].style.display='flex'
        dropItemList[caret].style.display='flex'
    })
})


const key = 'cdff56cef44705e034e085d9d601894f'
const ipKey = '26568068ee174eaa9ad6a61ffacba666'
const minusButtonList = document.querySelectorAll('.fa-circle-minus')
const plusButtonList = document.querySelectorAll('.fa-circle-plus')
const paragraphList = document.querySelectorAll('.faq-paragraph')

const upCaretList = document.querySelectorAll('.fa-caret-up')
const downCaretList = document.querySelectorAll('.fa-caret-down')
const dropItemList = document.querySelectorAll('.menu-items')

const currentLocation = document.querySelector('.current-location')
const currentTime = document.querySelector('.current-time')
const currentDate = document.querySelector('.current-date')
const weatherIcon = document.querySelector('.weather-icon')
const currentTemp = document.querySelector('.temp')
const currentCondition = document.querySelector('.condition')


// weatherIcon.src = "./img/snow.png"
currentTemp.textContent = "60"
currentCondition.textContent = "Snowy"

const dateObject = new Date()
let month = dateObject.getMonth() + 1
let date = dateObject.getDate()
let year = dateObject.getFullYear()
let hour = dateObject.getHours()
let minutes = dateObject.getMinutes()
let amPm = 'am'
let city 
let state
let time = `${hour}:${minutes}${amPm}`
const clouds = ['few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds']
const rain = ['shower rain', 'rain', 'mist']
let lat 
let lon 
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
const ipLocUrl = `https://api.geoapify.com/v1/ipinfo?&apiKey=${ipKey}`


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

currentTime.textContent = time
currentDate.textContent = `${month}/${date}/${year}`








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
            img = 'img/rain-storm.png'
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


async function getLocation() {
    try {
        const response = await fetch(ipLocUrl)
        const data = await response.json()
        city = data.city.name
        state = data.state.name
        let myLocation = `${city}, ${state}`
        console.log(data)
        lat = data.location.latitude
        lon = data.location.longitude
        currentLocation.textContent = myLocation
    } catch (error) {
        console.error(error)
    }
}

getLocation()









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

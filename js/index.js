const elName = document.getElementById('name')
const elCountry = document.getElementById('country')
const elTemp = document.getElementById('temp')
const elSpeed = document.getElementById('speed')

const elForm = document.getElementById('form')
const elInput = document.getElementById('form-input')


let countryLog = 'andijon'

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    var inputValue = elInput.value

    getFetching(inputValue)
})

function getFetching(countryLog) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${countryLog}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`

    fetch(API)
        .then((response) => response.json())
        .then((data) => getData(data))
}

function getData(item) {
    elName.textContent = item.name
    elCountry.textContent = item.sys.country
    elTemp.textContent = item.main.temp
    elSpeed.textContent = item.wind.speed
}

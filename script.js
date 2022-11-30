const form = document.getElementById("form")
const input = document.getElementById("search")
const current_temperature = document.getElementById("currenttemperature")
const feels_like = document.getElementById("feelslike")
const humidity = document.getElementById("humidity")
const location2 = document.getElementById("location")
const btn =document.getElementById("btn")

form.addEventListener("submit",e => {
    e.preventDefault()
    
    const inputvalue = input.value
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=74fcc9d799e5497435b5375fc69ebd01&units=metric`
    fetch(api).then(res => res.json()).then(data => {
        console.log(data)
        current_temperature.innerHTML = data.main.temp
        feels_like.innerHTML = data.main.feels_like
        humidity.innerHTML = data.main.humidity
        location2.innerHTML = data.name
    })
}
)    

window.addEventListener('load', ()=>{
    navigator.geolocation.getCurrentPosition(showPosition)
    function showPosition(position) {
        const lat=position.coords.latitude
        console.log(lat)
        const long=position.coords.longitude
        console.log(long)
        let locationapi= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=74fcc9d799e5497435b5375fc69ebd01&units=metric`

        fetch(locationapi).then(res => res.json()).then(data => {
            console.log(data)
        current_temperature.innerHTML = data.main.temp
        feels_like.innerHTML = data.main.feels_like
        humidity.innerHTML = data.main.humidity
        location2.innerHTML = data.name
        })
    }
})

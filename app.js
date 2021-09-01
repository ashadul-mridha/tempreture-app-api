//default city dhaka

const key = '5eaa964b72522331488863babe2b7b08';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${key}`)
.then(Response => Response.json())
.then(data => {
    const tempKalvin = data.main.temp;
    let tempCelcius = tempKalvin - 273.15 ;
    tempCelcius = Math.round(tempCelcius);

    const city = document.getElementById('city');
    city.innerText = data.name;

    const tempreture = document.getElementById('tempreture');
    tempreture.innerText = tempCelcius;

    const weatherStatus = document.getElementById('weather-status');
    weatherStatus.innerText = data.weather[0].main;

    
    //weather image
    const weatherImg = document.getElementById('weather-img');
    weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

})


document.getElementById('search_weather').addEventListener('click',function(){
    const cityField = document.getElementById('search-city');
    const cityText = cityField.value; 
    console.log(cityText);
    cityField.value = ' ';

    const key = '5eaa964b72522331488863babe2b7b08';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${key}`)
    .then(Response => Response.json())
    .then(data => {
        const tempKalvin = data.main.temp;
        let tempCelcius = tempKalvin - 273.15 ;
        tempCelcius = Math.round(tempCelcius);

        
        //weather image
        const weatherImg = document.getElementById('weather-img');
        weatherImg.textContent= ' ';
        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const city = document.getElementById('city');
        city.innerText = data.name;

        const tempreture = document.getElementById('tempreture');
        tempreture.innerText = tempCelcius;

        const weatherStatus = document.getElementById('weather-status');
        weatherStatus.innerText = data.weather[0].main;


        console.log(data);
    
    }
    )


})
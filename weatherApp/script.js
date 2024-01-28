const apiKey = '9d82cb02b714bb10a8d414a35dda3f65';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
console.log(searchBox)
let searchBtn = document.querySelector(".search button");
console.log(searchBtn)
let weatherIcon = document.querySelector(".weather-icon");
console.log(weatherIcon)



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    console.log(response.status)

    if(response.status == 404 || response.status == 400){ //400: bad request, 404: not found jo dundh rahe hai
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{

        var data = await response.json();

        console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + `km/h`;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";

    document.querySelector(".error").style.display = "none";
    

    }



    

}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})




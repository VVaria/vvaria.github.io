function GetIcon(array, previousclass)
{
    let ClassName = previousclass;
    switch (array.weather[0].icon)
    {
            case "01d":
                ClassName += " fas fa-sun";
                break;
            case "01n":
                ClassName += " fas fa-sun";
                break;
            case "02d":
                ClassName += " fas fa-cloud-sun";
                break;
            case "02n":
                ClassName += " fas fa-cloud-sun";
                break;
            case "03d":
                ClassName += " fas fa-cloud";
                break;
            case "03n":
                ClassName += " fas fa-cloud";
                break;
            case "04d":
                ClassName += " fas fa-cloud";
                break;
            case "04n":
                ClassName += " fas fa-cloud";
                break;
            case "09d":
                ClassName += " fas fa-cloud-rain";
                break;
            case "09n":
                ClassName += " fas fa-cloud-rain";
                break;
            case "10d":
                ClassName += " fas fa-cloud-rain";
                break;
            case "10n":
                ClassName += " fas fa-cloud-rain";
                break;
            case "11d":
                ClassName += " fas fa-poo-storm";
                break;
            case "11n":
                ClassName += " fas fa-poo-storm";
                break;
            case "13d":
                ClassName += " fas fa-snowflake";
                break;
            case "13n":
                ClassName += " fas fa-snowflake";
                break;
            case "50d":
                ClassName += " fas fa-smog";
                break;
            case "50n":
                ClassName += " fas fa-smog";
                break;
    }
    return ClassName;
}

function SetWeatherToday(p)
{
    let temperature = Math.round(p.main.temp);
    document.getElementById('city-name').innerHTML = p.name;
    document.getElementById('temperature').innerHTML = (temperature >= 0 ? "+" + temperature : temperature) + "°";
    document.getElementById("icon-condition").className = GetIcon(p, "mainInnerWeatherDataNow");
    document.getElementById('condition').innerHTML = p.weather[0].description[0].toUpperCase() + p.weather[0].description.slice(1);
    document.getElementById('wind').innerHTML = Math.round(p.wind.speed) + " м/с";
    document.getElementById('humidity').innerHTML = p.main.humidity + "%";
    document.getElementById('pressure').innerHTML = Math.round(p.main.pressure * 0.7500615758457) + " мм рт. ст.";
}

function SetWeather5Days(p)
{
    let g = document.getElementById("append");
    if (g)
        g.remove();
        
    let appendDiv = document.createElement("div");
    appendDiv.id = "append";
    appendDiv.className = "next";
    document.getElementById("main-inner-weather-data-5days").appendChild(appendDiv);

    for (i = 0; i < p.list.length; i++)
    {
        dt = new Date(0);
        dt.setUTCSeconds(p.list[i].dt);

        options = {weekday: 'short', day: 'numeric', month: 'short'};
        day = dt.toLocaleDateString('ru-RU', options)[0].toUpperCase() + dt.toLocaleDateString('ru-RU', options).slice(1);

        options_time = {hour: '2-digit', minute: '2-digit'};
        time = dt.toLocaleTimeString('ru-RU', options_time);
        
        let temperature = Math.round(p.list[i].main.temp);
        temp = (temperature >= 0 ? "+" + temperature : temperature) + "°";
        condition = p.list[i].weather[0].description[0].toUpperCase() + p.list[i].weather[0].description.slice(1);

        let newDiv = document.createElement("div");
        newDiv.className = "day";
        newDiv.id = "day_" + i;
        newDiv.innerHTML = "<div class=\"weatherDate\"><span>" + day + "</span></div>";
        newDiv.innerHTML += "<div class=\"weatherTime\"><span>" + time + "</span></div>";
        newDiv.innerHTML += "<div class=\"weatherLogo\"><i class=\"" + GetIcon(p.list[i], "") + "\" style=\"font-size: 30px; color: white\"></i></div>";
        newDiv.innerHTML += "<div class=\"weatherTemp\"><span>" + temp + "</span></div>";
        newDiv.innerHTML += "<div class=\"weatherCondition\"><span>" + condition + "</span></div>";
        document.getElementById("append").appendChild(newDiv);
    }
}

function main()
{
    let city = header_inner_city_search.value === "" ? "Москва" : encodeURIComponent(header_inner_city_search.value);
    let api_key = "32273e1edabe3f7e12571409dbace3cf";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=" + api_key;

    let DataToday = fetch(url).then(response => response.json());

    DataToday
        .then(
            result => {
                if (result.cod === "404")
                    alert("Город не найден")
                else
                    SetWeatherToday(result);
            },
            error => alert(error)
        );
    
    url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&lang=ru&units=metric&appid=" + api_key;
    let Data5Days = fetch(url).then(response => response.json());

    Data5Days
        .then(
            result => {
                if (result.cod === "404")
                    alert("Город не найден")
                else
                    SetWeather5Days(result);
            },
            error => alert(error)
        );
}
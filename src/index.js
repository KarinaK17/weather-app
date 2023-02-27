import "./style.css";
import { changeStyle } from "./style";

const checkWeatherBtn = document.getElementById("check-weather");
const input = document.querySelector("input");
const changeDegreeBtn = document.getElementById("change-degrees");

async function getAllWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6d2a4c9d8f88615cd21fa5a3e391da34&units=metric`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const responseJSON = await response.json();
    console.log(response, responseJSON);
    return responseJSON;
  } catch (error) {
    return error;
  }
}

function getusefulWeather(message) {
  if (message == "Error: City not found") {
    return message;
  } else {
    const weatherParameters = {
      city: message.name,
      country: message.sys.country,
      temperature: message.main.temp,
      feels: message.main.feels_like,
      type: message.weather[0].main,
      description: message.weather[0].description,
      windSpeed: message.wind.speed,
    };
    console.log(weatherParameters);
    return weatherParameters;
  }
}

let degree;
let degreeF;

function changeFromCtoF() {
  if (changeDegreeBtn.textContent == "Change to Fahrenheit") {
    const celsiusDegree = Number(
      document.getElementById("degree").textContent.slice(0, -3)
    );
    degree = celsiusDegree;

    const celsiusDegreeF = Number(
      document.getElementById("feels").textContent.slice(0, -3).slice(11)
    );
    degreeF = celsiusDegreeF;

    const fahrenheitDegree = Math.round((celsiusDegree * 9) / 5 + 32);
    const fahrenheitDegreeF = Math.round((celsiusDegreeF * 9) / 5 + 32);
    document.getElementById("degree").textContent = `${fahrenheitDegree} °F`;
    document.getElementById(
      "feels"
    ).textContent = `Feels like ${fahrenheitDegreeF} °F`;
    changeDegreeBtn.textContent = "Change to Celsius";
  } else {
    document.getElementById("degree").textContent = `${degree} °C`;
    document.getElementById("feels").textContent = `Feels like ${degreeF} °C`;
    changeDegreeBtn.textContent = "Change to Fahrenheit";
  }
}

checkWeatherBtn.addEventListener("click", () => {
  getAllWeather(input.value).then(getusefulWeather).then(changeStyle);
});

changeDegreeBtn.addEventListener("click", () => {
  changeFromCtoF();
});

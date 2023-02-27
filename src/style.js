const header = document.querySelector("header");
const input = document.querySelector("input");
const gif = document.querySelector("img");

const location = document.querySelector(".location");
const weatherDiv = document.querySelector(".weather");
const temp = document.querySelector(".temp");

const cityOutput = document.getElementById("city-output");
const country = document.getElementById("country");
const weather = document.getElementById("weather");
const description = document.getElementById("description");
const wind = document.getElementById("wind-speed");
const degree = document.getElementById("degree");
const feels = document.getElementById("feels");

const changeDegreeBtn = document.getElementById("change-degrees");

function addTextInfo(info) {
  if (info == "Error: City not found") {
    cityOutput.textContent = "Sorry!";
    country.textContent = "Couldn't find the city :(";
  } else {
    cityOutput.textContent = "";
    country.textContent = "";
    weather.textContent = "";
    description.textContent = "";
    wind.textContent = "";
    degree.textContent = "";
    feels.textContent = "";

    cityOutput.textContent = info.city;
    country.textContent = info.country;
    weather.textContent = info.type;
    description.textContent = info.description;
    wind.textContent = `Wind speed: ${
      Math.round(info.windSpeed * 10) / 10
    } m/s`;
    degree.textContent = `${Math.round(info.temperature)} °C`;
    feels.textContent = `Feels like ${Math.round(info.feels)} °C`;
  }
}

function changeGif(info) {
  if (info == "Error: City not found") {
    gif.src = "find.gif";
  } else if (info.type == "Clear") {
    gif.src = "sun.jpg";
  } else if (info.type == "Clouds") {
    gif.src = "clouds.gif";
  } else if (info.type == "Rain") {
    gif.src = "rain.gif";
  } else if (info.type == "Snow") {
    gif.src = "snow.webp";
  } else if (info.type == "Thunderstorm") {
    gif.src = "thunderstorm.gif";
  } else if (info.type == "Fog") {
    gif.src = "fog.gif";
  } else if (info.type == "Squall") {
    gif.src = "squall.gif";
  } else if (info.type == "Mist") {
    gif.src = "mist3.webp";
  } else if (info.type == "Ash") {
    gif.src = "ash.gif";
  } else if (info.type == "Drizzle") {
    gif.src = "drizzle.gif";
  } else if (info.type == "Haze" || info.type == "Smoke") {
    gif.src = "haze.gif";
  } else if (info.type == "Sand" || info.type == "Dust") {
    gif.src = "sand.gif";
  } else if (info.type == "Tornado") {
    gif.src = "tornado.gif";
  } else {
    gif.src = "start.gif";
  }
}

function manipulateDom(info) {
  if (info == "Error: City not found") {
    location.style.display = "block";
    weatherDiv.style.display = "none";
    temp.style.display = "none";
    input.value = "";
  } else {
    location.style.display = "block";
    weatherDiv.style.display = "block";
    temp.style.display = "flex";
    changeDegreeBtn.textContent = "Change to Fahrenheit";
    input.value = "";
  }
}

function changeBackgroundcolor(info) {
  if (info == "Error: City not found") {
    header.style.backgroundColor = "black";
  } else if (info.temperature >= 30) {
    header.style.backgroundColor = "rgb(247, 59, 59)";
  } else if (info.temperature >= 20 && info.temperature < 30) {
    header.style.backgroundColor = "rgb(252, 200, 96)";
  } else if (info.temperature >= 10 && info.temperature < 20) {
    header.style.backgroundColor = "rgb(114, 251, 118)";
  } else if (info.temperature >= 0 && info.temperature < 10) {
    header.style.backgroundColor = "rgb(135, 209, 255)";
  } else if (info.temperature >= -10 && info.temperature < 0) {
    header.style.backgroundColor = "rgb(74, 52, 116)";
  } else if (info.temperature >= -20 && info.temperature < -10) {
    header.style.backgroundColor = "rgb(40, 43, 102)";
  } else if (info.temperature < -20) {
    header.style.backgroundColor = "rgb(73, 73, 80)";
  }
}

function changeStyle(info) {
  manipulateDom(info);
  changeBackgroundcolor(info);
  addTextInfo(info);
  changeGif(info);
}

export { changeStyle };

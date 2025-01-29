const API_KEY = '0d8c6604ad00e1725465f95922e2201d';

export function getWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}



const wmoWeatherCode = new Map([
    wmoWeatherCode.set(0, "Clear Sky"),
    wmoWeatherCode.set(1, "Mainly Clear"),
    wmoWeatherCode.set(2, "Partly Cloudy"),
    wmoWeatherCode.set(3, "Overcast"),
    wmoWeatherCode.set(45, "Fog"),
    wmoWeatherCode.set(48, "Fog"),
    wmoWeatherCode.set(51, "Drizzle"),
    wmoWeatherCode.set(53, "Drizzle"),
    wmoWeatherCode.set(55, "Drizzle"),
    wmoWeatherCode.set(56, "Freezing Drizzle"),
    wmoWeatherCode.set(57, "Freezing Drizzle"),
    wmoWeatherCode.set(61, "Rain"),
    wmoWeatherCode.set(63, "Rain"),
    wmoWeatherCode.set(65, "Rain"),
    wmoWeatherCode.set(66, "Freezing Rain"),
    wmoWeatherCode.set(67, "Freezing Rain"),
    wmoWeatherCode.set(71, "Snow"),
    wmoWeatherCode.set(73, "Snow"),
    wmoWeatherCode.set(95, "Thunderstorm"),
    wmoWeatherCode.set(96, "Thunderstorm"),
    wmoWeatherCode.set(99, "Thunderstorm"),
    wmoWeatherCode.set(71, "Snow"),
])
const convertToFarenheit = (celsiusTemp) => 
    ((celsiusTemp *9)/5 + 32).toFixed(1);
const getWeatherTypeFromCode=(code)=>wmoWeatherCode.get(code);
export{convertToFarenheit, getWeatherTypeFromCode};
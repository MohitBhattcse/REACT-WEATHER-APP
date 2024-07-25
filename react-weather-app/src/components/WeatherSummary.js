import { convertToFarenheit, getWeatherTypeFromCode } from "../../public/weatherUtil";   
const Weather=(
    {current_weather:{temperature, weatherCode}, isCelsius},
)=> {
    return (
        <div>
            <h1>{isCelsius?`{$temperature}°  C`:`${convertToFarenheit(temperature)}°F`}|{getWeatherTypeFromCode(weatherCode)}</h1>
        </div>
    )
}
export default WeatherSummary;        
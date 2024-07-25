import { convertToFarenheit } from "../../../components/weatherUtil";

const dateformatter= new Intl.DateTimeFormat("en-IN",{
    month: "short",
    day: "numeric",
    year:"2-digit"
});
const fomatDate=(date)=>dateformatter.format(date);
const WeatherRow=({
    weather: {date, maxTemperature, minTemperature, weatherCode}, isCelsius
})=>{
    return(
        <tr>
            <td>{fomatDate(date)}</td>
            <td>H:{" "}
            {isCelsius?
            `${maxTemperature}°C`:
            `${convertToFarenheit(maxTemperature)}°F`}{" "}
            - L: {isCelsius?
                `${minTemperature}°C`:
                `${convertToFarenheit(minTemperature)}°F`}</td>
            <td>{getWeatherTypeFromCode(weatherCode)}</td>
        </tr>
    )
}
export default WeatherRow;
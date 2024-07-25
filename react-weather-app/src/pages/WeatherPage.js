import React,{ useEffect, useState } from "react";
import WeatherSummary from "../components/WeatherSummary";
import WeatherRow from "../components/WeatherRow";
import getWeather from "../api/weatherapi";
const fetchCordinates=(callback)=>{
    navigator.geolocation.getCurrentPosition(
        ({coords: {latitude,longitude }})=>{
            callback(latitude,longitude);
        }, 
        (err)=>{
            console.log(err);
        } 
    );
};
const WeatherPage=()=>{
    const [todayWeather,setTodayWeather]=useState({});
    const [weekWeather,setWeekWeather]=useState({});
    const [isCelsius,setisCelsius]=useState(true);
    const isDay=todayWeather.isDay ??true;
    useEffect(()=>{
    fetchCordinates(async(latitude,longitude) => {
    const weatherInfo= await getWeather({latitude,longitude})
        console.log(weatherInfo);
        convertToStateVariable(weatherInfo);
});
},[])
const convertToStateVariable=(tempWeekWeather)=>{
    let fetchedWeatherInfo = [];
    for(let i=0;i,tempWeekWeather.daily.length;i++){
        fetchedWeatherInfo.push({
            date: new Date(tempWeekWeather.daily.time[i]),
            maxTemperature: tempWeekWeather.daily.temperature_2m_max[i],
            minTemperature: tempWeekWeather.daily.temperature_2m_min[i],
            weatherCode: tempWeekWeather.daily.weathercode[i],    
        })
            }
            setWeekWeather(fetchedWeatherInfo);
        let currentWeather= tempWeekWeather.current_weather;
        currentWeather.time= new Date(currentWeather.time);
        currentWeather.isDay= currentWeather.is_day===1?true:false;
        delete currentWeather.is_day;
        currentWeather.weatherCode=currentWeather.weathercode;
        delete currentWeather.weathercode;
        setTodayWeather(currentWeather);
}
if(!weekWeather.length){
    return<p>...Loading</p>;
}
    return(
        <div className= {isDay ? "app" : "app dark"}>
            <h1 className="My-heading">WeatherPage </h1>
              <button className="ui icon button deg-btn" onClick={()=>{
                setisCelsius(!isCelsius);
                ;
            }}>
            °F
            </button>
            {isCelsius?"°F":"°C"};
            <div>

            <WeatherSummary currentWeather ={currentWeather} isCelsius={isCelsius}/>
            <table className={`ui very basic table ${!isDay ? "dark":""}`}>
            <thead className={'tabel-custom${!isDay ? "dark":""}'}>  
                <td>Date</td>
                <td>Temperature</td>
                <td>Type</td>
                </thead>
                <tbody className="tabel-custom">
                    {weekWeather.map((weather) =>
                    (<WeatherRow
                    weather={weather}
                    isCelsius={isCelsius}
                    key={weather.date}
                    />)
                      )}

                </tbody>
                </table> 

            </div>
            </div>
    )
    
}

export default WeatherPage;
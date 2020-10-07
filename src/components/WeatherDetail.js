import React from 'react';


function WeatherDetail({ selectedWeather }) {

    return (
        <div className="card my-5 py-5 px-5 text-center">
            <h1>Weather Detail</h1>
            <p> <img src={`https://openweathermap.org/img/wn/${selectedWeather.weather[0].icon}@2x.png`} /></p>
            <p>{selectedWeather.temp.day} &deg; C</p>
            <p>{(new Date(selectedWeather.dt)).toDateString()}</p>
            <p>{selectedWeather.huminity}</p>
            <p>{selectedWeather.pressure}</p>
            <p>{(new Date(selectedWeather.sunset)).toDateString()}</p>
            <p>{(new Date(selectedWeather.sunrise)).toDateString()}</p>

        </div>
    );
}

export default WeatherDetail;
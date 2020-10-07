import React from 'react';


function WeatherTable({weathers, handleWeatherSelect}) {

    return (
        <div className="card my-5 py-5 px-5 text-center">
            <h1>This is a weather table section</h1>
            <table>
                <thead>

                </thead>
                <tbody>
                    {
                        weathers.map(val => {
                            return (
                                <tr key={val.dt} onClick={() => handleWeatherSelect(val)}>
                                    <td> <img src={`https://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`} /></td>
                                    <td>{val.weather[0].main}</td>
                                    <td>{new Date(val.dt*1000).toDateString()}</td>
                                    <td>{(val.temp.day).toFixed(0)} &deg; C</td>
                                    {/* <td>{(val.temp.day-273.15).toFixed(0)} &deg; C</td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default WeatherTable;
import React from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherDetail from './WeatherDetail';
import WeatherTable from './WeatherTable';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            weathers: [],
            selectedWeather: null
        }
    }

    render() {
        return (
            <div className="container py-3 card my-3">
                <WeatherSearch handleSearchClick={this.handleSearchClick}/>
                <WeatherTable weathers={this.state.weathers} handleWeatherSelect={this.state.handleWeatherSelect} />
                <WeatherDetail selectedWeather={selectedWeather}/>
            </div>
        )
    }

    handleSearchClick = (city) => {
         this.fetchApi('Kuala Lumpur')
    }

    componentDidMount() {
        // this.fetchApi('Kuala Lumpur')
    }

    fetchApi(city) {
        // fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Kuala%20Lumpur&appid=9fd7a449d055dba26a982a3220f32aa2&units=metric')
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=9a875f3b663d836442770050455b2fbf&units=metric')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weathers: data['list']
                })
            })
            .catch((error) => {
                console.error('Error', error);
            })
    }

    handleWeatherSelect = (dt) => {
        console.log(dt)

        let selectedweather = this.state.weathers.filter(val=>{
            return val.dt === dt
        })

        this.setState({
            selectedWeather:selectedweather
        })
    }

}

export default Main;
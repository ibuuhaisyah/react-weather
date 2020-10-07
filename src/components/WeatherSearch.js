import React from 'react';


class WeatherSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: ''
        }
    }

    render() {

        return (
            <div>
                <div className="card my-5 py-5 px-5">
                    <div className="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search" value={this.state.cityName} onChange={(e)=> this.setState({cityName:e.target.value}) }></input>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary btn-block" onClick={this.props.handleSearchClick(this.state.cityName)}>Search</button>
                    </div>
                </div>
            </div>
            // <form>
            //     <input type="text" name="city" placeholder="City..." />
            //     <input type="text" name="country" placeholder="Country.." />
            //     <button>Get Weather</button>
            // </form>

        )
    }
    
     

}

export default WeatherSearch;
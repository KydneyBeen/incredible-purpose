class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }
    this.weather = []
    this.cities = []
    this.error = false
  }

  componentDidMount () {
    this.cities = {
      key: 'vancouver',
      name: 'Vancouver, BC'
    }
    this.loadCities()
    this.getWeather()
    .then((weather) =>{
      this.weather = weather
      this.setState({loading:false})
    })
    .catch((error) => {
      this.setState({loading:false})
      this.error = true
    })
  }

  loadCities () {
    let http = new XMLHttpRequest()
    http.open('POST', '/cities')
    http.addEventListener('loadend', () => {
      this.cities = JSON.parse(http.response)
    })
    http.addEventListener('error', (error) => {
      this.error = error
    })
    http.send()
  }

  getWeather (city) {
    return new Promise ((resolve, reject) => {
      let weather = []
      let http = new XMLHttpRequest()
      http.open('POST', '/seven/' + city)
      http.addEventListener('loadend', () => {
        weather = JSON.parse(http.response).daily
        resolve(weather)
      })
      http.addEventListener('error', () => {
        reject('error fetching weather')
      })
      http.send()
    }) 
  }

  updateWeather (city) {
    this.setState({loading:true}, () => {
      this.getWeather(city)
      .then((weather) => {
        this.weather = weather
        this.setState({loading:false})
      })
      .catch((error) => {
        this.error = error
        this.setState({loading:false})
      })
    })
  }

  render () {
    let weatherCards = () => {
      return this.weather.map((dayofweather) => {
        let day = new Date(dayofweather.dt * 1000)
        return <div className="weathercard">
          <p className="date">{day.toDateString()}</p>
          <p className="icon">
            <img src={`http://openweathermap.org/img/wn/${dayofweather.weather[0].icon}@2x.png`} />
          </p>
          <p>{dayofweather.weather[0].description}</p>
          <p>{dayofweather.temp.day}&deg;C</p>
        </div>
      })
    }
    let cityoptions = () => {
      return <select onChange={(e) => {this.updateWeather(e.target.value)}}>
        {this.cities.map((city) => {
          return <option value={city.key}>{city.name.toUpperCase()}</option>
        })}
      </select>
    }
    return (
      <main>
        <h1>The Weather Forecast</h1>
        <p>
          {cityoptions()}
        </p>
        <div className="container">
          { this.state.loading ? <p className="date">LOADING...</p> : weatherCards()}
        </div>
      </main>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('incredible-purpose'));

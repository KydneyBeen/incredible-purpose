class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }
    this.weather = []
    this.error = false
  }

  componentDidMount () {
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

  getWeather (city) {
    return new Promise ((resolve, reject) => {
      let weather = []
      let http = new XMLHttpRequest()
      http.open('POST', '/seven/' + city)
      http.onloadend((response) => {
        let data = JSON.parse(response)
        weather = data.daily
        resolve(weather)
      })
      http.onerror((error) => {
        reject(error)
      })
    }) 
  }

  render () {
    return (
      <main>
        <h1>The Weather Forecast</h1>
        { this.state.loading ? 'LOADING...' : this.weather}
      </main>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('incredible-purpose'));

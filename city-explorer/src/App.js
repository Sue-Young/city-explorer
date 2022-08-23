import logo from './logo.svg';
import './App.css';
// import Image from 'react-bootstrap/Image';
import React from 'react';
//import axios from 'axios';
//import CityForm from './CityForm.js'
// import CityInfo from './CityInfo.js'

class App extends React.Component {
  
  constructor( props ){
    super( props )
    this.state = {
      sQuery: '',
      sResults: null,
      mURL: '',
      tError: null,
    }
  }

  handleChange = (event) => {
    this.setState ({
      sQuery: event.target.value,
    });
  };

  handleSearch = async (event) => {
    event.preventDefault()
    try {
      // const response = await axios.get(URL);
      this.setState( {
        sResults: response.data[0],
        tError: null,
      })
    } catch (error) {
      this.setState({ tError: error})
    }
  };

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1> Render something already! </h1>
        </header>

      </div>
      </>
  )}
}

export default App;

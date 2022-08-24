import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import React from 'react';
import axios from 'axios';
import CityInfo from './CityInfo.js'

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
    console.log( 'location: ' + this.state.sQuery);
  };

  handleSearch = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.sQuery}&format=json`) ;
      this.setState( {
        sResults: response.data[0],
        tError: null,
      })
    } catch (error) {
      this.setState({ tError: error})
    }
  };

  render() {
    console.log(this.state.sResults);
    return (
   
      <div className="App">
        <header className="App-header">
          <h1> Enter a Location </h1>
          <Form onSubmit={this.handleSearch}>
            <InputGroup className="position-relative">
          <Form.Control
            onChange={this.handleChange}
            placeholder='Location...'
            />
            <Button type="submit" variant="primary">Explore!</Button>{' '}
            <Button type="submit" />
            </InputGroup>
              {this.state.tError}

            </Form>
        </header>
      </div>
    
  )}
}

export default App;

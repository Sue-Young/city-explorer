//mport logo from './logo.svg';
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
      sResults: false,
      mURL: '',
      tError: false,
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
    // console.log(this.state.sResults);
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
            </InputGroup>
              {this.state.tError}
            </Form>
        </header>
        <main>
          {
            <div>
              {
                !this.state.tError && this.state.sResults && (
                <>
                  <CityInfo cityInfo={this.state.sResults}>        
                  </CityInfo> 
                
              
                  <Image
                    srcSet=     
                      {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.sResults.lat},${this.state.sResults.lon}`}
                      sizes="(max-width: 600px) 300px, 1200px"
                      alt="Error"
                  />   
                </>
                )
              }        
            </div>
          }
          </main>
          <footer>by Sue Young</footer>
      </div>
    
  )}
}

export default App;

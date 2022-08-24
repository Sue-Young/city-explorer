import React from 'react';

class CityInfo extends React.Component {
  constructor(props) {
    super( props)
    this.state = { theKey: 0 }
 }

 handleClick = () => {
  this.setState( state => {
    return { theKey: state.theKey ? 0 : 1 }
  });
}

  render() {
    return (
      <>
      {
        this.props.cityInfo && 
        <div className="LocationData">
          <h1>Name: {this.props.cityInfo.display_name}</h1>
          <h1>Lat: {this.props.cityInfo.lat}</h1>
          <h1>Lon: {this.props.cityInfo.lon}</h1>
        </div>
      }
      </>
    )
  }
}

export default CityInfo;
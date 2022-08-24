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
          <h1>{this.props.cityInfo.display_name.split(',').join('---')}</h1>
          <h2>Lat: {this.props.cityInfo.lat}</h2>
          <h2>Lon: {this.props.cityInfo.lon}</h2>
        </div>
      }
      </>
    )
  }
}

export default CityInfo;
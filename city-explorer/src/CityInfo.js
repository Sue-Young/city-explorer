import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

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
          <h1>Name: {this.props.cityInfo?.display_name}</h1>
        {/* <Accordion flush activeKey={this.state.theKey} >
            <Accordion.Item theKey={0}>
              <Accordion.Header onClick={this.handleClick} >
              {this.props.cityInfo?.display_name}
              </Accordion.Header>
              <Accordion.Body>
              {this.props.cityInfo?.lat}, {this.props.cityInfo?.lon}
              </Accordion.Body>
         </Accordion.Item>
        </Accordion> */}
        </div>
      }
      </>
    )
  }
}

export default CityInfo;
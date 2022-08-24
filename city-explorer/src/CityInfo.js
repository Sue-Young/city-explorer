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
        <div className="CityInfo">
        {/* {   <Accordion flush activeKey={this.state.theKey} className="CityInfo"/>
            <Accordion.Item theKey={0}>
              <Accordion.Header onClick={this.handleClick} className="CityInfo"
              {this.props.cityInfo?.display_name}
              </Accordian.Header>  
              <Accordian.Body>  
               {this.props.cityInfo?.lat}, {this.props.cityInfo?.lon}
              </Accordian.Body>  
            </Accordian.Item>
          </Accordian>             } */}
        </div>
      }
      </>
    )
  }
}

export default CityInfo;
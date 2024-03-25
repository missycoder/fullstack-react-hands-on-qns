import React, { Component } from 'react';

class Dispenser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: ''
    };
  }

  handleButtonClick = (message) => {
    this.setState({ displayMessage: message });
  }

  render() {
    return (
      <div>
        <div className='display'>{this.state.displayMessage}</div>
        <button onClick={() => this.handleButtonClick("Dispensing coffee")}>Coffee</button>
        <button onClick={() => this.handleButtonClick("Dispensing tea")}>Tea</button>
        <button onClick={() => this.handleButtonClick("Dispensing orange juice")}>Orange Juice</button>
      </div>
    );
  }
}

export default Dispenser;

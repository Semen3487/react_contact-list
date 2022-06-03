import React, { Component } from 'react';
import './ControlButtons.css';

export class ControlButtons extends Component {


  render() {
    return (
      <div className='footer-buttons'>
        <button>New</button>
        <button>Save</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default ControlButtons;

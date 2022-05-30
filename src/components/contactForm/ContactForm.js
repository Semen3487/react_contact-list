import React, { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  render() {
    return (
      <form className='main-inner-form'>
        <div className='form-item'>
          <input type='text'
                 placeholder='First Name' ></input>
          <span>X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 placeholder='Last Name' ></input>
          <span>X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 placeholder='Email' ></input>
          <span>X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 placeholder='Phone' ></input>
          <span>X</span>
        </div>

        
      </form>
    )
  }
}

export default ContactForm;

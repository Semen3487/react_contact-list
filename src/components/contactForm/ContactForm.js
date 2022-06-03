import React, { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {

  state = {
    toSendForm: [
        {
          fName: '',
          lName: '',
          email: '',
          phone: '',
        }
      ],
  }

  // fName: '',
  //   lName: '',
  //   email: '',
  //   phone: '',   

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit({

      toSendForm: {
        fName: this.props.fName,   
        lName: this.props.lName,
        email: this.props.email,
        phone: this.props.phone,

      }
          
    })
  }
  
  render() {
    return (
      <form className='main-inner-form'
            onSubmit={this.onSubmitForm} >
        <div className='form-item'>
          <input type='text'
                 name='fName'
                 placeholder='First Name'
                 value={this.state.fName}
                 onChange={this.onInputChange} />
          <span className='input-group' >X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 name='lName'
                 placeholder='Last Name' 
                 value={this.state.lName}
                 onChange={this.onInputChange} />
          <span className='input-group'>X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 name='email'
                 placeholder='Email'
                 value={this.state.email}
                 onChange={this.onInputChange} />
          <span className='input-group'>X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 name='phone'
                 placeholder='Phone'
                 value={this.state.phone}
                 onChange={this.onInputChange} />
          <span className='input-group'>X</span>
        </div>

        <button>Save</button>
        {/* <button>Delete</button> */}

        
      </form>
    )
  }
}

export default ContactForm;

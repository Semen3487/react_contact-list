import React, { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {

  state = {
    ...this.props.formState,
  };

  createEmptyForm() {
    return {
      fName: '',
      lName: '',
      email: '',
      phone: '',
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (state.id === props.formState.id) {
      return {};
    }
    return {
      ...props.formState,
    }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit({
        ...this.state,  
    });
    this.setState({
      ...this.createEmptyForm(),
    });
  };

  toClearField = (event) => {
    const sibling = event.target.parentNode.firstChild;
    this.setState({
      [sibling.name]: '',
    });
  };

  toDeleteContact = () => {
    this.props.onDelete(this.props.formState.id);
    this.setState({
      ...this.createEmptyForm(),
    });
  };
  
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
          <span className='input-group'
                onClick={this.toClearField} >X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 name='lName'
                 placeholder='Last Name' 
                 value={this.state.lName}
                 onChange={this.onInputChange} />
          <span className='input-group'
                onClick={this.toClearField} >X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 name='email'
                 placeholder='Email'
                 value={this.state.email}
                 onChange={this.onInputChange} />
          <span className='input-group'
                onClick={this.toClearField} >X</span>
        </div>
        <div className='form-item'>
          <input type='text'
                 name='phone'
                 placeholder='Phone'
                 value={this.state.phone}
                 onChange={this.onInputChange} />
          <span className='input-group'
                onClick={this.toClearField} >X</span>
        </div>

        <button>Save</button>
        {this.state.id ? (<button onClick={this.toDeleteContact} >Delete</button>) : (<span></span>)}
                                  
      </form>
    )
  }
}

export default ContactForm;

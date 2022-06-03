import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ListName from './components/listName/ListName';

export class App extends Component {

  state = {
    toListItem: [],
    // toSendForm: [
    //   {
    //     fName: '',
    //     lName: '',
    //     email: '',
    //     phone: '',
    //   }
    // ],
  }

  addContactName = (toSendForm) => {
    toSendForm.id = Date.now();
    this.setState({
      toListItem: [...this.state.toListItem, toSendForm]
    })
  }

  deleteContactName = (id) => {
    this.setState({
      toListItem: [...this.state.toListItem.filter((contact) => contact.id !== id)]
    })
  }

  // deleteInputField = (name) => {
  //   this.setState({
  //     toSendForm: [...this.state.toSendForm.filter((element) => element.name !== name)]
  //   })
  // }
  
  

  render() {
    return (
      <div className='container'>
        <div className='content'>
          <header>
            <h1>
              Contact list
            </h1>
          </header>
          <main>
            <ListName contacts={this.state.toListItem}
                      onDelete={this.deleteContactName} />
            <ContactForm onSubmit={this.addContactName} />        
          </main>
        </div>
      </div>
    )
  }
}

export default App;

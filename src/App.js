import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ListName from './components/listName/ListName';

export class App extends Component {

  state = {
    toListItem: [],
    formState: this.createEmptyForm(),
  };

  createEmptyForm() {
    return {
      id: null,
      fName: '',
      lName: '',
      email: '',
      phone: '',
    }
  };
  
  saveToStorage(newContactList) {
    localStorage.setItem('Contact List', JSON.stringify(newContactList));
  };

  saveContact = (contact) => {
    if (!contact.id) {
      this.addContactName(contact);
    } else {
      this.updateContactName(contact);
    }
  };

  addContactName = (contact) => {
    contact.id = Date.now();
    const newContactList = [...this.state.toListItem, contact];
    this.saveToStorage(newContactList);
    this.setState({
      toListItem: newContactList,
      formState: this.createEmptyForm(),
    });
  };

  updateContactName = (contact) => {
    const newContactList = this.state.toListItem.map((item) => item.id === contact.id ? contact : item);
    this.saveToStorage(newContactList);
    this.setState({
      toListItem: newContactList,
      formState: contact,
    });
  };

  // updateContactName(contact) {
  //   this.setState((state) => {
  //     const newContactList = state.toListItem.map((item) => item.id === contact.id ? contact : item);
  //     this.saveToStorage(newContactList);
  //     return {
  //       newContactList,
  //       formState: contact,
  //     };
  //   }); 
  // };

  selectContact = (contact) => {
    this.setState({
      formState: contact,
    });
  };
  
  toCreateContact = () => {
    this.setState({
      formState: this.createEmptyForm(),
    });
  };
  
  deleteContactName = (id) => {
    const newContactList = [...this.state.toListItem.filter((contact) => contact.id !== id)];
    this.setState({
      toListItem: newContactList,
    });
    this.saveToStorage(newContactList);
  };

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
                      onDelete={this.deleteContactName}
                      onSelect={this.selectContact}
                      onCreate={this.toCreateContact}
                      />
            <ContactForm 
                        //  key={this.state.formState.id}
                         formState={this.state.formState}
                         onSubmit={this.saveContact}
                         onDelete={this.deleteContactName}
                          />        
          </main>
        </div>
      </div>
    )
  }
}

export default App;

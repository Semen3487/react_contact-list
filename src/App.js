import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ControlButtons from './components/controlButtons/ControlButtons';
import ListName from './components/listName/ListName';

export class App extends Component {
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
            <ListName />
            <ContactForm />
          </main>
          <footer>
            <ControlButtons />
          </footer>
        </div>
      </div>
    )
  }
}

export default App;

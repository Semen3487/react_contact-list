import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';
import './ListName.css';

export class ListName extends Component {
  render() {
    return (
      <div className='main-inner-list'>
        <div>
        {this.props.contacts.map((contact) => {
          return (
            <ListItem key={contact.id} 
                      contact={contact}
                      onDelete={this.props.onDelete} />
          )
        })}
        </div>
        <button>New</button>
      </div>
    )
  }
}

export default ListName;

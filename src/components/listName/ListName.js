import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';
import './ListName.css';

export class ListName extends Component {

  render() {
    return (
      <div className='main-inner-list'>
        <div className='list-name-scroll'>
        {this.props.contacts.map((contact) => {
          return (
            <ListItem key={contact.id} 
                      contact={contact}
                      onDelete={this.props.onDelete}
                      onEdit={this.props.onSelect}
                       />
          )
        })}
        </div>
        <button onClick={this.props.onCreate} >New</button>
      </div>
    )
  }
}

export default ListName;

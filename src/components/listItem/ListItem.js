import React, { Component } from 'react';
import './ListItem.css';

export class ListItem extends Component {

  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  }
  

  render() {
    return (
      <div className='list-item'>
        <span className='list-group-name'>
          {this.props.contact.name}
        </span>
        <span className='list-group-delete'
              onClick={this.onContactDelete} >X</span>
      </div>
    )
  }
}

export default ListItem;

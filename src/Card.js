import React from 'react';
import './Card.css';

export default class Card extends React.Component {

  handleDragStart = (e) => {
    // Set the card's ID and status as data during drag start
    e.dataTransfer.setData('text/plain', this.props.id);
    e.dataTransfer.setData('status', this.props.status);
  }

  handleDragOver = (e) => {
    // Prevent the default drag over behavior
    e.preventDefault();
  }

  handleDrop = (e) => {
    e.preventDefault();

    // Get the status of the card from data
    const cardStatus = e.dataTransfer.getData('status');
    console.log(this.props.status, cardStatus)
    // Check the status of the swimlane
    if (this.props.status !== cardStatus) {
      
      // Update the card's status and CSS class
      this.props.updateCardStatus(this.props.id, this.props.status);
    }
  }
  render() {
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }
    return (
      <div className={className.join(' ')} data-id={this.props.id} data-status={this.props.status}>
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}
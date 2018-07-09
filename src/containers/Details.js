import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render() {
    if (!this.props.client) {
      return (
        <div className='clientDetals-start'>
          <p>please select customer....</p>
        </div>
      );
    }
    return(
      <div className='clientDetals'>
        <p>{this.props.client.general.firstName}   {this.props.client.general.lastName}</p>
        <img className='clientDetals-img' src={this.props.client.general.avatar} alt='Client' width='128px' height='128px' />
        <div className='clientDetals-job'>
          <p>{this.props.client.job.title}</p>
          <p>{this.props.client.job.company}</p>
        </div>
        <div className='clientDetals-address'>
          <span>Address: </span>
          <p>{this.props.client.address.street}</p>
          <p>{this.props.client.address.city}</p>
          <p>{this.props.client.address.zipCode}</p>
          <p>{this.props.client.address.country}</p>
        </div>
          <div className='clientDetals-contact'>
            <span>Contact info: </span>
            <p>{this.props.client.contact.email}</p>
            <p>{this.props.client.contact.phone}</p>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    client: state.active
  };
}

export default connect(mapStateToProps)(Details);

import React, { Component } from 'react';
import './ListClients.min.css';
// import clients from './clients.json';

class ClientDetals extends Component {

  render() {
              return (
                <li>
                  <img className='clientDetals-img' src={this.props.avatar} alt='Client' width='128px' height='128px' />
                <div className='clientDetals-info'>
                  <div className='clientDetals-name'>{this.props.firstName} {this.props.lastName}</div>
                  <div className='clientDetals-job'><p>{this.props.jobTitle}</p>
                                                    <p>{this.props.jobCompany}</p>  </div>
                  <div className='clientDetals-address'><span>Address: </span>
                                                      <p>{this.props.addressStreet}</p>
                                                      <p>{this.props.addressCity}</p>
                                                      <p>{this.props.addressZipCode}</p>
                                                      <p>{this.props.addressCountry}</p>
                                                        </div>
                  <div className='clientDetals-contact'><span>Contact info: </span>
                                                        <p>{this.props.contactEmail}</p>
                                                        <p>{this.props.contactPhone}</p>
                                                        </div>
                </div>
                </li>
              )
            }
}

export default ClientDetals;

import React, { Component } from 'react';
import './ListClients.min.css';
import clients from './clients.json';
import Client from './Client.js';
import ClientDetals from './ClientDetals.js';






class ListClients extends Component {

  constructor(props) {
    super(props);
    this.searchClient = this.searchClient.bind(this);
    this.state ={seeClient: clients};
  }

  searchClient(event) {
    var searchClient = event.target.value.toLowerCase();
      var seeClient = clients.filter(function(el) {
          var searchValueFirstName = el.general.firstName.toLowerCase();
          var searchValueLastName = el.general.lastName.toLowerCase();
          return (searchValueFirstName.indexOf(searchClient) !== -1) || (searchValueLastName.indexOf(searchClient) !== -1);
    });
     this.setState({seeClient: seeClient});
  }

  render() {
    return (
      <div className='list'>
      <div className='listClients'>

        <input type='text' className='search-client' onChange={this.searchClient} />
        <ul className='listClients-list'>
          {
            this.state.seeClient.map(function(el) {
              return(
                <Client
                key={el.contact.phone}
                avatar={el.general.avatar}
                firstName={el.general.firstName}
                lastName={el.general.lastName}
                jobTitle={el.job.title}
                />
                )
            })
          }
        </ul>

        </div>
        <div className='clientDetals'>
        <ul className='clientDetals-list'>
          {
            clients.map(function(el) {
              // console.log('-----', seeAvatar);
              return (
                <ClientDetals
                  key={el.contact.phone}
                  avatar={el.general.avatar}
                  firstName={el.general.firstName}
                  lastName={el.general.lastName}
                  jobTitle={el.job.title}
                  jobCompany={el.job.company}
                  addressStreet={el.address.street}
                  addressCity={el.address.city}
                  addressZipCode={el.address.zipCode}
                  addressCountry={el.address.country}
                  contactEmail={el.contact.email}
                  contactPhone={el.contact.phone}
                />
              )
            })
          }
        </ul>
      </div>
    </div>
    );
  }
}

export default ListClients;

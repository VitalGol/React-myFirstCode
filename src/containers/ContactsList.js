import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index.js';
import clients from '../clients.json';
console.log('CLIENTS', clients);


class  ContactsList extends Component{

  showList() {
    return this.props.clients.map((client) => {
      return (
            <li key={client.contact.phone} className='client' onClick={() => this.props.select (client)}>
                <img className='client-img' src={client.general.avatar} alt='customer img' width='50px' height='50px' />
                <div className='client-info'>
                  <div className='client-name'>{client.general.firstName} {client.general.lastName}</div>
                  <div className='client-job'>{client.job.title}</div>
                </div>
                <div>{this.props.children}</div>
            </li>
        )
    });
  }


  searchClient(event) {
    var searchClient = event.target.value.toLowerCase();
      var seeClient = clients.filter(function(el) {
          var searchValueFirstName = el.general.firstName.toLowerCase();
            var searchValueLastName = el.general.lastName.toLowerCase();
          return (searchValueFirstName.indexOf(searchClient) !== -1) || (searchValueLastName.indexOf(searchClient) !== -1);
    });
         this.setState({
           seeClient: seeClient
         });
         console.log('----------', seeClient);
  }
  constructor(props) {
      super(props);
      this.searchClient = this.searchClient.bind(this);
      this.state =
              {
                  seeClient: clients
               };

    }

  render() {
    return (
      <div className='list'>
        <div className='contactsList'>
          <input type='text' className='search-client' onChange={this.searchClient} />
          <ul>
            {this.showList()}
          </ul>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    clients: state.clients
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({select: select}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(ContactsList);

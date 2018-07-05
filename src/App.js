import React, { Component } from 'react';
// import './App.css';
import clients from './clients.json';

// var contacts = clients;
console.log('----', clients);

// console.log('CLIENTS---', clients[0].job.title);



class ListClients extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            clients.map(function(el) {
              return <li>{el.general.lastName}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ListClients;

import React, { Component } from 'react';
import './ListClients.min.css';
import clients from './clients.json';


class Client extends Component {

  constructor(props) {
  super(props);
  
  this.state = {
    // curentClient: key
  };
  }

//   clickOnClient(event) {
//     // this.setState({});
//     var pushAvatar = event.target.src;
//     console.log('PUSHAVATAR---', pushAvatar);
//       var seeAvatar = clients.filter(function(el) {
//           var seeValueAvatar = el.general.avatar;
//           // console.log('SEEVALUEAVATAR---', seeValueAvatar);
//           return seeValueAvatar.indexOf(pushAvatar) !== -1;
//
//     });
//
//      this.setState({
//        seeAvatar: seeAvatar
//
//      })
//        console.log('SEEAVATAR', seeAvatar);
// }

  render() {
              return (
                <li className='client'>
                  <img className='client-img' src={this.props.avatar} alt='someText' width='50px' height='50px' onClick={this.clickOnClient}/>
                  <div className='client-info'>
                    <div className='client-name'>{this.props.firstName} {this.props.lastName}</div>
                    <div className='client-job'>{this.props.jobTitle}</div>
                  </div>
                  <div>{this.props.children}</div>
                </li>
              );
           }
}


export default Client;

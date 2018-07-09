import React from 'react';
import '../components/WebPage.min.css';
import ContactsList from '../containers/ContactsList.js';
import Details from '../containers/Details';

const WebPage = () => (
  <div>
    <ContactsList />
    <Details />
  </div>
);



export default WebPage;

/* eslint-disable */
import React from 'react'
import MainLayout from '../mainlayout/MainLayout';
import contacts from '../ContactUs';
import Card from '../components/Card';

function Contact() {
  function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  }
  return (
    <MainLayout>
      <div className="prcard">
      <p className='prcontent'>Contact List</p><br />
      {contacts.map(createCard)}
      </div>
    
    </MainLayout>
    
  )
}

export default Contact;
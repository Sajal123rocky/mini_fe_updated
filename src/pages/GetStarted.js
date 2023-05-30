/* eslint-disable */
import React from 'react'
import MainLayout from '../mainlayout/MainLayout';
import contacts from '../ContactUs';
import Card from '../components/Card';
import Flip from '../components/Flip';
import identity from '../UserIdentity';

function GetStarted() {
  function createCard(contact) {
    return (
      <Flip
        key={contact.id}
        name={contact.name}
        img={contact.img}
        content={contact.content}
        type={contact.type}
      />
    );
  }
  return (
    <MainLayout>
      <div className="getstartedcards">
      <p className='getstartedcontent'>Who are you?</p><br />
      {identity.map(createCard)}
      </div>
    
    </MainLayout>
    
  )
}

export default GetStarted;
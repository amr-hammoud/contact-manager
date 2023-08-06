import React from 'react'

const ContactList = ({contacts}) => {
  return (
    <div>
      <ul>
        {contacts.map((contact, index)=>(<li key={index} >{contact.name}</li>))}
      </ul>
    </div>
  )
}

export default ContactList
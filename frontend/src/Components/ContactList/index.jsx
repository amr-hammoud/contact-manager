import React from 'react'
import './style.css'
import edit_icon from '../../assets/icons/edit.svg'
import delete_icon from '../../assets/icons/delete.svg'

const ContactList = ({contacts}) => {
  return (
    <div className='container'>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Location</th>
            <th>a</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index)=>(
          <tr key={index} className='contact-row' >
            <td>{contact.name}</td>
            <td>{contact.phone_number}</td>
            <td>{contact.latitude} - {contact.longitude}</td>
            <td className='actions'>
              <img src={edit_icon} alt="edit" />
              <img src={delete_icon} alt="delete" />
            </td>
          </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ContactList
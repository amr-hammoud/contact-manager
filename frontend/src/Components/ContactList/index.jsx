import React from 'react'
import './style.css'
import edit_icon from '../../assets/icons/edit.svg'
import delete_icon from '../../assets/icons/delete.svg'
import person_icon from '../../assets/icons/person.svg'
import phone_icon from '../../assets/icons/phone.svg'
import location_icon from '../../assets/icons/location.svg'

const ContactList = ({contacts}) => {
  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th><td><img src={person_icon} alt="" />Name</td></th>
            <th><td><img src={phone_icon} alt="" />Phone Number</td></th>
            <th><td><img src={location_icon} alt="" />Location</td></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index)=>(
          <tr key={index} className='contact-row' >
            <td>{contact.name}</td>
            <td>{contact.phone_number}</td>
            <td>{contact.location}</td>
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
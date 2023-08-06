import React from 'react'
import './style.css'
import edit_icon from '../../assets/icons/edit.svg'
import delete_icon from '../../assets/icons/delete.svg'
import person_icon from '../../assets/icons/person.svg'
import phone_icon from '../../assets/icons/phone.svg'
import location_icon from '../../assets/icons/location.svg'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ContactList = ({contacts}) => {

  const navigate = useNavigate();

	const handleNavigation = (route) => {
		navigate(route)
	}

  const deleteContact = async (id) => {
    console.log(id);
    const response = await axios.delete(`http://127.0.0.1:8000/api/contact/delete/${id}`,{headers:{Accept:"application/json"}})
    console.log(response);
  }


  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th><div><img src={person_icon} alt="" />Name</div></th>
            <th><div><img src={phone_icon} alt="" />Phone Number</div></th>
            <th><div><img src={location_icon} alt="" />Location</div></th>
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
              <img src={edit_icon} alt="edit" onClick={() => handleNavigation(`/form/${contact.id}`)} />
              <img src={delete_icon} alt="delete" onClick={() => deleteContact(contact.id)}/>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ContactList
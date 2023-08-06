import React, { useEffect, useState } from 'react'
import ContactList from '../../Components/ContactList'
import axios from 'axios'


function Home() {

  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    const response = await axios('http://127.0.0.1:8000/api/contact')
    setContacts(response.data)
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div>
      <h1>Contacts List</h1>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default Home
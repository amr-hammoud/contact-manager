import React, { useEffect, useState } from "react";
import ContactList from "../../Components/ContactList";
import axios from "axios";
import "./style.css";
import Sidebar from "../../Components/Sidebar";

function Home() {
	const [contacts, setContacts] = useState([]);

	const fetchContacts = async () => {
		const response = await axios("http://127.0.0.1:8000/api/contact");
		setContacts(response.data);
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	const handleDeleteContact = (deletedContactId) => {
		const updatedContacts = contacts.filter(
			(contact) => contact.id !== deletedContactId
		);
		setContacts(updatedContacts);
	};

	return (
		<div className="all">
			<Sidebar />
			<div className="home">
				<h1>Contacts List</h1>
				<ContactList contacts={contacts} onDeleteContact={handleDeleteContact}/>
			</div>
		</div>
	);
}

export default Home;

import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

function ContactMap() {
	const [contacts, setContacts] = useState([]);

	const fetchContacts = async () => {
		const response = await axios("http://127.0.0.1:8000/api/contact");
		setContacts(response.data);
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<div className="all">
			<Sidebar />
			<div className="map">
				<h1>Contacts Map</h1>
				<div id="map">
					<MapContainer
						center={[33.89332, 35.50157]}
						zoom={10}
						scrollWheelZoom={true}
					>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

						{contacts.map((contact, index) => (
              <div key={index}>
              <Marker position={[contact.latitude, contact.longitude]}>
							<Popup>
								<h4>{contact.name}</h4>
								<h5>{contact.phone_number}</h5>
							</Popup>
						</Marker>
            </div>

						))}
				
					</MapContainer>
				</div>
			</div>
		</div>
	);
}

export default ContactMap;

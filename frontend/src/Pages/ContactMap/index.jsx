import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from 'leaflet';
import person_icon from '../../assets/icons/person_pin_circle.svg'

function ContactMap() {
	const [contacts, setContacts] = useState([]);

	const fetchContacts = async () => {
		const response = await axios("http://127.0.0.1:8000/api/contact");
		setContacts(response.data);
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	const icon = new L.Icon({
		iconUrl: person_icon,
		iconSize: [36,36],
		iconAnchor: [21,21],
	})

	return (
		<div className="all">
			<Sidebar />
			<div className="map">
				<h1>Contacts Map</h1>
				<div id="map">
					<MapContainer
						center={[33.89332, 35.50157]}
						zoom={2}
						scrollWheelZoom={true}
					>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

						{contacts.map((contact, index) => (
							<div key={index}>
								<Marker
									position={[
										contact.latitude,
										contact.longitude,
									]}
									icon={icon}
								>
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

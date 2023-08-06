import { PhoneInput } from "react-contact-number-input";
import axios from "axios";
import LocationSuggestions from "../../Components/LocationSuggestions";
import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../Components/Sidebar";
import { useParams } from "react-router-dom";

function ContactForm() {
	const { id } = useParams();

	useEffect(() => {
		fillForm();
	}, [id]);

	const fillForm = async () => {
		const response = await axios(`http://127.0.0.1:8000/api/contact/${id}`);
		const contact = response.data;
		setData({
			...data,
			name: contact.name,
			phone_number: contact.phone_number,
			location: contact.location,
			latitude: contact.latitude,
			longitude: contact.longitude,
		});
	};

	const [data, setData] = useState({
		name: "",
		phone_number: "",
		location: "",
		latitude: "",
		longitude: "",
	});

	const [location_data, setLocationData] = useState({
		locations: [],
		query: "Beirut",
	});

	const fetchLocations = async () => {
		try {
			const response = await axios(
				`https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-500&q=${location_data.query}`
			);
			setLocationData({
				...location_data,
				locations: response.data.records,
			});
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchLocations();
	}, [location_data.query]);

	const handleLocationChange = (e) => {
		const selected_city = e.target.value;
		setLocationData({ ...location_data, query: selected_city });

		const selected_location = location_data.locations.find(
			(location) => location.fields.ascii_name === selected_city
		);

		if (selected_location) {
			setData({
				...data,
				location: selected_location.fields.ascii_name,
				latitude: selected_location.fields.latitude,
				longitude: selected_location.fields.longitude,
			});
		} else {
			setData({
				...data,
				latitude: "",
				longitude: "",
			});
		}
	};

	const handleNameChange = (e) => {
		setData({ ...data, name: e.target.value });
	};

	const handlePhoneChange = (e) => {
		setData({
			...data,
			phone_number: e.countryCode + e.phoneNumber?.replaceAll(" ", ""),
		});
	};

	const clearInputs = () => {
		setData({
			...data,
			name: "",
			phone_number: "",
			location: "",
			latitude: "",
			longitude: "",
		});
	};

	const createOrUpdateContact = async () => {
		const url = id
			? `http://127.0.0.1:8000/api/contact/createOrUpdate/${id}`
			: `http://127.0.0.1:8000/api/contact/createOrUpdate`;
		try {
			const response = await axios.post(url, data);
			console.log(response);
			clearInputs();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="all">
			<Sidebar />
			<div className="contact-form">
				<h1>Contact Form</h1>
				<div className="form">
					<div className="form-input">
						<input
							type="text"
							placeholder="Name"
							onChange={handleNameChange}
							value={data.name}
							autoFocus
						/>
					</div>

					<div className="form-input">
						<PhoneInput
							countryCode={"lb"}
							onChange={handlePhoneChange}
						/>
					</div>

					<div className="form-input">
						<input
							type="text"
							placeholder="City"
							list="suggestions"
							onChange={handleLocationChange}
							value={data.location}
						/>
						<LocationSuggestions
							location_data={location_data.locations}
						/>
					</div>

					<div className="form-input">
						<button onClick={createOrUpdateContact}>Confirm</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;

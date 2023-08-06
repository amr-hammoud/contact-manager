import { PhoneInput } from "react-contact-number-input";
import axios from "axios";
import LocationSuggestions from "../../Components/LocationSuggestions";
import React, { useEffect, useState } from "react";

function ContactForm() {
	const [data, setData] = useState({
		name: "",
		phone_number: "",
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

	const createContact = async () => {
		// console.log(data);
		const url = "http://127.0.0.1:8000/api/contact/createOrUpdate";
		try {
			const response = await axios.post(
				url,
				data,
			);
			console.log(response);

		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="container">
			<h1>Contact Form</h1>
			<input
				type="text"
				placeholder="Name"
				onChange={handleNameChange}
				autoFocus
			/>

			<input
				type="text"
				placeholder="City"
				list="suggestions"
				onChange={handleLocationChange}
			/>

			<LocationSuggestions location_data={location_data.locations} />

			<PhoneInput countryCode={"lb"} onChange={handlePhoneChange} />
			<button onClick={createContact}>Create</button>
		</div>
	);
}

export default ContactForm;

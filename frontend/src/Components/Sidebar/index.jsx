import React from "react";
import "./style.css";
import add_icon from "../../assets/icons/add.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {

	const navigate = useNavigate();

	const handleNavigation = (route) => {
		navigate(route)
	}

	return (
		<div className="sidebar">
			<div className="create-contact-btn" onClick={() => handleNavigation('/form')}>
				<img src={add_icon} alt="" />
				Create Contact
			</div>
			<div className="navigation">
				<div className="nav-link" onClick={() => handleNavigation('/')}>Contacts</div>
				<div className="nav-link" onClick={() => handleNavigation('/map')}>Map</div>
			</div>
		</div>
	);
}

export default Sidebar;

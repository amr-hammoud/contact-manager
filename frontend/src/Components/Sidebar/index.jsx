import React from "react";
import "./style.css";
import add_icon from '../../assets/icons/add.svg'

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="create-contact-btn">
        <img src={add_icon} alt="" />Create Contact
        </div>
			<div className="navigation">
        <div className="nav-link">Contacts</div>
        <div className="nav-link">Map</div>
      </div>
		</div>
	);
}

export default Sidebar;

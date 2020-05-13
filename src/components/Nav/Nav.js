import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
	let loginLinkData = {
		path: "/login",
		text: "Login / Register",
	};

	if (props.store.user.id != null) {
		loginLinkData.path = "/login";
		loginLinkData.text = "login";
	}

	return (
		<div className="nav">
			<img src="/archivesstorage.jpg" alt="storage" />
			<h2 className="nav-title">The Stewardship Exchange</h2>
			<p>
				the <em>first</em> online resource for cultural heritage agencies to
				share surplus preservation and conservation material for collections
				care
			</p>
			{/* </Link> */}
			{/* Always show these links since these pages are not protected */}
			<div className="nav-right">
				<Link className="nav-link" to="/home">
					Home
				</Link>
				<Link className="nav-link" to="/works">
					How It Works
				</Link>
				<Link className="nav-link" to="/stories">
					Exchange Stories
				</Link>
				<Link className="nav-link" to="/about">
					About / Contact
				</Link>

				{/* <Link className="nav-link" to="/about">
					About
				</Link> */}
				<Link className="nav-link" to={loginLinkData.path}>
					{/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
					{loginLinkData.text}
				</Link>
				{/* Show the link to the info page and the logout button if the user is logged in */}
				{props.store.user.id && (
					<>
						{/* <Link className="nav-link" to="/info">
							Info Page
						</Link> */}
						<Link className="nav-link" to="/userhome">
							User's'Home Page
						</Link>
						<LogOutButton className="nav-link" />
					</>
				)}
			</div>
		</div>
	);
};

export default connect(mapStoreToProps)(Nav);

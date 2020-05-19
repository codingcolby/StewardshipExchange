import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";
import "../App/App.css";

class FullOffersPage extends Component {
	state = {
		searchterm: "",
	};

	componentDidMount() {
		// load up all information from the server
		this.props.dispatch({
			type: "GET_OFFERS",
		});
	}

	handleSearchTerm = (propertyName) => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	};

	onLogin = (event) => {
		this.props.history.push("/login");
	};

	render() {
		return (
			<div className="container">
				<div className="current_regnow">
					<h2>Current Offers with Full Detail</h2>
					<table>
						<tbody>
							<tr>
								<th>Status</th>
								<th>Categories</th>
								<th>Date Posted</th>
								<th>Location</th>
								<th>Items Offered</th>
							</tr>

							{this.props.store.offersReducer.map((item, index) => (
								<tr key={`index-${index}`}>
									<td className="status">{item.offer_status}</td>
									<td className="categories">{item.off_cat}</td>
									<td className="date">{item.submit_date}</td>
									<td className="location">
										{item.city}, {item.state}
									</td>
									<td className="description">
										{item.off_detail}
										<br />
										<hr />
										<span className="fullextraslabel">Contact: </span>
										<span className="fullextras">{item.contact_name} </span>
										<span className="fullextraslabel"> | </span>
										<span className="fullextras">{item.contact_email} </span>
										<span className="fullextraslabel"> | </span>
										<span className="fullextras">
											{item.ten_digit_dash_phone1}{" "}
										</span>
										<br />
										<span className="fullextraslabel">Agency: </span>
										<span className="fullextras">{item.agency} </span>
										<br />
										<span className="fullextraslabel">Shipping options: </span>
										<span className="fullextras"> {item.ship_options} </span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(FullOffersPage);

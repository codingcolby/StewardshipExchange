import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";
import "../App/App.css";

class UserPage extends Component {
	state = {
		searchterm: "",
	};

	componentDidMount() {
		// load up all information from the server
		this.props.dispatch({
			type: "GET_USERSOFFERS",
			payload: this.props.store.user.id,
		});
	}

	handleSearchTerm = (propertyName) => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	};

	// onLogin = (event) => {
	// 	this.props.history.push("/login");
	// };

	render() {
		return (
			<div className="container">
				<div>
					<h1 id="welcome">Welcome {this.props.store.user.username}!</h1>
					<p></p>
					{/* <p>Your ID is: {this.props.store.user.id}</p> */}
				</div>

				<div className="pageText">
					<h2>What would you like to do?</h2>
					<ul className="useroptions">
						<li>
							<Link to="/addoffers">Add an Offer</Link>
						</li>

						<li>
							<Link to="/fulloffers">Browse Full Offers with Contact Info</Link>
						</li>
						<li>
							<Link to="/addstory">
								Create an Exchange Story - COMING SOON!
							</Link>
						</li>
					</ul>
				</div>
				<div className="pageText2">
					<div>
						{/* --- Add this back in when the posted offers list grows too big ---
				
						<form>
							<div>
								<input
									className="searchInput"
									type="text"
									name="searchterm"
									value={this.state.searchterm}
									placeholder="Enter term or keyword here"
									onChange={this.handleSearchTerm("searchterm")}></input>

								<button
									type="submit"
									className="searchTermBtn"
									onClick={() => {
										this.props.dispatch({
											type: "GET_OFFERS",
											payload: "searchterm",
										});
									}}>
									SEARCH
								</button>
							</div>
						</form>
				*/}{" "}
					</div>
					<div>
						<h2>Your Current and Past Offers</h2>
						<table>
							<tbody>
								<tr>
									<th>Status</th>
									<th>Date Posted</th>
									<th>Location</th>
									<th>Items Offered</th>
									<th>Manage</th>
								</tr>
								{this.props.store.offersReducer.map((item, index) => (
									<tr key={`index-${index}`}>
										<td className="status"> {item.offer_status}</td>
										<td className="date">{item.submit_date}</td>
										<td className="location">
											{item.city}, {item.state}
										</td>
										<td className="description">{item.off_detail}</td>
										<td className="manage">
											<Link to="/editoffers">Edit/Update/Delete</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(UserPage);

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";
import "../App/App.css";

class LandingPage extends Component {
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

	render() {
		return (
			<div className="container">
				<div className="pageText">
					<h2>Welcome!</h2>

					<div className="grid">
						<div className="grid-col grid-col_1">
							<h2>Goal 1</h2>
							<p>Some text goes here</p>
						</div>

						<div className="grid-col grid-col_2"></div>

						<div className="grid-col grid-col_3">
							<h2>Goal 2</h2>
							<p>Some text goes here</p>
						</div>

						<div className="grid-col grid-col_4"></div>

						<div className="grid-col grid-col_5">
							<h2>Goal 3</h2>
							<p>Some text goes here</p>
						</div>
					</div>
				</div>

				<div className="pageText2">
					<div>
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
					</div>
					<table>
						<thead>
							<h3>Current Offers</h3>
						</thead>
						<tbody>
							<tr>
								<th>Status</th>
								<th>Date Posted</th>
								<th>Location</th>
								<th>Items Offered</th>
							</tr>
							{this.props.store.offersReducer.map((item, index) => (
								<tr key={`index-${index}`}>
									<td className="status">{item.offer_status}</td>
									<td className="date">{item.submit_date}</td>
									<td className="location">
										{item.city}, {item.state}
									</td>
									<td className="description">{item.off_detail}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default connect(mapStoreToProps)(LandingPage);

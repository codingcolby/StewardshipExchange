import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";

class AddOffersPage extends Component {
	state = {
		submitting_user_id: `${this.props.store.user.id}`,
		agency: "",
		contact_name: "",
		contact_email: "",
		ten_digit_dash_phone1: "",
		ship_options: "",
		state: "",
		city: "",
		off_cat: "",
		off_detail: "",
	};

	handleInputChangeFor = (propertyName) => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	};

	render() {
		return (
			<div className="container">
				<h2>Add an Offer for {this.props.store.user.username}</h2>
				<div className="addGrid">
					<div>
						<p className="addGridLabels">Offering Agency</p>
						<p className="addGridLabels">Contact Name</p>
						<p className="addGridLabels">Contact Email</p>
						<p className="addGridLabels">Contact Phone</p>
						<p className="addGridLabels">Shipping/Transfer</p>
						<p className="addGridLabels">State</p>
						<p className="addGridLabels">City</p>
						<p className="addGridLabels">Item Categories</p>

						<div></div>
						<p className="addGridLabels">Describe Item(s) Offered</p>
					</div>

					<div>
						<form>
							<div className="addformfields">
								<input
									type="text"
									name="agency"
									onChange={this.handleInputChangeFor("agency")}
									required
									placeholder="required - your organization's name"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="contact_name"
									onChange={this.handleInputChangeFor("contact_name")}
									required
									placeholder="required - this can be someone other than you"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="contact_email"
									onChange={this.handleInputChangeFor("contact_email")}
									required
									placeholder="required - should be for the person above"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="ten_digit_dash_phone1"
									onChange={this.handleInputChangeFor("ten_digit_dash_phone1")}
									required
									placeholder="required - should be for the person above"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="ship_options"
									onChange={this.handleInputChangeFor("ship_options")}
									required
									placeholder="Pick-up, Deliver, Meet, Ship, Negotiable"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="state"
									onChange={this.handleInputChangeFor("state")}
									required
									placeholder="required and limited to TWO LETTER ABBREVIATION - example: MO for Missouri"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="city"
									onChange={this.handleInputChangeFor("city")}
									required
									placeholder="required"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="off_cat"
									onChange={this.handleInputChangeFor("off_cat")}
									required
									placeholder="Enclosures, Supplies, Tools, Equipment, Furnishings (Storage/Display/General)"
								/>
							</div>

							<div className="addformtextbox">
								<input
									type="textbox"
									name="off_detail"
									onChange={this.handleInputChangeFor("off_detail")}
									required
									placeholder="Please describe what you are offering including quantity, quality, model or part number if known etc. "
								/>
							</div>

							<button
								type="button"
								className="SubmitBtn"
								onClick={() => {
									if (
										this.state.agency === "" ||
										this.state.contact_name === "" ||
										this.state.contact_email === "" ||
										this.state.ten_digit_dash_phone1 === "" ||
										this.state.ship_options === "" ||
										this.state.state === "" ||
										this.state.city === "" ||
										this.state.off_cat === "" ||
										this.state.off_detail === ""
									) {
										alert("All fields are required");
									}

									this.props.dispatch({
										type: "ADD_OFFERS",
										payload: this.state,
									});
								}}>
								Submit
							</button>
							{/* <button
								type="button"
								className="SubmitBtn"
								name="clearform"
								onClick={() => {
									(this.agency.value = ""),
										this.state.contact_name.value(),
										this.state.contact_email.value(),
										this.state.ten_digit_dash_phone1.value(),
										this.state.ship_options.value(),
										this.state.state.value(),
										this.state.city.value(),
										this.state.off_cat.value(),
										this.state.off_detail.value();
								}}>
								Clear Form / Add Another Offer
							</button> */}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(AddOffersPage);

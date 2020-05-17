import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";

class EditOffersPage extends Component {
	state = {
		//submitting_user_id: "",
		agency: "",
		contact_name: "",
		contact_email: "",
		ten_digit_dash_phone1: "",
		ship_options: "",
		state: "",
		city: "",
		off_cat: "",
		off_detail: "",
		off_status: "",
	};

	handleInputChangeFor = (propertyName) => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	};
	render() {
		return (
			<div className="container">
				<h2>Add an Offer Page</h2>
				<div className="addGrid">
					<div>
						<p className="addGridLabels">Offering Agency</p>
						<p className="addGridLabels">Contact Name</p>
						<p className="addGridLabels">Contact Email</p>
						<p className="addGridLabels">Contact Phone</p>
						<p className="addGridLabels">Shipping/Transfer</p>
						<p className="addGridLabels">State</p>
						<p className="addGridLabels">City</p>
						<p className="addGridLabels">Offer Status</p>
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
									value={this.state.agency}
									onChange={this.handleInputChangeFor("agency")}
									required
									placeholder="required - your organization's name"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="contact_name"
									value={this.state.contact_name}
									onChange={this.handleInputChangeFor("contact_name")}
									required
									placeholder="required - this can be someone other than you"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="contact_email"
									value={this.state.contact_email}
									onChange={this.handleInputChangeFor("contact_email")}
									required
									placeholder="required - should be for the person above"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="ten_digit_dash_phone1"
									value={this.state.ten_digit_dash_phone1}
									onChange={this.handleInputChangeFor("ten_digit_dash_phone1")}
									required
									placeholder="required - should be for the person above"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="ship_options"
									value={this.state.ship_options}
									onChange={this.handleInputChangeFor("ship_options")}
									required
									placeholder="Pick-up, Deliver, Meet, Ship, Negotiable"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="state"
									value={this.state.state}
									onChange={this.handleInputChangeFor("state")}
									required
									placeholder="required and limited to TWO LETTER ABBREVIATION - example: MO for Missouri"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="city"
									value={this.state.city}
									onChange={this.handleInputChangeFor("city")}
									required
									placeholder="required"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="off_cat"
									value={this.state.off_cat}
									onChange={this.handleInputChangeFor("off_cat")}
									required
									placeholder="Enclosures, Supplies, Tools, Equipment, Furnishings (Storage/Display/General)"
								/>
							</div>

							<div className="addformfields">
								<input
									type="text"
									name="off_status"
									value={this.state.off_status}
									onChange={this.handleInputChangeFor("off_status")}
									required
									placeholder="Pending, Revised, Claimed!, Completed"
								/>
							</div>

							<div className="addformtextbox">
								<input
									type="text"
									name="off_detail"
									value={this.state.off_detail}
									onChange={this.handleInputChangeFor("off_detail")}
									required
									placeholder="Please describe what you are offering including quantity, quality, model or part number if knwon etc. "
								/>
							</div>

							<div className="addformtextbox">
								<input
									type="text"
									name="edit_date"
									value={this.state.edit_date}
									onChange={this.handleInputChangeFor("edit_date")}
									required
									default={Date()}
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
										this.state.off_status === "" ||
										this.state.off_detail === "" ||
										this.state.edit_date === ""
									) {
										alert("All fields are required");
									}

									this.props.dispatch({
										type: "EDIT_OFFER",
										payload: this.state,
									});
								}}>
								Update Offer
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(EditOffersPage);

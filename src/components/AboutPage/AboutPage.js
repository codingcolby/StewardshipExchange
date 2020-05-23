import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";

class AboutPage extends Component {
	state = {
		person_name: "",
		person_contact: "",
		contact_msg: "",
	};

	handleInputChangeFor = (propertyName) => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	};

	render() {
		return (
			<div className="container">
				<div className="pageText">
					<h2>About Page</h2>
					<p>
						The Stewardship Exchange is entirely a volunteer effort. Currently
						we do not have funding but intend to add a donation link here to
						help defray the cost of further site development, domain
						registration, and hosting.
					</p>
					<p>
						Please reach out to us if you have comments, ideas, an interest in
						contributing to this project, or would like to inquire about
						sponsorship opportuntities.
					</p>
				</div>

				<div className="contactgridcontainer">
					<h4>We'd love to hear from you!</h4>
					<div className="contactGrid">
						<div>
							<p className="contactGridLabels">Name</p>
							<p className="contactGridLabels">Email or Phone</p>
							<p className="contactGridLabels">Message</p>
							<p></p>
						</div>
						<div>
							<form>
								<div className="formfields">
									<input
										type="text"
										name="person_name"
										onChange={this.handleInputChangeFor("person_name")}
										required
										placeholder="required"
									/>
								</div>

								<div className="formfields">
									<input
										type="text"
										name="person_contact"
										onChange={this.handleInputChangeFor("person_contact")}
										required
										placeholder="required"
									/>
								</div>

								<div className="formfields">
									<input
										type="text"
										name="contact_msg_input"
										onChange={this.handleInputChangeFor("contact_msg")}
										required
										placeholder="required"
									/>
								</div>

								<button
									type="button"
									className="SubmitBtn"
									onClick={() => {
										if (
											this.state.person_name === "" ||
											this.state.person_contact === "" ||
											this.state.contact_msg === ""
										) {
											alert("All fields are required");
										}
										this.props.dispatch({
											type: "ADD_CONTACT",
											payload: this.state,
										});
									}}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(AboutPage);

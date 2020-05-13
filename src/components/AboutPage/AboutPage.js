import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const AboutPage = () => (
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
						we do not have funding but intende to add a donation link here to
						help defray the cost of further site development, domain
						registration, and hosting.
					</p>
				</div>
				<p>We'd love to hear from you!</p>
				<div className="contactGrid">
					<form>
						<div>
							<label htmlFor="person_name">
								<span className="contactlabel">Name</span>
								<input
									className="contactInput"
									type="text"
									name="person_name"
									value={this.state.person_name}
									onChange={this.handleInputChangeFor("person_name")}
								/>
							</label>
						</div>

						<div>
							<label htmlFor="person_contact">
								<span className="contactlabel">Email and/or Phone Number</span>
								<input
									className="contactInput"
									type="text"
									name="person_contact"
									value={this.state.person_contact}
									onChange={this.handleInputChangeFor("person_contact")}
								/>
							</label>
						</div>

						<div>
							<label htmlFor="contact_msg">
								<span className="contactlabel">Message</span>
								<input
									className="contactInput"
									type="text"
									name="contact_msg"
									value={this.state.contact_msg}
									onChange={this.handleInputChangeFor("contact_msg")}
								/>
							</label>
						</div>

						<button
							type="button"
							className="contactSubmitBtn"
							onClick={() => {
								this.props.dispatch({ type: "SET_CONTACT" });
							}}>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(AboutPage);

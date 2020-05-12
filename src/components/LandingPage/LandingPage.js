import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import "./LandingPage.css";

class LandingPage extends Component {
	state = {
		heading: "Welcome!",
	};

	onLogin = (event) => {
		this.props.history.push("/login");
	};

	render() {
		return (
			<div className="container">
				<h2>{this.state.heading}</h2>

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

					{/* <div className="grid-col grid-col_4">
                        <h3>Already a Member?</h3>
                        <button
                            className="btn btn_sizeFull"
                            onClick={this.onLogin}
                        >
                            Login
                        </button>
                    </div> */}
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(LandingPage);

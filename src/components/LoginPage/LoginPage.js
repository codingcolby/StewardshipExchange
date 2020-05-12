import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";

class LoginPage extends Component {
	state = {
		username: "",
		password: "",
	};

	login = (event) => {
		event.preventDefault();

		if (this.state.username && this.state.password) {
			this.props.dispatch({
				type: "LOGIN",
				payload: {
					username: this.state.username,
					password: this.state.password,
				},
			});
		} else {
			this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
		}
	}; // end login

	handleInputChangeFor = (propertyName) => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	};

	render() {
		return (
			<div className="container">
				{this.props.store.errors.loginMessage && (
					<h2 className="alert" role="alert">
						{this.props.store.errors.loginMessage}
					</h2>
				)}
				<form className="formPanel" onSubmit={this.login}>
					<h1>Login</h1>
					<p>
						Registered users can
						<ul>
							<li>view the contact information for the offer</li>
							<li>created their own offer</li>
							<li>or successful exchange story</li>
						</ul>
						Not registered yet? It is free to{" "}
						<button
							type="button"
							className="link-button"
							onClick={() => {
								this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
							}}>
							Register
						</button>
						!
					</p>
					<div>
						<label htmlFor="username">
							Username:
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleInputChangeFor("username")}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="password">
							Password:
							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleInputChangeFor("password")}
							/>
						</label>
					</div>
					<center>
						<input
							className="log-in"
							type="submit"
							name="submit"
							value="Log In"
						/>
					</center>
				</form>
				{/* <center className="actionlinks">
					{/* <button
						type="button"
						className="link-button"
						onClick={() => {
							this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
						}}>
						Register
					</button> 
				</center> */}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(LoginPage);

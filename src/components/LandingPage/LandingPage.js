import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";
import "../App/App.css";
import { response } from "express";

class LandingPage extends Component {
	state = {
		searchterm: "",
	};

	componentDidMount() {
		// load up all information from the server
		this.props.dispatch({
			type: "SHOW_OFFERS",
			payload: response.data,
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

					<div>
						<h3>Current Offers</h3>
						{/* FIX FOR RENDERING  */}
						<ul>
							<li>{this.props.store.agency}</li>
						</ul>
					</div>

					{/* 
					<Container maxWidth={false}>
        <Grid container spacing={2}>
          {limitedResults.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              lg={2}
            >
              <MoviesListItem key={index} item={item} />
            </Grid>
          ))}
        </Grid>
      </Container> */}
					{/* 
					<div className="datagrid">
						<div className="datagrid-col datagrid-col_1">
							<h4>Status</h4>
							<div className="datagrid-row_1">
								<p className="serverData">{this.props.offers.offer_status}</p>
								<p className="serverData">Server Data Here</p>
							</div>
						</div>
						<div className="datagrid-col datagrid-col_2">
							<h4>Date Posted</h4>
							<div className="datagrid-row_1">
								<p className="serverData">Server Data Here</p>
								<p className="serverData">Server Data Here</p>
							</div>
						</div>
						<div className="datagrid-col datagrid-col_3">
							<h4>Location</h4>
							<div className="datagrid-row_1">
								<p className="serverData">Server Data Here</p>
								<p className="serverData">Server Data Here</p>
							</div>
						</div>
						<div className="datagrid-col datagrid-col_4">
							<h4>Items Offered</h4>
							<div className="datagrid-row_1">
								<p className="serverData">Server Data Here</p>
								<p className="serverData">Server Data Here</p>
							</div>
						</div>
					</div>*/}
				</div>
			</div>
		);
	}
}
export default connect(mapStoreToProps)(LandingPage);

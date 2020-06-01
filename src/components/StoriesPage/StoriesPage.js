import React, { Component } from "react";
import { connect } from "react-redux";

import mapStoreToProps from "../../redux/mapStoreToProps";
import "../pageview.css";
import "../grids.css";

class StoriesPage extends Component {
	componentDidMount() {
		// load up all information from the server
		this.props.dispatch({
			type: "GET_STORY",
		});
	}
	render() {
		return (
			<div className="container">
				<div className="pageText">
					<h2>Exchange Stories - time to celebrate!</h2>
					<p>
						Creating community is part of our mission. We invite you to share
						your exchange experience - regardless if your exchange was big or
						small, or whether you are an offering or receiving agency. Please{" "}
						<button
							type="button"
							className="dk-link-button"
							onClick={() => {
								this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
							}}>
							Login
						</button>{" "}
						and submit a story from your page.
					</p>
				</div>

				<div className="storygrid">
					{this.props.store.storyReducer.map((item, index) => (
						<div
							className="storygrid-col storygrid-col_1"
							key={`index-${index}`}>
							<p>
								<h2>${item.title}</h2>
								<p>
									<span className="offagn">
										Offering Agency:${item.off_agency}
									</span>
									<br />
									<span className="recdagn">
										Receiving Agency:${item.received_agency}
									</span>
									<br />
									<span className="storydate">${item.story_date}</span>
									<br />
									<span className="story">${item.narrative}</span>
								</p>
								Story Content Goes Here Story Content Goes Here Story Content
								Goes Here Story Content Goes Here Story Content Goes Here Story
								Content Goes Here Story Content Goes Here Story Content Goes
								Here
							</p>
							<div className="storygrid-row_1">
								<p>This space will hold a story with a horizontal photo</p>
								<p>This space will hold a story with a horizontal photo</p>
								<p>This space will hold a story with a horizontal photo</p>
								<p>This space will hold a story with a horizontal photo</p>
							</div>
						</div>
					))}
				</div>

				<div className="storygrid-col storygrid-col_2">
					<p>
						<h2>Story 2</h2>
						Story Content Goes Here Story Content Goes Here Story Content Goes
						Here Story Content Goes Here Story Content Goes Here Story Content
						Goes Here Story Content Goes Here Story Content Goes Here
					</p>
					<div className="storygrid-col storygrid-col_3">
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
					</div>
				</div>

				<div className="storygrid-col storygrid-col_2">
					<p>
						<h2>Story 3</h2>
						Story Content Goes Here Story Content Goes Here Story Content Goes
						Here Story Content Goes Here Story Content Goes Here Story Content
						Goes Here Story Content Goes Here Story Content Goes Here
					</p>
					<div className="storygrid-col storygrid-col_3">
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
						<p>This space will hold a story with a vertical photo</p>
					</div>
				</div>

				<div className="storygrid-col storygrid-col_1">
					<p>
						<h2>Story 4</h2>
						Story Content Goes Here Story Content Goes Here Story Content Goes
						Here Story Content Goes Here Story Content Goes Here Story Content
						Goes Here Story Content Goes Here Story Content Goes Here
					</p>
					<div className="storygrid-row_1">
						<p>This space will hold a story with a horizontal photo</p>
						<p>This space will hold a story with a horizontal photo</p>
						<p>This space will hold a story with a horizontal photo</p>
						<p>This space will hold a story with a horizontal photo</p>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(StoriesPage);

import React from "react";
import "../pageview.css";
import "../grids.css";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const StoriesPage = () => (
	<div className="container">
		<div className="pageText">
			<h2>Exchange Stories - time to celebrate!</h2>
			<p>
				Creating community is part of our mission. We invite you to share your
				exchange experience - regardless if your exchange was big or small, or
				whether you are an offering or receiving agency. Please{" "}
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
			<div className="storygrid-col storygrid-col_1">
				<p>
					<h2>Story 1</h2>
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
	</div>
);

export default StoriesPage;

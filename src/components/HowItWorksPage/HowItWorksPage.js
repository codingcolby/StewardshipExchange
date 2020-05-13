import React from "react";
import "../pageview.css";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const HowItWorksPage = () => (
	<div className="container">
		<div className="pageText">
			<h2>How It Works Page</h2>
			<p>
				How It Works Content Goes Here How It Works Content Goes Here How It
				Works Content Goes Here How It Works Content Goes Here How It Works
				Content Goes Here How It Works Content Goes Here How It Works Content
				Goes Here How It Works Content Goes Here
			</p>
			<h3>FAQs</h3>
			<ul>
				<li>Q: How It Works Content Goes Here</li>
				<li>A: How It Works Content Goes Here</li>
				<br />
				<li>Q: How It Works Content Goes Here</li>
				<li>A: How It Works Content Goes Here</li>
				<br />
				<li>Q: How It Works Content Goes Here</li>
				<li>A: How It Works Content Goes Here</li>
				<br />
			</ul>

			<p>
				How It Works Content Goes Here How It Works Content Goes Here How It
				Works Content Goes Here How It Works Content Goes Here How It Works
				Content Goes Here How It Works Content Goes Here How It Works Content
				Goes Here
			</p>
		</div>
	</div>
);

export default HowItWorksPage;

import React from "react";
import "../pageview.css";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const HowItWorksPage = () => (
	<div className="container">
		<p>How It Works Page</p>
	</div>
);

export default HowItWorksPage;

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
				The Stewardship Exchange's philosophy is based on good-faith, honor
				system model. We do not curate or mediate exchanges. The site server as
				"free-cycle" type forum primarily for non-profit cultural heritage
				agencies and their affiliates. It is up to both parties to substantiate
				that the offering party has done their due diligence in approving or
				obtaining approval to their governing body to dispose of the items
				offered. Exchanges are not expected to be reciprocal but may count as
				"in-kind" donations for reporting purposes or grant matching. We highly
				recommend you document the exchange in writing with both parties
				supplying a signature. We simply serve as
			</p>
			<h3>FAQs</h3>
			<ul>
				<li className="question">
					Q: How do I find out who is offering the item?
				</li>
				<li>
					A: Click on Login/Register at the top of the page. Only register users
					can view the contact information. Registration is free!
				</li>
				<br />
				<li className="question">
					Q: We are ready to do our exchange but wonder - who pays for the
					shipping?
				</li>
				<li>
					A: We encourage an in-person exchange such as a pick-up, drop-off, or
					meeting at a convenient location for both parties. If the exchange
					cannot be done in-person or is not local, shipping is to be negotiated
					by the participants. While selling not permitted on this site, either
					agency can bear the cost of shipping or the offering agency may
					request cost recovery from the receiving agency. Please consult your
					organization's budget official. This is a GREAT opportuntiy to involve
					your donor-base: reach out and see if a donor or local sponsor may be
					willing to pay for the shipping.
				</li>
				<br />
				<li className="question">
					Q: No one has claimed our offer. Can we send our items to you so they
					can be posted again later?{" "}
				</li>
				<li>
					A: If you aren't experiencing interest in your offer, considering
					revising the listing. Adding detail is an excellent way to entice
					inquiries. We do not store or ship donated items on your behalf. Also
					consider other communication options in your local or regional area
					such as professional organization chapters, MeetUp groups, or meetings
					and conferences.
				</li>
				<br />
			</ul>

			<p className="disclaimer">
				<em>Disclaimer:</em> The Stewardship Exchange does not verify or certify
				items offered or their condition. Nor do we accept physical donations.
				All exchanges are direct agency-to-agency once both agencies have
				negotiated and agreed on the terms. Obtaining contact information for
				the offering agency requires registration. By registering, you certify
				you are a recognized agent of your organization or are an authorized
				delegate (including volunteers). The offering and receiving agencies
				bear all legal and financial responsibilities and obligations for an
				exchange and agree to hold the Stewardship Exchange and its operators
				not liable for any and all matters related to an exchange.
			</p>
		</div>
	</div>
);

export default HowItWorksPage;
